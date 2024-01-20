import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let result = 0;
let getal;
//Eerste moeten wij de vraag opnieuw vragen tot het gebruiker 0 zit
do {
    getal = parseFloat(await userInput.question('Geef een getal in: '));
//Dan gebruiken wij (if) om het condition dat de getal moet groter zijn dan 0
    if (getal > 0) {
        //Als de getal groter dan 0 gaan wij de som van de getallen optellen 
        result += getal;
    }
//Hier maaken wij een loop om als de condition true is 
} while (getal > 0);
//Dan krijgen wij het resultaat
console.log(`De som is: ${result}`);

process.exit();