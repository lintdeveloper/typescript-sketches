// Determines how objects should look like
interface IUser {
    name: string,
    readonly age: number,
    address?: string //optional properties
}

// Interface Specify how functions should look like too
interface IGreet {
    (name: string, language: string): string
}

// Using functions with interfaces
let hello: IGreet;
hello = function(n: string, lang: string) {
    if(lang === "en") {
        return `Hello ${n}`
    } else {
        return `Holla ${n}`
    }
}

let myUser: IUser = {
    name: "Issa",
    age: 45
};

// myUser.age = 56  // No update coz property set as readonly



