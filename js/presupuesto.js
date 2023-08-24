/* alert("Calculá tu presupuesto!!")

// Pongo "Murcielago" sin tilde para que no sea tan complicado y no haya confuciones a la hora de darle valor al prompt
let problematica = prompt("¿Cuál es tu problemática? \n -Roedores \n -Cucarachas \n -Murcielagos \n -Palomas");
let valor = 0;

if (problematica == "Roedores") {
    valor = "$5mil";
}else if (problematica == "Cucarachas") {
    valor = "$8mil";
}else if (problematica == "Murcielagos") {
    valor = "$10mil";
}else if (problematica == "Palomas") {
    valor = "$13mil";
}else {
    valor = 0;
}


if (valor != 0) {
    alert ("Tu problema es de " + problematica + ", por lo que el precio del producto será de: " + valor)
}else {
    alert ("No elegiste una opción válida, intentá denuevo (si elegiste una de las problemáticas que aparecen entre las opciones, verificá que hayas escrito con mayúscula la primer letra)")
}

// Próximamente voy a hacer que se puedan sumar problemáticas (plagas) y que el precio final del presupesto se deba al resultado de la suma de otras cosas además de la "problematica"
 */

// Hago uso de los objetos dentro de un array para definir que tipos de tratamiento tengo :D
const problematica = [
    {nombre: "Roedores", valor: 60},
    {nombre: "Cucarachas", valor: 100},
    {nombre: "Murcielagos", valor: 120},
    {nombre: "Palomas", valor: 150}
];

// Éste log lo usé simplemete para ver como eran los objetos en el arrray 
for (const nombre of problematica) {
    console.log(nombre);
}
// Acá hago un prompt parseado para que el cliente elija cual de los problemas tiene 
let seleccionDeProblematica = parseInt(prompt("Seleccioná tu problemática:\n1. Roedores\n2. Cucarachas\n3. Murcielagos\n4. Palomas"));

// Uso un if para determinar si la problemática del usuario es válida, o sea que si el numeor que el cliente elije es menor a 1 o mayor a la cantidad de objetos dentro del array (4), le enviará una alerta de que la opción es invlida. Lo mismo pasa si el carácter ingrasaddo no es un número 
if (isNaN(seleccionDeProblematica) || seleccionDeProblematica < 1 || seleccionDeProblematica > problematica.length) {
    alert("Opción inválida. Selecciona un número válido de problemática.");
} else {
// Acá se determina la opción que seleccionó el cliente 
    const problematicaSeleccionada = problematica[seleccionDeProblematica - 1];

// Un prompt para elegir la cantidad de metros cuadrados de superficie del lugar en el que se hará el tratamiento (por ej.: no es lo mismo hacer el trabajo en un campo que en un patio de una casa xd)
let metrosCuadrados = parseFloat(prompt("Ingresá la cantidad de metros cuadrados donde se realizará el servicio:"));

// Acá validamos con un if que la cantidad de metros cuadrados se haya escrito en numero o que no sea negativa 
if (isNaN(metrosCuadrados) || metrosCuadrados <= 0) {
    alert("Valor inválido para metros cuadrados.");
} else {
// Calculo el valor total multiplicando el valor de la problematica del cliente con la cantidad de metros cuadrados que hay que trabajar
    const valorTotal = problematicaSeleccionada.valor * metrosCuadrados;

// Y finalmente con un alert le mostramos el resultado del presupuesto
    alert(`Resumen del presupuesto:\nProblemática: ${problematicaSeleccionada.nombre}\nMetros cuadrados: ${metrosCuadrados}\nValor total: $${valorTotal}`);
    }
}
