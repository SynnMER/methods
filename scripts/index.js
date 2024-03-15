function Vehicle(name, speed, x, y){
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.move = function (x, y){
        this.x = x;
        this.y = y;
    };
}
function Car(name, speed, x, y, horsePower){
    Vehicle.call(this, name, speed, x, y);
    this.horsePower = horsePower;
    this.beep = function (){
        console.log("БИИИИИИИИИП");
    }
}

Car.prototype = Vehicle.prototype;
Car.prototype.constructor = Car;

var eventsCar = new Car("BMW", 200, 0, 0, 450);

eventsCar.move(10, 20);
eventsCar.beep();
console.log(eventsCar);