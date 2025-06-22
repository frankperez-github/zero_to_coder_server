"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
exports.questions = [
    {
        "type": "syntax",
        "topics": ["operators"],
        "options": [],
        "answer": "",
        "testCases": [
            [["int", "2"], ["int", "3"], ["int", "5"]],
            [["int", "2"], ["int", "2"], ["int", "4"]]
        ],
        "solutionSignature": "(x:int, y:int) -> int",
        "hint": "Al igual que en matemática, el operador '+' es usado para calcular la suma entre dos numeros",
        "difficulty": "easy",
        "explanation": "",
        "text": "Implemente un método que reciba dos enteros y devuelva la suma de ambos."
    },
    {
        "type": "syntax",
        "topics": ["operators"],
        "difficulty": "easy",
        "text": "Implementa una función que reciba un entero y devuelva su cuadrado.",
        "solutionSignature": "(n:int) -> int",
        "hint": "Multiplica el número por sí mismo.",
        "testCases": [
            [["int", "2"], ["int", "4"]],
            [["int", "-3"], ["int", "9"]]
        ],
        "explanation": "Se retorna `n * n`."
    },
    {
        "type": "syntax",
        "topics": ["function_definition_and_usage"],
        "difficulty": "easy",
        "text": "Define una función llamada `saludo` que devuelva la cadena 'Hola'. Luego, llama a esa función y devuelve su resultado.",
        "solutionSignature": "() -> str",
        "hint": "Define una función con nombre y luego llámala.",
        "testCases": [
            [[], ["str", "Hola"]]
        ],
        "explanation": "Se define una función `saludo()` que retorna 'Hola', y luego se invoca."
    },
    {
        "type": "syntax",
        "topics": ["error_handling"],
        "difficulty": "easy",
        "text": "Recibe dos números e intenta dividir el primero entre el segundo. Si el divisor es cero, devuelve 'error'. En otro caso, devuelve el resultado.",
        "solutionSignature": "(a:int, b:int) -> any",
        "hint": "Usa una estructura para capturar errores o una condición antes de dividir.",
        "testCases": [
            [["int", "10"], ["int", "2"], ["int", "5"]],
            [["int", "5"], ["int", "0"], ["str", "error"]]
        ],
        "explanation": "Se verifica si `b == 0`, y se retorna 'error' en ese caso. Si no, se retorna `a / b`."
    },
    {
        "type": "syntax",
        "topics": ["encapsulation"],
        "difficulty": "easy",
        "text": "Implementa una función interna llamada `doble` que multiplique un número por 2. Luego, dentro de otra función principal, llama a `doble` y devuelve el resultado.",
        "solutionSignature": "(n:int) -> int",
        "hint": "Define `doble` dentro de otra función y retorna su resultado.",
        "testCases": [
            [["int", "3"], ["int", "6"]],
            [["int", "0"], ["int", "0"]]
        ],
        "explanation": "Se usa una función anidada `doble` dentro de otra función para ocultar su implementación."
    },
    {
        "type": "syntax",
        "topics": ["error_handling"],
        "difficulty": "easy",
        "text": "Recibe una cadena de texto y devuelve su versión en entero. Si la conversión falla, devuelve -1.",
        "solutionSignature": "(s:str) -> int",
        "hint": "Intenta convertir la cadena usando try/catch o su equivalente.",
        "testCases": [
            [["str", "123"], ["int", "123"]],
            [["str", "abc"], ["int", "-1"]]
        ],
        "explanation": "Se intenta convertir la cadena a entero; si falla, se captura el error y se retorna -1."
    },
    {
        "type": "syntax",
        "topics": ["encapsulation"],
        "difficulty": "easy",
        "text": "Define una función principal que invoque una función interna `cuadrado` que devuelva el cuadrado del número dado.",
        "solutionSignature": "(n:int) -> int",
        "hint": "Define la función `cuadrado` dentro de la función principal y llama a ella desde allí.",
        "testCases": [
            [["int", "4"], ["int", "16"]],
            [["int", "-2"], ["int", "4"]]
        ],
        "explanation": "Se usa una función interna `cuadrado(n)` para encapsular la lógica del cálculo."
    },
    {
        "type": "syntax",
        "topics": ["dictionaries_maps_objects"],
        "difficulty": "easy",
        "text": "Dado un diccionario de países y capitales, y un país, devuelve la capital correspondiente. Si no existe, devuelve 'desconocido'.",
        "solutionSignature": "(capitales:dict[str,str], pais:str) -> str",
        "hint": "Verifica si la clave existe en el diccionario antes de acceder.",
        "testCases": [
            [["dict[str,str]", "{'Cuba': 'La Habana', 'Francia': 'París'}"], ["str", "Cuba"], ["str", "La Habana"]],
            [["dict[str,str]", "{'Cuba': 'La Habana'}"], ["str", "España"], ["str", "desconocido"]]
        ],
        "explanation": "Se usa un acceso seguro al diccionario o una verificación con `in`/`hasOwnProperty`/`get()` según el lenguaje."
    },
    {
        "type": "syntax",
        "topics": ["accumulators"],
        "difficulty": "easy",
        "text": "Recibe una lista de cadenas y devuelve una cadena única que sea la concatenación de todas.",
        "solutionSignature": "(palabras:list[str]) -> str",
        "hint": "Inicializa una cadena vacía y ve agregando cada palabra.",
        "testCases": [
            [["list[str]", "['hola', ' ', 'mundo']"], ["str", "hola mundo"]],
            [["list[str]", "['a', 'b', 'c']"], ["str", "abc"]]
        ],
        "explanation": "Se recorre la lista y se acumulan los textos uno a uno en una sola cadena."
    },
    {
        "type": "syntax",
        "topics": ["counters"],
        "difficulty": "easy",
        "text": "Dada una lista fija de 3 valores booleanos, devuelve cuántos son verdaderos.",
        "solutionSignature": "(a:bool, b:bool, c:bool) -> int",
        "hint": "Suma 1 por cada valor que sea verdadero.",
        "testCases": [
            [["bool", "True"], ["bool", "False"], ["bool", "True"], ["int", "2"]],
            [["bool", "False"], ["bool", "False"], ["bool", "False"], ["int", "0"]]
        ],
        "explanation": "Se revisa cada uno con una expresión condicional y se suma 1 si es `True`."
    },
    {
        "type": "syntax",
        "topics": ["conditionals"],
        "difficulty": "easy",
        "text": "Recibe dos números y devuelve el mayor de los dos.",
        "solutionSignature": "(a:int, b:int) -> int",
        "hint": "Usa una estructura `if` para comparar ambos valores.",
        "testCases": [
            [["int", "3"], ["int", "5"], ["int", "5"]],
            [["int", "10"], ["int", "2"], ["int", "10"]]
        ],
        "explanation": "Se compara `a` con `b` usando `if` y se retorna el mayor."
    },
    {
        "type": "syntax",
        "topics": ["conditionals"],
        "difficulty": "easy",
        "text": "Recibe un número entero y devuelve la cadena 'par' si es divisible por 2 o 'impar' si no lo es.",
        "solutionSignature": "(n:int) -> str",
        "hint": "Usa el operador módulo `%` para verificar si es divisible por 2.",
        "testCases": [
            [["int", "4"], ["str", "par"]],
            [["int", "7"], ["str", "impar"]]
        ],
        "explanation": "Si `n % 2 == 0`, es par; de lo contrario, es impar."
    },
    {
        "type": "syntax",
        "topics": ["conditionals"],
        "difficulty": "easy",
        "text": "Recibe un número y devuelve 'positivo', 'negativo' o 'cero' según su valor.",
        "solutionSignature": "(n:int) -> str",
        "hint": "Usa una estructura `if` con `elif` y `else`.",
        "testCases": [
            [["int", "5"], ["str", "positivo"]],
            [["int", "-3"], ["str", "negativo"]],
            [["int", "0"], ["str", "cero"]]
        ],
        "explanation": "Se usa una estructura condicional múltiple para cubrir los tres casos."
    },
    {
        "type": "syntax",
        "topics": ["conditionals"],
        "difficulty": "easy",
        "text": "Recibe una edad y devuelve 'permitido' si es mayor o igual a 18, y 'denegado' si es menor.",
        "solutionSignature": "(edad:int) -> str",
        "hint": "Compara la edad con 18 y retorna el mensaje adecuado.",
        "testCases": [
            [["int", "20"], ["str", "permitido"]],
            [["int", "16"], ["str", "denegado"]]
        ],
        "explanation": "Se usa una condición simple para validar si la edad permite acceso."
    }
];
