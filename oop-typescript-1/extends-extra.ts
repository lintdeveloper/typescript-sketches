interface IUser {
    name: string;
    readonly age: number;
    address?: string;
    [property: string]: any
}

let adminUser: IUser = {
    name: "John",
    age: 33,
    test: 1,
    xyz: "asdf"
}

// accessing values from typescript
// adminUser.name --->ts version < 2.2