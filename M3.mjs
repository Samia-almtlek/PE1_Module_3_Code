import * as readline from 'node:readline/promises';

import{stdin as input, stdout as output} from 'node:process';

const userInput = readline.createInterface({input, output});

let getal= parseFloat (await userInput.question('Geef een etal in:'));

 

if(getal%2 !==0 && getal%3 !==0 && getal%5 !==0 && getal%7 !== 0 && getal % 9 !== 0  ){

    console.log(`${getal} is  een primitive getal `);

 

}else{

    console.log (`${getal} is niet een primitive getal`);

}

 

process.exit();