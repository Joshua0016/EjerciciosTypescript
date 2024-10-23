import promptSync from 'prompt-sync';

const prompt = promptSync();
console.log("\nINSTRUCCIONES...");
console.log("ingresa los números de los cuales deseas ver su tabla de multiplicación, cada número debe estar separados por una coma ',')\n");
console.log("Debe de ingresar un mínimo de 4 números y un máximo de 10");

let number : string = prompt();
let ArrayNumbers : number[] = number.split(",").map(Number);


if(ArrayNumbers.length >= 4 && ArrayNumbers.length <= 10){
    
console.log("ingresar los números que quieres multiplicar\n");
    
    for(let i = 0; i < ArrayNumbers.length; i++){
        let contador:number = 1;
        while(contador < 11){
            console.log(`${ArrayNumbers[i]} x ${contador} = ${ArrayNumbers[i] * contador}`);
            contador+=1;
        }
        console.log("");
    }
}
else console.log("Error... Debes de ingresar un mínimo de 4 números hasta un máximo de 10");
