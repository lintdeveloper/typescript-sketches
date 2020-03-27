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

class Truck extends Car {
    getMaxSpeed() {
        return `Maximum truck speed is ${this.speed} km/h`
    }
    getMake() {
        return `This truck is a ${this.make}`
    }
}

const car = new Car("BMW", "Blue", 250)
const truck = new Truck("MAN", 'black', 80)

console.log(car.getMaxSpeed());
console.log(truck.getMaxSpeed());
