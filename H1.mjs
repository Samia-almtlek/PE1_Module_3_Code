let hoogte = 5;
let uitvoer = '';

// Bovenste deel van de diamant
for (let i = 0; i < hoogte; i++) {
    uitvoer = "";
    for (let j = 0; j < hoogte - i - 1; j++) {
        uitvoer += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        uitvoer += "*";
    }
    console.log(uitvoer);
}

// Onderste deel van de diamant
for (let i = hoogte - 2; i >= 0; i--) {
    uitvoer = "";
    for (let j = 0; j < hoogte - i - 1; j++) {
        uitvoer += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        uitvoer += "*";
    }
    console.log(uitvoer);
}
