import Hero from './hero';

let batman = new Hero('batman');
batman.age = 33;
batman.addPower("money");
console.log(batman.listPowers());
