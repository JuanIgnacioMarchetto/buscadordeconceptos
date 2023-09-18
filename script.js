
const conceptosJavaScript = [
    {
        concepto: "variable",
        respuesta: "Una variable en JavaScript es un contenedor para almacenar datos.",
        ejemplo: "Ejemplo: let nombre = 'Juan';"
    },
    {
        concepto: "funcion",
        respuesta: "Una función en JavaScript es un bloque de código reutilizable que realiza una tarea específica.",
        ejemplo: "Ejemplo: function sumar(a, b) { return a + b; }"
    },
    {
        concepto: "condicional",
        respuesta: "Las declaraciones condicionales, como if y else, se utilizan para tomar decisiones en JavaScript.",
        ejemplo: "Ejemplo: if (edad >= 18) { console.log('Eres mayor de edad.'); } else { console.log('Eres menor de edad.'); }"
    },
    {
        concepto: "bucle",
        respuesta: "Los bucles, como for y while, se utilizan para repetir acciones en JavaScript.",
        ejemplo: "Ejemplo: for (let i = 0; i < 5; i++) { console.log('Número: ' + i); }"
    },
    {
        concepto: "objeto",
        respuesta: "Un objeto en JavaScript es una colección de propiedades y métodos relacionados.",
        ejemplo: "Ejemplo: const persona = { nombre: 'Ana', edad: 30 };"
    },
    {
        concepto: "evento",
        respuesta: "Los eventos en JavaScript son acciones que ocurren en el navegador, como hacer clic en un botón.",
        ejemplo: "Ejemplo: document.querySelector('button').addEventListener('click', function() { console.log('Botón clickeado'); });"
    },
    {
        concepto: "map",
        respuesta: "El método map() crea un nuevo array con los resultados de aplicar una función a cada elemento de un array existente.",
        ejemplo: "Ejemplo: const numeros = [1, 2, 3]; const duplicados = numeros.map(num => num * 2);"
    },
    {
        concepto: "sort",
        respuesta: "El método sort() ordena los elementos de un array en su lugar y devuelve el array.",
        ejemplo: "Ejemplo: const frutas = ['manzana', 'pera', 'uva']; frutas.sort();"
    },
    {
        concepto: "filter",
        respuesta: "El método filter() crea un nuevo array con todos los elementos que cumplan una condición determinada.",
        ejemplo: "Ejemplo: const numeros = [1, 2, 3, 4, 5]; const pares = numeros.filter(num => num % 2 === 0);"
    },
    {
        concepto: "find",
        respuesta: "El método find() devuelve el primer elemento de un array que cumple con una condición determinada.",
        ejemplo: "Ejemplo: const personas = [{ nombre: 'Juan', edad: 25 }, { nombre: 'Ana', edad: 30 }]; const persona = personas.find(p => p.edad === 30);"
    },
    {
        concepto: "some",
        respuesta: "El método some() verifica si al menos un elemento de un array cumple con una condición determinada.",
        ejemplo: "Ejemplo: const numeros = [1, 2, 3, 4, 5]; const hayPares = numeros.some(num => num % 2 === 0);"
    }
];


function buscarConcepto() {
    const input = document.getElementById("searchInput");
    const resultadoDiv = document.getElementById("resultado");
    const conceptoBuscado = input.value.toLowerCase();

    const conceptoEncontrado = conceptosJavaScript.find(concepto => concepto.concepto === conceptoBuscado);

    if (conceptoEncontrado) {
        const respuesta = conceptoEncontrado.respuesta;
        const ejemplo = conceptoEncontrado.ejemplo;

        resultadoDiv.innerHTML = `<p>${respuesta}</p><p>Ejemplo: <span id="ejemploText"></span></p>`;
        
        // Efecto de "máquina de escribir" para el ejemplo
        const ejemploText = document.getElementById("ejemploText");
        let index = 0;
        const velocidadEscritura = 50; // Velocidad de escritura en milisegundos

        function escribirEjemplo() {
            if (index < ejemplo.length) {
                ejemploText.textContent += ejemplo.charAt(index);
                index++;
                setTimeout(escribirEjemplo, velocidadEscritura);
            }
        }

        escribirEjemplo();
    } else {
        resultadoDiv.textContent = "Concepto no encontrado.";
    }
}
