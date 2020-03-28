type User = {
    name: string,
    age: number
}

// tsc allows merging of type intefaces rather when compapred to types
interface User2 {
    name: string,
    age: number   
}

// This is being combined
interface User2 {
    address: String
}


// Discovers this requires the address
// let userX: User2 = {
//     name: "Ibro",
//     age: 33,
//     // address: "28 Bello Way"
// }

