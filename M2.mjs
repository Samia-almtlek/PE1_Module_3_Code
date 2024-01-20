/*let i = 0;
let star='*';
while(i <= 3){
    console.log(star);
   star +='*';
i++;
}*/
/*let hoogte='*';

for (let i=0; i<=3; i++) {
    console.log(hoogte)
    hoogte+="*"
}*/
let hoogte=4 ;
for (let i = 1; i <= hoogte; i++) {

    let star = "";
    for (let j = 1; j <= i; j++) {
        star += "*";
    }

    console.log(star);
}