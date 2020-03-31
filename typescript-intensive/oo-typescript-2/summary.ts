interface IPerson {
    name: string;
    age: number;
}

interface IHero extends IPerson {
    superpowers: string[]
}


abstract class  Human implements IPerson  {
    name: string;
    age: number;
    constructor(name: string) {
        this.name = name;
    }
    abstract showAge(): number;
}

class Person extends Human {
    constructor(name: string) {
        super(name);
    }
    showAge(): number {
        return this.age;
    }
}

class Hero extends Person implements IHero {
    superpowers: string[] = [];
    constructor(name: string) {
        super(name)
    }
    addPower(power: string): void {
        this.superpowers.push(power)
    }
    listPowers(): string[] {
        return this.superpowers;
    }
}

let batman = new Hero('batman');
batman.age = 33;
batman.addPower("money");
console.log(batman.listPowers());
