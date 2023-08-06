let num1= parseInt(prompt("Ingresa tu primer número"))
let num2= parseInt(prompt("Ingresa tu segundo número"))

function calculadora(num1,num2,operacion){
    switch (operacion) {
        case "+": 
            return num1 + num2;
        case "-": 
            return num1 - num2;
        case "*": 
            return num1 * num2;
        case "/": 
            return num1 / num2;
        default:
            return "Operación inválida"
    }
}

let resultadoSuma= calculadora(num1,num2,"+");
let resultadoResta= calculadora(num1,num2,"-");
let resultadoMulti= calculadora(num1,num2,"*");
let resultadoDivi= calculadora(num1,num2,"/");
alert("La suma entre " + num1 + " y " + num2 + " es " + "= " + resultadoSuma);
alert("La resta entre " + num1 + " y " + num2 + " es " + "= " + resultadoResta);
alert("La multiplicación entre " + num1 + " y " + num2 + " es " + "= " + resultadoMulti);
if(num2 == 0) {
    alert("La división entre " + num1 + " y " + num2 + " es " + "= " + "NO SE PUEDE DIVIDIR ENTRE CERO")
}else{
    alert("La división entre " + num1 + " y " + num2 + " es " + "= " + resultadoDivi);
}
/* let resultadoSuma= calculadora(num1,num2,"+");
let resultadoResta= calculadora(num1,num2,"-");
let resultadoMulti= calculadora(resultadoResta,resultadoSuma,"*");
alert("La suma entre " + num1 + " y " + num2 + " es " + resultadoSuma);
alert("La resta entre " + num1 + " y " + num2 + " es " + resultadoResta);
alert("La multiplicación entre " + resultadoSuma + " y " + resultadoResta + " es " + resultadoMulti); */