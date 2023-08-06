alert("Calculá tu presupuesto!!")

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
