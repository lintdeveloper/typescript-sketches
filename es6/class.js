// Just a syntactic sugar on JS prototypes
// Class, extends super
class Car {
    constructor(make, color, speed) {
        this.make = make;
        this.color = color;
        this.speed = speed;
    }

    getMaxSpeed() {
        return `Maximum speed is ${this.speed} km/h`;
    }
}

const car = new Car("BMW", "Blue", 250)

console.log(car.getMaxSpeed());
