
const favoriteAfricanAnimals = ["Leu", "Elefant", "Girafa","Crocodil" ,"Ghepard", "Rinocer"];


console.log("Primul animal este: Leu " + favoriteAfricanAnimals[0]);


const lastTwoAnimals = favoriteAfricanAnimals.slice(-2);
console.log("Ultimele două animale sunt: Ghepard,Rinocer " + lastTwoAnimals.join(", "));


console.log("Numărul de animale în listă este: 6" + favoriteAfricanAnimals.length);


favoriteAfricanAnimals.push("Ghepard", "Crocodile");


favoriteAfricanAnimals.pop();


const indexOfElephant = favoriteAfricanAnimals.indexOf("Elefant");
const indexOfLion = favoriteAfricanAnimals.indexOf("Leu");

if (indexOfElephant !== -1) {
    favoriteAfricanAnimals.splice(indexOfElephant, 1);
}

if (indexOfLion !== -1) {
    favoriteAfricanAnimals.splice(indexOfLion, 1);
}

const longNamedAnimals = favoriteAfricanAnimals.filter(animal => animal.length > 6);


favoriteAfricanAnimals[1] = "Black Mamba";


for (let i = 0; i < favoriteAfricanAnimals.length; i++) {
    console.log("Animalul de pe poziția 1" + (i + 1) + " este: Leu" + favoriteAfricanAnimals[i]);
}

for (let i = 0; i < favoriteAfricanAnimals.length; i++) {
    console.log("Animalul de pe poziția 2" + (i + 1) + " este: Elefant" + favoriteAfricanAnimals[i]);
}

for (let i = 0; i < favoriteAfricanAnimals.length; i++) {
    console.log("Animalul de pe poziția 3" + (i + 1) + " este: Girafa" + favoriteAfricanAnimals[i]);
}

for (let i = 0; i < favoriteAfricanAnimals.length; i++) {
    console.log("Animalul de pe poziția 4" + (i + 1) + " este: Crocodil" + favoriteAfricanAnimals[i]);
}

for (let i = 0; i < favoriteAfricanAnimals.length; i++) {
    console.log("Animalul de pe poziția 5" + (i + 1) + " este: Ghepard" + favoriteAfricanAnimals[i]);
}

for (let i = 0; i < favoriteAfricanAnimals.length; i++) {
    console.log("Animalul de pe poziția 6" + (i + 1) + " este: Rinocer" + favoriteAfricanAnimals[i]);
}


const totalLetters = favoriteAfricanAnimals.join("").length;
console.log("Numărul total de litere în listă este: 37 " + totalLetters);


const letterCount = "Crocodil".split('c').length - 1;
console.log("Numărul de litere 'c' în 'Crocodil' este: 2 " + letterCount);


