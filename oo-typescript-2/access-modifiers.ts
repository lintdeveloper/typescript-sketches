class Person {
//    public  name: string;
    private name: string // no access
    // protected ==> grants access at child level but no access after instantiation of class
    // readonly --> cant give a new name to values or methods
    constructor(name: string) {
        this.name = name;
    }
    greet(): string {
        return `Hello ${this.name}`
    }
}

// let myPerson = new Person('John')
// myPerson.greet();

class Hero extends Person {
    superpowers: string[] = []
    constructor(name: string) {
        super(name);
    }
    addPower(power: string): void {
        this.superpowers.push(power);
    }
    listPowers(): string[] {
        return this.superpowers;
    }
}

let batman = new Hero("Bruce");
batman.name = "Issa"
console.log(batman.greet());
