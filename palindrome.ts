import promptSync from "prompt-sync";
let prompt = promptSync();

console.log("\nEste programa revisará si el nombre que ingrese es Palíndrome");

let input : string = prompt("Ingrese cualquiero tipo de nombre ");

let reverso = input.split('').reverse().join('');

if(input === reverso){
    console.log("Es una palabra palindrome");
}
else console.log("No es una palabra palindrome\n");
