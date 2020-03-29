// /* tslint:disable */ --> not advisable
import Hero from './hero';

const batman = new Hero('batman');
batman.age = 33;
batman.addPower("money");
// /* tslint:disable:no-console */
console.log(batman.listPowers());
