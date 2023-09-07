// Hago uso de los objetos dentro de un array para definir que tipos de tratamiento tengo :D
const problematica = [
    {nombre: "Roedores", valor: 60},
    {nombre: "Cucarachas", valor: 100},
    {nombre: "Murcielagos", valor: 120},
    {nombre: "Palomas", valor: 150}
];

// Función para buscar problemáticas por nombre
function busquedaDeProblematica(busqueda) {
    busqueda = busqueda.toLowerCase();
    const resultadoProblematicas = problematica.filter(problematica => problematica.nombre.toLowerCase().includes(busqueda));
    return resultadoProblematicas;
};

// Éste log lo usé simplemete para ver como eran los objetos en el arrray 
for (const nombre of problematica) {
    console.log(nombre);
}

// Agregué éste evento para que todo el presupuesto se calcule después de que el cliente rellene el formulario y lo envíe
const boton = document.querySelector ("button.botonForm")
boton.addEventListener("click", () =>{

// Acá hago un prompt parseado para que el cliente elija cual de los problemas tiene 
const seleccionDeProblematica = parseInt(prompt("Seleccioná tu problemática:\n1. Roedores\n2. Cucarachas\n3. Murcielagos\n4. Palomas"));

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

// Buscador de problemática
    const buscarProblematica = prompt("Buscá tu problemática:");
    if (buscarProblematica) {
        const resultadoProblematicas = busquedaDeProblematica(buscarProblematica);
        if (resultadoProblematicas.length > 0) {
            alert("Problemáticas:");
            for (const problema of resultadoProblematicas) {
                alert(`${problema.nombre}: $${problema.valor} por metro cada metro cuadrado`);
            }
        } else {
            alert("No se encontraron problemáticas que coincidan con la búsqueda.");
        }
    }
}
}
});


const formulario = document.querySelector("form.formularioProblema");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombreCliente = e.target[0].value;
    const correoCliente = e.target[1].value;
    const telefonoCliente = e.target[2].value;
    const problemaCliente = e.target[3].value;

    const respuestas = {
        nombre: nombreCliente,
        correo: correoCliente,
        telefono: telefonoCliente,
        direccion: problemaCliente,
};


    localStorage.setItem("Cliente", JSON.stringify(respuestas));

});


// PD: me costó mucho añadir evento y cuando lo logré me di cuenta que era una pavada xD