import { v4 as uuidv4 } from 'uuid';
uuidv4();

for (let i = 0; i < 1000; i++) {
    console.log(uuidv4());
}

let names = ["Tom", "Ulyse", "Lucas", "Pierre", "Maxime", "Radwane", "Benjamin", "Poutine", "Chemin"];

console.log(names[Math.floor(Math.random() * names.length)]);