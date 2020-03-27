// const arr = [1, 2, "hello"]
// const [a, b] = arr;
// console.log(b);

// Destructuring coming from api
/*
const response = {
    count: 10,
    data: [{
        name : "Musa Ahmad",
        films: ["Falling Angels", "The Force Awakens"]
    }]
}

const { count, data: [{name, films}]}  = response;
console.log(name); */

/*
const response = {
    count: 10,
    data: [{
        name : "Musa Ahmad",
        films: ["Falling Angels", "The Force Awakens"]
    }, {
        name : "Han Solo",
        films: ["Falling Angels", "The Force Awakens"]
    }]
}


response.data.forEach(r => {
    let {name} = r;
    console.log(name);
}) */


// Using property value shorthand
/*const name = "Ismail";
const age = 50;

const person = {
    name, 
    age
}
console.log(person.name); */


// Computed Property Keys
// Read properties out of objects dynamically
/*function nameMe(name) {
    return {
        [name]: {
            message: `My name is ${name}`
        }
    }
}
console.log(nameMe('Issa')); */





