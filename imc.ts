import promptSync from "prompt-sync";
const prompt = promptSync();

const imc = function(peso:number, altura:number):number{
    let alturaFinal = Math.pow(altura, 2);
    let IndiceMC = peso / alturaFinal;
    let resultado = parseFloat(IndiceMC.toFixed(4));
    return resultado;
}

const peso = parseInt(prompt("\ningresar su peso en Kilogramoss: "));
const altura = parseFloat(prompt("ingresar su altura en Metros: "));

console.log(`Su índice de masa corporal es ${imc(peso,altura)}`);