interface IPerson {
    name: string;
}

class Person implements IPerson {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}