document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("button.botonForm");

    // Cambié los valores a dolar porque nos dolarizamos :D
const problematica = [
    { nombre: "Roedores", valor: 1 },
    { nombre: "Cucarachas", valor: 1.8 },
    { nombre: "Murcielagos", valor: 2 },
    { nombre: "Palomas", valor: 2.2 }
];

function busquedaDeProblematica(busqueda) {
    busqueda = busqueda.toLowerCase();
    const resultadoProblematicas = problematica.filter(problematica => problematica.nombre.toLowerCase().includes(busqueda));
    return resultadoProblematicas;
};

    boton.addEventListener("click", () => {
        
        Swal.fire({
            title: "Selecciona tu problemática",
            text: "1. Roedores\n2. Cucarachas\n3. Murcielagos\n4. Palomas",
            input: "number",
            inputPlaceholder: "Elige una opción (1-4)",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            inputValidator: (value) => {
                if (isNaN(value) || value < 1 || value > 4) {
                    return "Tenés que seleccionar una opción válida (1-4)";
                }
            }
        }).then((result1) => {
            if (!result1.isDismissed) {
                const seleccionDeProblematica = parseInt(result1.value);
                const problematicaSeleccionada = problematica[seleccionDeProblematica - 1];

                Swal.fire({
                    title: "Ingresá la cantidad de metros cuadrados",
                    input: "number",
                    inputPlaceholder: "Ingresá cantidad numérica",
                    inputAttributes: {
                        min: "0"
                    },
                    inputValidator: (value) => {
                        if (isNaN(value) || value <= 0) {
                            return "Valor inválido para metros cuadrados";
                        }
                    }
                }).then((result2) => {
                    if (!result2.isDismissed) {
                        const metrosCuadrados = parseFloat(result2.value);
                        const valorTotal = problematicaSeleccionada.valor * metrosCuadrados;

                        Swal.fire({
                            title: "Resumen del presupuesto",
                            html: `Problemática: ${problematicaSeleccionada.nombre}<br>Metros cuadrados: ${metrosCuadrados}<br>Valor total: $${valorTotal.toFixed(2)}`
                        }).then((result3) => {
                            if (!result3.isDismissed) {
                                Swal.fire({
                                    title: "Buscá tu problemática",
                                    input: "text",
                                    inputPlaceholder: "Escribí tu problemática",
                                    showCancelButton: true,
                                    cancelButtonText: "Cancelar"
                                }).then((result4) => {
                                    if (!result4.isDismissed && result4.value) {
                                        const buscarProblematica = result4.value;
                                        const resultadoProblematicas = busquedaDeProblematica(buscarProblematica);
                                        if (resultadoProblematicas.length > 0) {
                                            for (const problema of resultadoProblematicas) {
                                                Swal.fire(`${problema.nombre}: $${problema.valor} cada metro cuadrado`);
                                            }
                                        } else {
                                            Swal.fire("No se encontraron problemáticas que coincidan con la búsqueda.");
                                        }
                                    }
                                });
                            }
                        })
                    }
                });
            }
        });
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
            problema: problemaCliente
        };

        localStorage.setItem("Cliente", JSON.stringify(respuestas));
    });
});


