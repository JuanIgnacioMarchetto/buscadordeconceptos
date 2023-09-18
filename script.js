// Definir un objeto que almacena conceptos de JavaScript y sus respuestas
const conceptosJavaScript = [
    {
        concepto: "variable",
        respuesta: "Una variable en JavaScript es un contenedor para almacenar datos."
    },
    {
        concepto: "funcion",
        respuesta: "Una función en JavaScript es un bloque de código reutilizable que realiza una tarea específica."
    },
    {
        concepto: "condicional",
        respuesta: "Las declaraciones condicionales, como if y else, se utilizan para tomar decisiones en JavaScript."
    },
    {
        concepto: "bucle",
        respuesta: "Los bucles, como for y while, se utilizan para repetir acciones en JavaScript."
    },
    {
        concepto: "objeto",
        respuesta: "Un objeto en JavaScript es una colección de propiedades y métodos relacionados."
    },
    {
        concepto: "evento",
        respuesta: "Los eventos en JavaScript son acciones que ocurren en el navegador, como hacer clic en un botón."
    },
    {
        concepto: "map",
        respuesta: "El método map() crea un nuevo array con los resultados de aplicar una función a cada elemento de un array existente."
    },
    {
        concepto: "sort",
        respuesta: "El método sort() ordena los elementos de un array en su lugar y devuelve el array."
    },
    {
        concepto: "filter",
        respuesta: "El método filter() crea un nuevo array con todos los elementos que cumplan una condición determinada."
    },
    {
        concepto: "find",
        respuesta: "El método find() devuelve el primer elemento de un array que cumple con una condición determinada."
    },
    {
        concepto: "some",
        respuesta: "El método some() verifica si al menos un elemento de un array cumple con una condición determinada."
    }
];

// Función para buscar un concepto en el objeto conceptosJavaScript
function buscarConcepto() {
    const input = document.getElementById("searchInput");
    const resultadoDiv = document.getElementById("resultado");
    const conceptoBuscado = input.value.toLowerCase();

    const conceptoEncontrado = conceptosJavaScript.find(concepto => concepto.concepto === conceptoBuscado);

    if (conceptoEncontrado) {
        resultadoDiv.textContent = conceptoEncontrado.respuesta;
    } else {
        resultadoDiv.textContent = "Concepto no encontrado.";
    }
}
