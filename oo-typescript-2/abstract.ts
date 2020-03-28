abstract class Human {
    public name: string;
    public age: number;
    constructor(name: string) {
        this.name = name;
    }

    abstract greet(): void;
}

class Person extends Human {
    constructor(name: string) {
        super(name);
    }
    greet(): void {
        console.log('Hello there');
    }
}

let john = new Person("John");
john.greet();