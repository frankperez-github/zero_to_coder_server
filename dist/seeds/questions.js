"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
exports.questions = [
    /* {
      type: 'logic',
      topics: ['operators'],
      text: 'What is the result of this operation? 5 + (3 * 2) - 8',
      options: ['5', '3', '10', '11'],
      answer: '3',
      testCases: [],
      hint: 'Remember the order of operations (PEMDAS).',
      difficulty: 'easy',
      explanation: 'This question tests your knowledge of the order of operations (PEMDAS). First, you do the multiplication (3 * 2 = 6), then add and subtract in order: 5 + 6 - 8 = 3.',
    },
    {
      type: 'logic',
      topics: ['operators'],
      text: 'Which number is missing in the following equation? 3 * _ = 24',
      options: ['5', '6', '7', '8'],
      answer: '8',
      testCases: [],
      hint: 'Think about multiplication.',
      difficulty: 'easy',
      explanation: 'This question tests basic multiplication. To find the missing number, divide 24 by 3: 24 ÷ 3 = 8.',
    },
  
    // Lista de preguntas sobre listas (desde archivo)
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que pida al usuario un número y verifique si ese número está presente en una lista de números predefinida.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Usa una estructura de control para verificar la pertenencia en la lista.',
      difficulty: 'easy',
      explanation: 'La lógica consiste en usar una instrucción condicional para verificar si el número ingresado está en una lista predefinida.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que sume todos los elementos de una lista de números y muestre el resultado.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Usa un bucle para recorrer la lista.',
      difficulty: 'easy',
      explanation: 'Se recorre la lista acumulando la suma en una variable.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que recorra una lista de números y muestre solo aquellos que son pares.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Utiliza el operador módulo (%) para identificar los pares.',
      difficulty: 'easy',
      explanation: 'Los números pares se detectan comprobando si el resto al dividir por 2 es 0.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que cuente cuántos elementos en una lista son mayores que 50 y muestre ese conteo.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Usa una variable contador y una condición dentro de un bucle.',
      difficulty: 'easy',
      explanation: 'Se cuenta cada elemento que cumple la condición de ser mayor que 50.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que encuentre el número mayor en una lista de números y lo muestre.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Mantén una variable con el mayor valor encontrado durante el recorrido.',
      difficulty: 'easy',
      explanation: 'Comparando cada número con el mayor actual se puede obtener el máximo.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que tenga una lista de calificaciones de estudiantes y clasifique cada calificación como "Aprobado" (60 o más) o "Reprobado" (menos de 60). Muestra el resultado para cada estudiante.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Usa una estructura condicional para clasificar.',
      difficulty: 'easy',
      explanation: 'Cada elemento se compara con 60 para decidir si está aprobado o reprobado.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que tome una lista de elementos y la invierta, mostrando la lista invertida al final.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Utiliza un índice decreciente o una función de inversión.',
      difficulty: 'medium',
      explanation: 'La inversión puede lograrse recorriendo la lista desde el final o usando un método que la invierta directamente.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que recorra una lista de números y elimine los duplicados, mostrando la lista resultante sin duplicados.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Utiliza una nueva lista para guardar los elementos únicos.',
      difficulty: 'medium',
      explanation: 'La lista resultante se forma añadiendo solo los elementos que no estén ya en ella.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que calcule el promedio de los números en una lista y muestre el resultado.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Suma los elementos y divide entre la cantidad.',
      difficulty: 'easy',
      explanation: 'El promedio se obtiene dividiendo la suma total de los números por la cantidad de elementos.',
    },
    {
      type: 'syntax',
      topics: ['arrays'],
      text: 'Escribe un pseudocódigo que verifique si una lista de números está ordenada de menor a mayor.',
      options: [],
      answer: '',
      testCases: [],
      hint: 'Compara cada par de elementos consecutivos.',
      difficulty: 'medium',
      explanation: 'Si algún elemento es mayor que el siguiente, la lista no está ordenada.',
    },
      {
        type: "syntax",
        topics: [
          "data_types",
          "input_output",
          "comments",
          "basic_syntax",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "\n//Solicitar al usuario que ingrese un número entero\nConsole.Write(\"Ingrese un número entero: \");\n\n// Leer el número ingresado por el usuario\nint number = Convert.ToInt32(Console.ReadLine());\n\n// Calcular el doble del número\nint doble = number * 2;\n\n// Mostrar el resultado en la consola\nConsole.WriteLine($\"El doble de {number} es {double}\");\n",
        text: "Escribe un programa que lea de la consola un número entero y muestre en la consola su doble.\n\nEjemplos:\n* Entrada: `4`\n  Salida: `8`\n* Entrada: `-5`\n  Salida: `-10`\n* Entrada: `0`\n  Salida: `0`"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Escribe un programa que lea de la consola la base \\(b\\) y la altura \\(h\\) de un triángulo, calcule su área y la escriba en la consola.\\\\\n\\[\n\\text{Área} = \\frac{b \\cdot h}{2}\n\\]\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{b = 10, h = 5}\\\\\n          Salida: \\texttt{Área = 25}\n    \\item Entrada: \\texttt{b = 3, h = 4}\\\\\n          Salida: \\texttt{Área = 6}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Escribe un programa que lea tres números reales \\(x\\), \\(y\\) y \\(z\\) de la consola, calcule su promedio y lo muestre en la consola.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{3.0, 4.0, 5.0}\\\\\n          Salida: \\texttt{Promedio = 4.0}\n    \\item Entrada: \\texttt{-1.0, -2.0, -3.0}\\\\\n          Salida: \\texttt{Promedio = -2.0}\n    \\item Entrada: \\texttt{10.5, 20.5, 30.5}\\\\\n          Salida: \\texttt{Promedio = 20.5}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Escribe un programa que lea de la consola una temperatura en grados Fahrenheit (\\(F\\)), la convierta a grados Celsius (\\(C\\)) y muestre el resultado en la consola.\\\\ \n\\[\nC = \\frac{5}{9} \\cdot (F - 32)\n\\]\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{F = 50}\\\\\n          Salida: \\texttt{C = 10}\n    \\item Entrada: \\texttt{F = 32}\\\\\n          Salida: \\texttt{C = 0}\n    \\item Entrada: \\texttt{F = 96.8}\\\\\n          Salida: \\texttt{C = 36}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Escribe un programa que lea de la consola el radio \\(r\\) de un círculo, calcule su perímetro y su área, y muestre ambos resultados en la consola.\\\\   \n\\[\n\\text{Perímetro} = 2\\pi r, \\quad \\text{Área} = \\pi r^2\n\\]\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{r = 3}\\\\\n          Salida: \\texttt{Perímetro = 18.8496, Área = 28.2744}\n    \\item Entrada: \\texttt{r = 0}\\\\\n          Salida: \\texttt{Perímetro = 0, Área = 0}\n    \\item Entrada: \\texttt{r = 1.5}\\\\\n          Salida: \\texttt{Perímetro = 9.4248, Área = 7.0686}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Escribe un programa que lea de la consola los catetos \\(a\\) y \\(b\\) de un triángulo rectángulo, calcule la longitud de su hipotenusa y la escriba en la consola.\\\\\n\\[\nc = \\sqrt{a^2 + b^2}\n\\]\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{a = 3, b = 4}\\\\\n          Salida: \\texttt{c = 5}\n    \\item Entrada: \\texttt{a = 5, b = 12}\\\\\n          Salida: \\texttt{c = 13}\n    \\item Entrada: \\texttt{a = 8, b = 15}\\\\\n          Salida: \\texttt{c = 17}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "conditionals",
          "accumulators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Escribe un programa que lea un número entero de tres cifras \\(n\\) de la consola, calcule la suma de sus dígitos y la muestre en la consola.\\\\\nPor ejemplo si \\(n = 123\\), entonces:\n\\[\n\\text{suma} = 1 + 2 + 3\n\\]\nPista: Usa la división y resto de la división para extraer los dígitos:\n\\[\n\\text{Centena} = \\frac{n}{100}, \\quad \\text{Decena} = \\frac{(n \\% 100)}{10}, \\quad \\text{Unidad} = n \\% 10\n\\]\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{n = 123}\\\\\n          Salida: \\texttt{Suma = 6}\n    \\item Entrada: \\texttt{n = 456}\\\\\n          Salida: \\texttt{Suma = 15}\n    \\item Entrada: \\texttt{n = 789}\\\\\n          Salida: \\texttt{Suma = 24}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Escribe un programa que lea de la consola las coordenadas de dos puntos \\( (x_1, y_1) \\) y \\( (x_2, y_2) \\) en el plano, calcule la distancia entre ellos y escriba el resultado en la consola.\\\\\n\\[\n\\text{Distancia} = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\n\\]\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{(x1 = 1, y1 = 2), (x2 = 4, y2 = 6)}\\\\\n          Salida: \\texttt{Distancia = 5}\n    \\item Entrada: \\texttt{(x1 = 0, y1 = 0), (x2 = 3, y2 = 4)}\\\\\n          Salida: \\texttt{Distancia = 5}\n    \\item Entrada: \\texttt{(x1 = -1, y1 = -1), (x2 = 2, y2 = 3)}\\\\\n          Salida: \\texttt{Distancia = 5}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "accumulators",
          "data_types",
          "input_output",
          "basic_syntax",
          "loops",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "Para la ecuación cuadrática, las soluciones son:\n\n$$\nx_1 = \\frac{-b + \\sqrt{D}}{2a}\n$$\n\ny\n\n$$\nx_2 = \\frac{-b - \\sqrt{D}}{2a}\n$$\n\ndonde\n\n$$D = b^2 - 4ac$$\n\nEsta fórmula nos da las soluciones de la ecuación cuadrática, siempre y cuando el discriminante sea mayor o igual a cero.\n\n\\begin{lstlisting}\n    Console.WriteLine(\"Ingrese el coeficiente a:\");\n    double a = double.Parse(Console.ReadLine());\n    \n    Console.WriteLine(\"Ingrese el coeficiente b:\");\n    double b = double.Parse(Console.ReadLine());\n    \n    Console.WriteLine(\"Ingrese el coeficiente c:\");\n    double c = double.Parse(Console.ReadLine());\n    \n    double discriminant = b * b - 4 * a * c;\n    \n    double x1 = (-b + Math.Sqrt(discriminant)) / (2 * a);\n    double x2 = (-b - Math.Sqrt(discriminant)) / (2 * a);\n    \n    Console.WriteLine($\"Las soluciones son x1 = {x1} y x2 = {x2}\"\n\\end{lstlisting}",
        text: "Reciba los coeficientes \\(a\\), \\(b\\) y \\(c\\) (números reales) de una ecuación cuadrática de la forma:\n\n\\[\nax^2 + bx + c = 0\n\\]\n\ny, asumiendo que la ecuación tiene dos soluciones reales, calcule las raíces de la ecuación utilizando la fórmula cuadrática:\n\n\\[\nx = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\n\\]\n\nSe asegura que el discriminante (\\(\\Delta = b^2 - 4ac\\)) es mayor que 0 para que existan dos soluciones reales.\n\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{a = 1, b = -3, c = 2}\\\\\n          Salida: \\texttt{x1 = 2, x2 = 1}\n    \\item Entrada: \\texttt{a = 2, b = 5, c = -3}\\\\\n          Salida: \\texttt{x1 = 0.5, x2 = -3}\n    \\item Entrada: \\texttt{a = 1, b = -6, c = 8}\\\\\n          Salida: \\texttt{x1 = 4, x2 = 2}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Escribe un programa que lea un número entero \\(t\\) que representa una cantidad de minutos de la consola, calcule cuántas horas completas y cuántos minutos sobran, y muestre ambos valores en la consola.\\\\\n\\textbf{Pista:} Usa la división y resto de la división para manejar cuando te pases de 60:\n\\[\n\\text{Horas} = \\frac{t}{60}, \\quad \\text{Minutos} = t \\% 60\n\\]\n\\subsection*{Ejemplos}\n\\begin{itemize}\n\\item Entrada: \\texttt{t = 130}\\\\\n      Salida: \\texttt{Horas = 2, Minutos = 10}\n\\item Entrada: \\texttt{t = 75}\\\\\n      Salida: \\texttt{Horas = 1, Minutos = 15}\n\\item Entrada: \\texttt{t = 45}\\\\\n      Salida: \\texttt{Horas = 0, Minutos = 45}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Reciba dos números enteros de la consola y determine cuál de los dos es mayor sin utilizar $Math.Max$ y $Math.Min$. No utilice condicionales.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n\\item Entrada: \\texttt{a = 5, b = 10}\\\\\n      Salida: \\texttt{Mayor = 10}\n\\item Entrada: \\texttt{a = -3, b = -7}\\\\\n      Salida: \\texttt{Mayor = -3}\n\\item Entrada: \\texttt{a = 12, b = 12}\\\\\n      Salida: \\texttt{Mayor = 12}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Reciba tres números enteros. Muestre en la consola el de valor medio (Utilice $Math.Max$ y $Math.Min$) y el promedio de estos.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{a = 5, b = 10, c = 15}\\\\\n        Salida: \\texttt{Valor medio = 10, Promedio = 10}\n    \\item Entrada: \\texttt{a = -3, b = 4, c = 8}\\\\\n        Salida: \\texttt{Valor medio = 4, Promedio = 3}\n    \\item Entrada: \\texttt{a = 7, b = 7, c = 7}\\\\\n        Salida: \\texttt{Valor medio = 7, Promedio = 7}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "variables",
          "accumulators",
          "data_types",
          "input_output",
          "comments",
          "basic_syntax",
          "constants",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "**Usando una variable auxiliar:**\n\nConsole.WriteLine(\"Ingrese dos números enteros:\");\nint a = int.Parse(Console.ReadLine());\nint b = int.Parse(Console.ReadLine());\n\nint temp = a;\na = b;\nb = temp;\n\nConsole.WriteLine($\"El valor de a es {a} y el valor de b es {b}.\");\n\n\n**Usando operaciones aritméticas:**\n\nConsole.WriteLine(\"Ingrese dos números enteros:\");\nint a = int.Parse(Console.ReadLine());\nint b = int.Parse(Console.ReadLine());\n\n// Valores iniciales: a = x, b = y\n// Paso 1: Sumar ambos números y almacenar el resultado en 'a'\na += b;\n// Ahora, a = x + y, b = y\n\n// Paso 2: Restar el nuevo valor de 'a' (que es x + y) por 'b' (que es y)\n// Esto nos da el valor original de 'a' (que es x) y lo almacena en 'b'\nb = a - b;\n// Ahora, b = x, a = x + y\n\n// Paso 3: Restar el nuevo valor de 'b' (que es x) de 'a' (que es x + y)\n// Esto nos da el valor original de 'b' (que es y) y lo almacena en 'a'\na -= b;\n// Ahora, a = y, b = x\n\n// En este punto, los valores de 'a' y 'b' han sido intercambiados\nConsole.WriteLine($\"El valor de a es {a} y el valor de b es {b}.\");\n",
        text: "Dado que tienes dos enteros guardados en las variables a y b, realiza el intercambio de sus valores de las siguientes maneras:\n\n1. Usando una variable auxiliar.\n2. Sin usar una variable auxiliar.\n\nEjemplo:\nSupongamos que las variables inicializan de la siguiente manera:\n\nint a = 5;\nint b = 9;\n\n\nsi al final de tu programa añades la línea:\n\nConsole.WriteLine($\"El valor de a es {a} y el valor de b es {b}.\");\n\n\nLa salida esperada en la consola es:\nEl valor de a es 9 y el valor de b es 5."
      },
      {
        type: "syntax",
        topics: [
          "data_types",
          "conditionals",
          "input_output",
          "comments",
          "basic_syntax",
          "loops",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "Vamos a nombrar P a uno de los puntos de intersección de las circunferencias y vamos a trazar los siguientes radios:\n\nVemos que se forma el ΔO₁PO₂ es equilátero de lado r, y su área es:\n\nAΔO₁PO₂ = (√3 * r²)/4\n\nLa sección circular formada por (PO₁O₂) es una porción del círculo con un ángulo de 60°, luego el área de esta sección circular es:\n\nAPO₁O₂ = (πr²)/6\n\nDado que APO₂O₁ = APO₁O₂ y que el área sombreada es simétrica respecto a O₁O₂, notemos que calcularse con la siguiente fórmula:\n\nAsombreada = 4 * A O₁PO₂ - 2 * AΔO₁PO₂\n\nSimplificando y sustituyendo nos quedaría:\n\nA = (2πr²)/3 - (√3 * r²)/2\n\nVeamos el código en C# para calcular esta fórmula:\n\n\nConsole.Write(\"Ingrese el radio r: \");\ndouble radius = double.Parse(Console.ReadLine());\n\ndouble intersectionArea = 2 * Math.PI * radius * radius / 3 \n                            - Math.Sqrt(3) * radius * radius / 2;\n\nConsole.WriteLine(\"El área sombreada es: \" + intersectionArea);\n",
        text: "Sean las circunferencias C₁ y C₂ de radio r. Lea de la consola el radio r (puede ser cualquier número real, no solo entero) y calcule el área sombreada.\n\n\n// Código para calcular el área sombreada (se necesita una librería matemática)\n\n\nEjemplos\n* Entrada: 3\n  Salida: El área sombreada es: 18.84955592153876\n* Entrada: 5\n  Salida: El área sombreada es: 52.35987755982988\n* Entrada: 10\n  Salida: El área sombreada es: 209.43951023931953"
      },
      {
        type: "syntax",
        topics: [
          "arrays",
          "data_types",
          "counters",
          "input_output",
          "comments",
          "basic_syntax",
          "constants",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "\nConsole.WriteLine(\"Empiece a escribir su texto y presione Enter cuando termine:\");\n\n// Capturar el tiempo inicial\nint initialTime = Environment.TickCount;\n\nstring text = Console.ReadLine();\n\n// Capturar el tiempo final\nint finalTime = Environment.TickCount;\n\ndouble elapsedTime = (finalTime - initialTime) / 1000.0;\ndouble typingSpeed = text.Length / elapsedTime;\n\nConsole.WriteLine($\"Ha escrito {text.Length} caracteres en {elapsedTime} segundos.\");\nConsole.WriteLine($\"Su velocidad de escritura es {typingSpeed:F2} chars/s.\");\n",
        text: "Lea un texto de la terminal y muestre en la consola la velocidad de escritura del usuario que ingresó dicho texto.\n\nInvestigue cómo utilizar Environment.TickCount para medir la cantidad de milisegundos transcurridos."
      },
      {
        type: "syntax",
        topics: [
          "data_types",
          "conditionals",
          "input_output",
          "comments",
          "basic_syntax",
          "loops",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "\nConsole.WriteLine(\"Ingrese el carnet de identidad:\");\nlong idNumber = long.Parse(Console.ReadLine());\n\n// Extraer la parte de la fecha del carnet de identidad\nint date = (int)(idNumber / 100000);\n\n// Extraer el año de la fecha\nint year = date / 10000;\n\n// Extraer el mes de la fecha\nint month = date / 100 % 100;\n\n// Extraer el día de la fecha\nint day = date % 100;\n\nConsole.WriteLine($\"La fecha de nacimiento es: {day}/{month}/{year}\");\n",
        text: "Reciba de la consola el número de identidad de una persona como tipo long e imprima su fecha de nacimiento con el formato día/mes/año.\n\nEl año puede mostrarse con las dos cifras presentes en el carnet, por ejemplo, para el carnet 04100968518, la fecha de nacimiento sería 9/10/4.\n\nEjemplos\n* Entrada: 04100968518\n  Salida: 9/10/4\n* Entrada: 15020358645\n  Salida: 3/2/15\n* Entrada: 31071254567\n  Salida: 12/7/31"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Escribe un programa que lea un número entero y determine si es positivo, negativo o igual a cero.\n\nEjemplos\n* Entrada: -5\n  Salida: El número es negativo.\n* Entrada: 0\n  Salida: El número es igual a cero.\n* Entrada: 8\n  Salida: El número es positivo."
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Lee dos números enteros y muestra cuál de ellos es mayor, o indica si son iguales.\n\nEjemplos\n* Entrada: 12, 7\n  Salida: El número mayor es 12.\n* Entrada: 4, 9\n  Salida: El número mayor es 9.\n* Entrada: 10, 10\n  Salida: Ambos números son iguales."
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Escribe un programa que determine si un número entero no negativo dado es par o impar.\nEjemplos\n* Entrada: 6\n  Salida: El número es par.\n* Entrada: 13\n  Salida: El número es impar.\n* Entrada: 0\n  Salida: El número es par."
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "conditionals"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Lee una calificación numérica (de 0 a 100) y determina si el estudiante aprobó o reprobó (se aprueba con 60 o más).\n\nEjemplos:\n* Entrada: 75\n  Salida: El estudiante aprobó.\n* Entrada: 50\n  Salida: El estudiante reprobó.\n* Entrada: 60\n  Salida: El estudiante aprobó."
      },
      {
        type: "syntax",
        topics: [
          "data_types",
          "conditionals",
          "input_output",
          "basic_syntax",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "\nConsole.WriteLine(\"Introduce el dividendo:\");\nint a = int.Parse(Console.ReadLine() ?? string.Empty);\nConsole.WriteLine(\"Introduce el divisor:\");\nint b = int.Parse(Console.ReadLine() ?? string.Empty);\n\nif (b != 0 && a % b == 0)\n{\n    Console.WriteLine($\"{a} es divisible por {b}\");\n}\nelse\n{\n    Console.WriteLine($\"{a} no es divisible por {b}\");\n}\n",
        text: "Implemente un programa que reciba dos enteros y determine si el primero es divisible por el segundo.\n\nEjemplos\n* Entrada: `10, 2`\n  Salida: `10 es divisible por 2.`\n* Entrada: `15, 4`\n  Salida: `15 no es divisible por 4.`\n* Entrada: `20, 5`\n  Salida: `20 es divisible por 5.`\n* Entrada: `7, 3`\n  Salida: `7 no es divisible por 3.`"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "input_output",
          "data_types",
          "basic_syntax"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "\nConsole.WriteLine(\"Introduce un número entero:\");\nint x = int.Parse(Console.ReadLine() ?? string.Empty);\nint abs = x >= 0 ? x : -x;\nConsole.WriteLine($\"El valor absoluto de {x} es {abs}\");\n",
        text: "Implemente un programa que reciba un número entero x de la consola y calcule su valor absoluto. El valor absoluto de un número x se define como el número sin su signo, es decir, la distancia de x al origen en la recta numérica. No utilice Math.Abs.\n\nLa función del valor absoluto |x| se define de la siguiente manera:\n|x| =\nx si x ≥ 0\n-x si x < 0\n\n\nEjemplos\n* Entrada: 5\n\nSalida: El valor absoluto de 5 es: 5\n\n* Entrada: -8\n\nSalida: El valor absoluto de -8 es: 8\n\n* Entrada: 0\n\nSalida: El valor absoluto de 0 es: 0"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Implemente un programa que lea tres enteros de la consola e imprima el mayor.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{3, 5, 2}\\\\\n          Salida: \\texttt{El mayor número es 5.}\n    \\item Entrada: \\texttt{10, 7, 10}\\\\\n          Salida: \\texttt{El mayor número es 10.}\n    \\item Entrada: \\texttt{-1, -5, -3}\\\\\n          Salida: \\texttt{El mayor número es -1.}\n    \\item Entrada: \\texttt{8, 8, 8}\\\\\n          Salida: \\texttt{El mayor número es 8.}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "conditionals"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Escribe un programa que clasifique a una persona según su edad:\n* Niño (0-12 años)\n* Adolescente (13-17 años)\n* Adulto (18-64 años)\n* Adulto mayor (65 o más años)\n\nEjemplos\n* Entrada: 7\n  Salida: Niño\n* Entrada: 15\n  Salida: Adolescente\n* Entrada: 30\n  Salida: Adulto\n* Entrada: 65\n  Salida: Adulto mayor"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "accumulators",
          "loops"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Dados tres números que representan las longitudes de los lados de un triángulo, determina si forman un triángulo válido. Un triángulo es válido si la suma de las longitudes de dos lados es mayor que la longitud del tercer lado para cualquier combinación de lados.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{3, 4, 5}\\\\\n          Salida: \\texttt{Triángulo válido}\n    \\item Entrada: \\texttt{1, 2, 3}\\\\\n          Salida: \\texttt{No es un triángulo válido}\n    \\item Entrada: \\texttt{6, 8, 10}\\\\\n          Salida: \\texttt{Triángulo válido}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Lee tres números \\(a\\), \\(b\\), y \\(x\\) (donde \\(a \\leq b\\)) y determina si \\(x\\) se encuentra dentro del rango cerrado \\([a, b]\\).\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{2, 8, 5}\\\\\n          Salida: \\texttt{Sí, 5 está dentro del rango [2, 8].}\n    \\item Entrada: \\texttt{1, 10, 15}\\\\\n          Salida: \\texttt{No, 15 no está dentro del rango [1, 10].}\n    \\item Entrada: \\texttt{3, 9, 9}\\\\\n          Salida: \\texttt{Sí, 9 está dentro del rango [3, 9].}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Escribe un programa que lea un número que representa un mes (1 para enero, 2 para febrero, etc.) y muestre la cantidad de días que tiene ese mes. Considera años no bisiestos, o sea, febrero siempre tendría 28 días.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{1}\\\\\n          Salida: \\texttt{31 días}\n    \\item Entrada: \\texttt{2}\\\\\n          Salida: \\texttt{28 días}\n    \\item Entrada: \\texttt{4}\\\\\n          Salida: \\texttt{30 días}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "error_handling",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Implemente un programa que lea de la consola dos enteros y un operador (+, -, /, *) y realice la operación correspondiente entre ellos e imprima el resultado en consola.\n\\begin{itemize}\n    \\item Entrada: \\texttt{5, 3, +}\\\\\n    Salida: \\texttt{El resultado de 5 + 3 es: 8}\n    \n    \\item Entrada: \\texttt{10, 4, -}\\\\\n    Salida: \\texttt{El resultado de 10 - 4 es: 6}\n    \n    \\item Entrada: \\texttt{8, 7, *}\\\\\n    Salida: \\texttt{El resultado de 8 * 7 es: 56}\n    \n    \\item Entrada: \\texttt{9, 3, /}\\\\\n    Salida: \\texttt{El resultado de 9 / 3 es: 3}\n    \n    \\item Entrada: \\texttt{5, 0, /}\\\\\n    Salida: \\texttt{Error: División por cero.}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Escribe un programa que determine si un año es bisiesto o no. Un año es bisiesto si es divisible entre 4, pero no es divisible entre 100, a menos que también sea divisible entre 400.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{2020}\\\\\n          Salida: \\texttt{El año 2020 es bisiesto.}\n    \\item Entrada: \\texttt{1900}\\\\\n          Salida: \\texttt{El año 1900 no es bisiesto.}\n    \\item Entrada: \\texttt{2000}\\\\\n          Salida: \\texttt{El año 2000 es bisiesto.}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "accumulators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Escribe un programa que calcule el costo de estacionamiento según el tiempo de permanencia:\n\\begin{itemize}\n    \\item Primera hora: \\$70\n    \\item Horas adicionales: \\$50 cada una\n    \\item Máximo diario: \\$1000\n\\end{itemize}\nLee el tiempo de permanencia (en horas) y calcula el costo total.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{1}\\\\\n          Salida: \\texttt{El costo total es: \\$70}\n    \\item Entrada: \\texttt{5}\\\\\n          Salida: \\texttt{El costo total es: \\$270}\n    \\item Entrada: \\texttt{20}\\\\\n          Salida: \\texttt{El costo total es: \\$1000}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "input_output",
          "data_types",
          "basic_syntax"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "\\begin{lstlisting}\nConsole.WriteLine(\"Ingrese su número de identidad:\");\nlong idNumber = long.Parse(Console.ReadLine() ?? string.Empty);\nlong penultimateDigit = idNumber / 10 % 10;\nConsole.WriteLine(penultimateDigit % 2 == 0 ? \"Masculino\" : \"Femenino\");\n\\end{lstlisting}",
        text: "Implemente un programa que le pida al usuario su número de identidad y determine su sexo. El sexo puede determinarse por el penúltimo dígito del número de identidad (par masculino, impar femenino).\n\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{02020966175}\\\\\n          Salida: \\texttt{Femenino}\n    \n    \\item Entrada: \\texttt{04102566345}\\\\\n          Salida: \\texttt{Masculino}\n    \n    \\item Entrada: \\texttt{05031278457}\\\\\n          Salida: \\texttt{Femenino}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "loops"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "",
        text: "Dada una hora en formato de 24 horas representada por dos enteros horas y minutos, determine si es válida o no.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n   \\item Entrada: \\texttt{h = 13, m = 45}\\\\\n         Salida: \\texttt{La hora es válida.}\n   \\item Entrada: \\texttt{h = 25, m = 10}\\\\\n         Salida: \\texttt{La hora no es válida.}\n   \\item Entrada: \\texttt{h = 7, m = 60}\\\\\n         Salida: \\texttt{La hora no es válida.}\n   \\item Entrada: \\texttt{h = 0, m = 0}\\\\\n         Salida: \\texttt{La hora es válida.}\n   \\item Entrada: \\texttt{h = 23, m = 59}\\\\\n         Salida: \\texttt{La hora es válida.}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "accumulators",
          "conditionals",
          "input_output",
          "loops",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "\\lstinputlisting{cp3/code/Triangle.cs}",
        text: "Implemente un programa que pida al usuario tres números enteros qque representen los lados de un triángulo y determine qué tipo de triángulo forman. Debe mostrar en la consola lo siguiente:\n\\begin{itemize}\n\t\\item 0 si no pueden ser lados de ningún triángulo. Tres números pueden ser lados de un triángulo si cumplen la desigualdad triangular, que establece que la suma de las longitudes de dos lados siempre debe ser mayor que la longitud del tercer lado.\n\t\\item 1 si es un triángulo escaleno. Un triángulo escaleno tiene los tres lados de diferente longitud.\n\t\\item 2 si es un triángulo isóceles. Un triángulo isósceles tiene dos lados iguales y uno diferente.\n\t\\item 3 si es un triángulo equilátero. Un triángulo equilátero tiene los tres lados iguales. \n\\end{itemize}\n\n\\textbf{Propuesta:} Realizar la implementación utilizando \\textcolor{blue}{enum}.\n\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: side1 = 1, side2 = 2, side3 = 3\n\n    Salida: 0\n\n    \\item Entrada: side1 = 3, side2 = 4, side3 = 5\n\n    Salida: 1\n\n    \\item Entrada: side1 = 4, side2 = 4, side3 = 5\n\n     Salida: 2\n\n     \\item Entrada: side1 = 6, side2 = 6, side3 = 6\n     \n     Salida: 3\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "data_types",
          "function_definition_and_usage",
          "encapsulation",
          "conditionals",
          "input_output",
          "comments",
          "loops",
          "constants",
          "control_statements",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "Analicemos qué deben cumplir estos enteros para formar una fecha:\n\\begin{enumerate}\n    \\item El año debe ser positivo.\n    \\item El mes debe estar entre 1 y 12.\n    \\item El día debe estar dentro del rango de días válidos para el mes y el año dados, notemos que tenemos que tener en cuenta el año ya que $29/2/2001$ no es una fecha válida mientras que $29/2/2004$ sí lo es.\n\\end{enumerate}\n\nPodemos definir el siguiente método para validar una fecha\n\\begin{lstlisting}\npublic static bool ValidateDate(int day, int month, int year)\n{\n    return year > 0 &&\n           month > 0 && month <= 12 &&\n           day > 0 && day <= CalculateLastDayInMonth(month, year);\n}\n\\end{lstlisting}\n\nNotemos que, con una implementación correcta de \\textit{CalculateLastDayInMonth}, tendríamos el problema resuelto. Podemos implementar este método así:\n\\begin{lstlisting}\nprivate static int CalculateLastDayInMonth(int month, int year)\n{\n    switch (month)\n    {\n        // Los meses con 30 días\n        case 4 or 6 or 9 or 11:\n            return 30;\n        // Febrero\n        case 2:\n            return IsLeapYear(year) ? 29 : 28;\n        // Los meses con 31 días\n        default:\n            return 31;\n    }\n}\n\\end{lstlisting}\n\nAhora solo nos faltaría implementar \\textit{IsLeapYear} que determina si un año es bisiesto o no.\n\n\\begin{tcolorbox}\n    Antes de 1582, los años bisiestos se determinaban según el calendario juliano, donde un año era bisiesto si era divisible por 4. Este sistema acumulaba un pequeño desfase con el tiempo.\n\n    Con la introducción del calendario gregoriano en 1582, se ajustaron las reglas: un año es bisiesto si es divisible por 4 y no por 100, a menos que también sea divisible por 400. Esto ayuda a mantener el calendario alineado con el ciclo solar y las estaciones del año.\n\n    Por ejemplo, 1600 y 2000 son años bisiestos, pero 1700, 1800 y 1900 no lo son.\n\\end{tcolorbox}\n\nPodemos implementar \\textit{IsLeapYear} de la siguiente manera\n\n\\begin{lstlisting}\nprivate static bool IsLeapYear(int year)\n{\n    return year <= 1582\n        ? year % 4 == 0\n        : (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;\n}\n\\end{lstlisting}\n\nFinalmente, el código completo nos quedaría:\n\n\\lstinputlisting{cp3/code/ValidateDate.cs}",
        text: "Lea tres números enteros de la consola que representarán día, mes y año respectivamente. Si estos valores pueden formar una fecha, entonces muéstrela en la consola con el formato \\texttt{día/mes/año}, si no imprima el No es fecha. Considere que las fechas con año menor que 1 no son válidas.\n\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: d = 15, m = 8, y = 0\\\\\n    Salida: No es fecha\\\\\n    Explicación: El año 0 no es válido\n\n    \\item Entrada: d = 15, m = 13, y = 2023\\\\\n    Salida: No es fecha\\\\\n    Explicación: El mes 13 no es válido\n    \n    \\item Entrada: d = 31, m = 4, y = 2023\\\\\n    Salida: No es fecha\\\\\n    Explicación: Abril tiene solo 30 días\n\n    \\item Entrada: d = 15, m = 8, y = 2023\\\\\n    Salida: 15/8/2023\n    \n    \\item Entrada: d = 29, m = 2, y = 2020\\\\\n    Salida: 29/2/2020\\\\\n    Explicación: 2020 es un año bisiesto\n\n    \\item Entrada: d = 29, m = 2, y = 2023\\\\\n    Salida: No es fecha\\\\\n    Explicación: 2023 no es un año bisiesto\n    \n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "loops"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Escribe un método que reciba una hora en formato de 24 horas representada por dos enteros horas y minutos y devuelva una cadena que represente la hora en formato de 12 horas, incluyendo ``AM'' o ``PM''.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: h = 14, m = 30 (\\texttt{\"14:30\"})\\\\\n          Salida: \\texttt{\"2:30 PM\"}\n    \\item Entrada: h - 9, m = 15 (\\texttt{\"09:15\"})\\\\\n          Salida: \\texttt{\"9:15 AM\"}\n    \\item Entrada: h = 0, m = 0 (\\texttt{\"00:00\"})\\\\\n          Salida: \\texttt{\"12:00 AM\"}\n    \\item Entrada: h = 12, m = 12 (\\texttt{\"12:00\"})\\\\\n          Salida: \\texttt{\"12:00 M\"}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "matrices",
          "data_types",
          "control_statements",
          "function_definition_and_usage",
          "encapsulation",
          "conditionals",
          "comments",
          "loops",
          "error_handling",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "En el ejercicio \\textit{Forman una fecha} definimos el método CalculateLastDayInMonth que, dado el mes y el año calcula el último día del mes correspondiente, reutilicemos este método.\n\n\\begin{lstlisting}\npublic static (int Day, int Month, int Year) CalculateNextDay(int day, int month, int year)\n{\n    if (!ValidateDate(day, month, year))\n        throw new Exception(\"Invalid date\");\n        \n    return day == CalculateLastDayInMonth(month, year)\n        ? month == 12\n            ? (1, 1, year + 1) // si es 31 de diciembre\n            : (1, month + 1, year) // si es el último dia de un mes que no es diciembre\n        : (day + 1, month, year);\n}\n\\end{lstlisting}",
        text: "Implemente un programa que reciba una fecha e imprima la fecha correspondiente al d siguiente.\n\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: d = 10, m = 3, y = 2024\n\n    Salida: La fecha siguiente es: 11/3/2024\n\n    \\item Entrada: d = 28, m = 2, y = 2024\n\n    Salida: La fecha siguiente es: 29/2/2024\n\n    \\item Entrada: d = 31, m = 12, y = 2024\n\n    Salida: La fecha siguiente es: 01/1/2025\n\n    \\item Entrada: d = 30, m = 4, y = 2024\n\n    Salida: La fecha siguiente es: 01/5/2025\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "accumulators",
          "data_types",
          "conditionals",
          "loops",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "\\begin{enumerate}[label=\\alph*)]\n    \\item Escriba un programa que, dada una hora inicial en formato de 24 horas (representada por dos enteros: horas y minutos) y un intervalo de tiempo (también representado por dos enteros: horas y minutos), calcule la nueva hora tras sumar el intervalo al tiempo inicial. Asegúrese de ajustar los minutos y las horas para mantener el formato de 24 horas.\n    \\subsection*{Ejemplos}\n    \\begin{itemize}\n        \\item Entrada: \\(h = 3, m = 30, \\Delta h = 0, \\Delta m = 70\\)\\\\\n              Salida: \\texttt{La nueva hora es 4:40.}\n        \\item Entrada: \\(h = 10, m = 45, \\Delta h = 1, \\Delta m = 30\\)\\\\\n              Salida: \\texttt{La nueva hora es 12:15.}\n        \\item Entrada: \\(h = 23, m = 50, \\Delta h = 2, \\Delta m = 20\\)\\\\\n              Salida: \\texttt{La nueva hora es 2:10.}\n        \\item Entrada: \\(h = 6, m = 10, \\Delta h = 0, \\Delta m = 50\\)\\\\\n              Salida: \\texttt{La nueva hora es 7:00.}\n        \\item Entrada: \\(h = 14, m = 30, \\Delta h = 9, \\Delta m = 90\\)\\\\\n              Salida: \\texttt{La nueva hora es 0:00.}\n    \\end{itemize}\n\n    \\item Escriba un programa que, dada la hora de salida de un avión y su hora de llegada (ambas representadas por dos enteros: horas y minutos en formato de 24 horas), determine el tiempo total de vuelo. Asegúrese de manejar correctamente los casos en los que el vuelo cruza la medianoche.\\\\\n    Se asegura que:\n    \\begin{itemize}\n        \\item El tiempo de vuelo no excederá las \\(24\\) horas.\n        \\item No hay cambios de zonas horarias.\n    \\end{itemize}\n    % \\textbf{Pista:} Convierta las horas y minutos a un único valor en minutos, calcule la diferencia y convierta el resultado de vuelta a horas y minutos.\n    \\subsection*{Ejemplos}\n    \\begin{itemize}\n        \\item Entrada: \\(h_{\\text{salida}} = 10, m_{\\text{salida}} = 20, h_{\\text{llegada}} = 13, m_{\\text{llegada}} = 50\\)\\\\\n              Salida: \\texttt{El tiempo de vuelo es 3 horas y 30 minutos.}\n        \\item Entrada: \\(h_{\\text{salida}} = 23, m_{\\text{salida}} = 45, h_{\\text{llegada}} = 2, m_{\\text{llegada}} = 15\\)\\\\\n              Salida: \\texttt{El tiempo de vuelo es 2 horas y 30 minutos.}\n        \\item Entrada: \\(h_{\\text{salida}} = 14, m_{\\text{salida}} = 0, h_{\\text{llegada}} = 14, m_{\\text{llegada}} = 0\\)\\\\\n              Salida: \\texttt{El tiempo de vuelo es 0 horas y 0 minutos.}\n        \\item Entrada: \\(h_{\\text{salida}} = 5, m_{\\text{salida}} = 30, h_{\\text{llegada}} = 8, m_{\\text{llegada}} = 10\\)\\\\\n              Salida: \\texttt{El tiempo de vuelo es 2 horas y 40 minutos.}\n    \\end{itemize}\n\\end{enumerate}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Implemente un método que dado el carnet de identidad de una persona devuelva su signo del zodiaco.\n\n\\textbf{Propuesta:} Realizar la implementación utilizando \\textcolor{blue}{enum}.\n\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{02042366175} (23 de abril)\\\\\n          Salida: \\texttt{Tauro}\n    \\item Entrada: \\texttt{02031566175} (15 de marzo)\\\\\n          Salida: \\texttt{Piscis}\n    \\item Entrada: \\texttt{02121966175} (19 de diciembre)\\\\\n          Salida: \\texttt{Sagitario}\n    \\item Entrada: \\texttt{03110178934} (1 de noviembre)\\\\\n          Salida: \\texttt{Escorpio}\n    \\item Entrada: \\texttt{05123078934} (30 de diciembre)\\\\\n          Salida: \\texttt{Capricornio}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "matrices",
          "accumulators",
          "data_types",
          "control_statements",
          "function_definition_and_usage",
          "encapsulation",
          "conditionals",
          "loops",
          "error_handling",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "Para resolver el problema, primero calculamos la cantidad de días que han pasado desde el 1/1/1 hasta la fecha dada, luego usamos la operación resto de la división entre 7 para encontrar el día de la semana, ya que la semana tiene 7 días.\n\n\\begin{lstlisting}\npublic enum DayOfWeek\n{\n    Sunday = 0,\n    Monday = 1,\n    Tuesday = 2,\n    Wednesday = 3,\n    Thursday = 4,\n    Friday = 5,\n    Saturday = 6,\n}\n\npublic static DayOfWeek CalculateDayOfWeek(int day, int month, int year)\n{\n    if (!ValidateDate(day, month, year))\n        throw new Exception(\"Invalid date\");\n        \n    int daysSinceStartOfEra = CalculateDaysSinceStartOfEra(day, month, year);\n    \n    return (DayOfWeek)(daysSinceStartOfEra % 7);\n}\n\\end{lstlisting}\n\nAún falta implementar el método \\textit{CalculateDaysSinceStartOfEra}. Dada una fecha en el formato $d/m/y$, podemos calcular los días desde el $1/1/1$ como la suma de:\n\\begin{enumerate}\n    \\item Los días desde el $1/1/1$ hasta el $31/12$ del año anterior, es decir, $(y-1)$.\n    \\item Los días desde el $1/1/y$, hasta el último día del mes anterior, es decir, $(m-1)$.\n    \\item Los días transcurridos desde el $1/m/y$  hasta $d/m/y$, o sea $d$.\n\\end{enumerate}\n\nA continuación el código en C\\#:\n\n\\begin{lstlisting}\npublic static int CalculateDaysSinceStartOfEra(int day, int month, int year)\n{\n    if (!ValidateDate(day, month, year))\n        throw new Exception(\"Invalid date\");\n        \n    int leapYears = (year - 1) / 4 - (year - 1) / 100 + (year - 1) / 400;\n    \n    int daysSinceStartOfEra = leapYears * 366 + (year - 1 - leapYears) * 365;\n    \n    if (month > 1)\n        daysSinceStartOfEra += 31;\n    if (month > 2)\n        daysSinceStartOfEra += IsLeapYear(year) ? 29 : 28;\n    if (month > 3)\n        daysSinceStartOfEra += 31;\n    if (month > 4)\n        daysSinceStartOfEra += 30;\n    if (month > 5)\n        daysSinceStartOfEra += 31;\n    if (month > 6)\n        daysSinceStartOfEra += 30;\n    if (month > 7)\n        daysSinceStartOfEra += 31;\n    if (month > 8)\n        daysSinceStartOfEra += 31;\n    if (month > 9)\n        daysSinceStartOfEra += 30;\n    if (month > 10)\n        daysSinceStartOfEra += 31;\n    if (month > 11)\n        daysSinceStartOfEra += 30;\n        \n    daysSinceStartOfEra += day;\n    \n    return daysSinceStartOfEra;\n}\n\\end{lstlisting}\n\nEste código puede parecer engorroso porque necesitamos redefinir la cantidad de días en cada mes, algo que ya habíamos hecho en el método CalculateLastDayInMonth. Para simplificarlo, podemos usar un ciclo y reutilizar el método definido anteriormente.\n\n\\begin{lstlisting}\npublic static int CalculateDaysSinceStartOfEra(int day, int month, int year)\n{\n    if (!ValidateDate(day, month, year))\n        throw new Exception(\"Invalid date\");\n        \n    int leapYears = (year - 1) / 4 - (year - 1) / 100 + (year - 1) / 400;\n    \n    int daysSinceStartOfEra = leapYears * 366 + (year - 1 - leapYears) * 365;\n    \n    for (int i = 1; i < month; i++)\n    {\n        daysSinceStartOfEra += CalculateLastDayInMonth(i, year);\n    }\n    \n    daysSinceStartOfEra += day;\n    \n    return daysSinceStartOfEra;\n}\n\\end{lstlisting}\n\n\\textbf{Nota:} Para facilitar los cálculos asumimos que el calendario gregoriano estuvo en uso desde el año 1, lo cual no es cierto, por tanto los cálculos para fechas anteriores a 1582 no se realizan correctamente.\n\n\\begin{tcolorbox}\n    El calendario juliano, utilizado desde el 46 a.C., tenía un error que acumuló un desfase de 10 días para el siglo XVI. Para corregirlo, el papa Gregorio XIII introdujo el calendario gregoriano, ajustando la duración del año y cambiando la regla de los años bisiestos, además, se eliminaron 10 días del calendario en octubre de 1582.\n\\end{tcolorbox}",
        text: "Implemente un programa que dada una fecha, muestre qué day de la semana cae.\n\n\\textbf{Propuesta:} Realizar la implementación utilizando \\textcolor{blue}{enum}.\n\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: d = 23, m = 4, y = 2001\\\\\n    Salida: Monday\n\n    \\item Entrada: d = 9, m = 2, y = 2002\\\\\n    Salida: Saturday\n\n    \\item Entrada: d = 31, m = 12, y = 2024\\\\\n    Salida: Tuesday\n\n    \\item Entrada: d = 25, m = 10, y = 2024\\\\\n    Salida: Friday\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Implemente un programa que reciba dos fechas (tres enteros por cada fecha) y calcule cuántos días hay entre ellas.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{15 03 2023} y \\texttt{20 03 2023}\\\\\n          Salida: \\texttt{Hay 5 días entre las dos fechas.}\n    \\item Entrada: \\texttt{31 12 2022} y \\texttt{01 01 2023}\\\\\n          Salida: \\texttt{Hay 1 día entre las dos fechas.}\n    \\item Entrada: \\texttt{23 11 2023} y \\texttt{23 11 2023}\\\\\n          Salida: \\texttt{Hay 0 días entre las dos fechas.}\n    \\item Entrada: \\texttt{28 02 2020} y \\texttt{01 03 2020}\\\\\n          Salida: \\texttt{Hay 2 días entre las dos fechas.}\n    \\item Entrada: \\texttt{25 12 2023} y \\texttt{01 01 2024}\\\\\n          Salida: \\texttt{Hay 7 días entre las dos fechas.}\n    \\item Entrada: \\texttt{01 01 2022} y \\texttt{25 06 2023}\\\\\n          Salida: \\texttt{Hay 540 días entre las dos fechas.}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "data_types",
          "loops"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Un punto está formado por dos enteros (coordenadas x,y). Implemente\nun programa que reciba cuatro puntos de forma que los tres primeros formen un triángulo. Determine si el último punto es o no interior del triángulo.\n\\subsection*{Ejemplos}\n\\begin{itemize}\n    \\item Entrada: \\texttt{(0, 0)}, \\texttt{(4, 0)}, \\texttt{(0, 3)}, \\texttt{(1, 1)}\\\\\n          Salida: \\texttt{El punto (1, 1) está dentro del triángulo.}\n    \\item Entrada: \\texttt{(0, 0)}, \\texttt{(4, 0)}, \\texttt{(0, 3)}, \\texttt{(5, 1)}\\\\\n          Salida: \\texttt{El punto (5, 1) está fuera del triángulo.}\n    \\item Entrada: \\texttt{(-2, -2)}, \\texttt{(2, -2)}, \\texttt{(0, 2)}, \\texttt{(0, 0)}\\\\\n          Salida: \\texttt{El punto (0, 0) está dentro del triángulo.}\n    \\item Entrada: \\texttt{(-2, -2)}, \\texttt{(2, -2)}, \\texttt{(0, 2)}, \\texttt{(3, 0)}\\\\\n          Salida: \\texttt{El punto (3, 0) está fuera del triángulo.}\n\\end{itemize}"
      },
      {
        type: "syntax",
        topics: [
          "data_types",
          "function_definition_and_usage",
          "conditionals",
          "control_statements",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "Al igual que podemos llamar otros métodos, un método puede llamarse a sí mismo. Esto es útil en situaciones como el cálculo del factorial, donde el problema puede definirse en términos de sí mismo.\n\nEn CalculateFactorial(int n), el método se llama a sí mismo con un número menor. Sin embargo, es crucial tener un **caso base** para detener las llamadas. En este caso, el caso base es cuando n es 0, devolviendo 1. Sin este caso base, el método se llamaría indefinidamente, causando un bucle infinito.\n\n\nstatic long CalculateFactorial(int n)\n{\n    if (n == 0)\n        return 1;\n        \n    return n * CalculateFactorial(n - 1);\n}\n",
        text: "El factorial de un número n (denotado como n!) se define como el producto de todos los números enteros positivos desde 1 hasta n, o sea:\n\nn! = Π(k=1 a n) k\n\no lo que es lo mismo:\n\nn! =\n{ 1 si n = 0\n{ n · (n-1)! si n > 0\n\nImplemente un programa que reciba un número entero no negativo n de la consola y calcule el factorial de ese número.\n\nEjemplos\n* Entrada: 0\n  Salida: El factorial de 0 es 1.\n* Entrada: 1\n  Salida: El factorial de 1 es 1.\n* Entrada: 5\n  Salida: El factorial de 5 es 120.\n* Entrada: 7\n  Salida: El factorial de 7 es 5040."
      },
      {
        type: "syntax",
        topics: [
          "accumulators",
          "data_types",
          "function_definition_and_usage",
          "encapsulation",
          "loops",
          "control_statements",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "\npublic static int SumOddNumbers(int n)\n{\n    int sum = 0;\n    \n    for (int i = 1; i < 2 * n; i += 2)\n    {\n        sum += i;\n    }\n    \n    return sum;\n}\n\n\nEste código usa un ciclo para sumar los primeros n números impares. Sin embargo, podemos notar una propiedad interesante (que puedes demostrar por inducción):\n1 + 3 + 5 + ... + (2n-1) = n²\nPor lo tanto, podemos optimizar nuestro código utilizando esta propiedad matemática.\n\n\npublic static int SumOddNumbers(int n)\n{\n    return n * n;\n}\n",
        text: "Implemente un programa que reciba un entero n e imprima la suma de los primeros n números impares.\n\nFormalmente, los números impares son aquellos de la forma 2k + 1, donde k ∈ Z≥0. La suma de los primeros n números impares se puede expresar como:\n\nSn = Σ(k=0 a n-1) (2k + 1).\n\nEjemplos\n* Entrada: 1\n  Salida: La suma de los primeros 1 números impares es 1.\n* Entrada: 3\n  Salida: La suma de los primeros 3 números impares es 9.\n* Entrada: 5\n  Salida: La suma de los primeros 5 números impares es 25.\n* Entrada: 7\n  Salida: La suma de los primeros 7 números impares es 49."
      },
      {
        type: "syntax",
        topics: [
          "accumulators",
          "data_types",
          "dictionaries_maps_objects",
          "counters",
          "input_output",
          "conditionals",
          "basic_syntax",
          "loops",
          "constants",
          "error_handling",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "\nstring input;\nint max = int.MinValue;\nint min = int.MaxValue;\nint sum = 0;\nint count = 0;\nConsole.WriteLine(\"Introduce números enteros (deja la línea en blanco para finalizar):\");\n\nwhile (!string.IsNullOrWhiteSpace(input = Console.ReadLine()))\n{\n    if (int.TryParse(input, out int number))\n    {\n        if (number > max) max = number;\n        if (number < min) min = number;\n        sum += number;\n        count++;\n    }\n    else\n    {\n        Console.WriteLine(\"Entrada inválida, introduce un número entero.\");\n    }\n}\n    \nif (count == 0)\n{\n    Console.WriteLine(\"No se introdujeron números.\");\n}\nelse\n{\n    double average = (double)sum / count;\n\n    Console.WriteLine($\"El mayor: {max}\");\n    Console.WriteLine($\"El menor: {min}\");\n    Console.WriteLine($\"El promedio: {average}\");\n}\n",
        text: "Implemente un programa que lea una secuencia de números de la consola (uno por línea) hasta que se escriba una línea en blanco y de estos imprimir:\n* El mayor\n* El menor\n* Su promedio\n\nEjemplos:\n* Entrada:\n\n12\n8\n15\n22\n5\n\n\nSalida:\n\nEl mayor número es: 22\nEl menor número es: 5\nEl promedio es: 12.4\n\n\n* Entrada:\n\n3\n3\n3\n\n\nSalida:\n\nEl mayor número es: 3\nEl menor número es: 3\nEl promedio es: 3.0\n"
      },
      {
        type: "syntax",
        topics: [
          "data_types",
          "function_definition_and_usage",
          "conditionals",
          "loops",
          "control_statements",
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "easy",
        explanation: "Dado que un número n es primo si solo es divisible por 1 y por sí mismo, y además se conoce que si d es divisor de n entonces d ≤ n, para determinar si un número n es primo, basta con verificar si es divisible por algún número d tal que 2 ≤ d < n. Si encontramos algún divisor en ese rango, podemos concluir que n no es primo.\n\nUna primera implementación podría iterar desde 2 hasta n - 1, verificando si n es divisible por algún número:\n\n\nbool IsPrime(int n)\n{\n    int d = 2;\n    while (d < n)\n    {\n        if (n % d == 0) return false;\n        else d++;\n    }\n    return true;\n}\n\n\nLa solución anterior es correcta, aunque realiza iteraciones innecesarias, ya que basta con comprobar divisores hasta la raíz cuadrada de n. Esto se debe a que si n tiene un divisor mayor que √n, necesariamente debe tener otro menor que √n. Reduciendo el rango de búsqueda, podemos mejorar la eficiencia del algoritmo:\n\n\nbool IsPrime(int n)\n{\n    int d = 2;\n    int sqr = (int)Math.Sqrt(n);\n    while (d <= sqr)\n    {\n        if (n % d == 0) return false;\n        d++;\n    }\n    return true;\n}\n",
        text: "Escribe un programa que determine si un entero es primo o no.\n\nUn número entero positivo n se dice que es primo si tiene exactamente dos divisores distintos: 1 y el propio número n. Es decir, n es primo si y solo si no existen otros divisores d tal que 1 < d < n y d divide a n. Formalmente, podemos escribir:\n\nn es primo ⟺ ∀d ∈ Z+ se cumple que si d | n, entonces d = 1 o d = n.\n\nDonde Z+ representa el conjunto de los números enteros positivos, y d | n denota que d divide a n, es decir, n es divisible por d.\n\nEjemplos\n* Entrada: 10\n  Salida: false\n* Entrada: 29\n  Salida: true\n* Entrada: 15\n  Salida: false\n* Entrada: 31\n  Salida: true"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Implemente un método que devuelva el n-ésimo primo de la sucesión de números primos.\nEjemplos\n* Entrada: 1\nSalida: 2\n* Entrada: 3\nSalida: 5\n* Entrada: 5\nSalida: 11\n* Entrada: 10\nSalida: 29\n* Entrada: 15\nSalida: 47"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "accumulators",
          "loops"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Determina si un número entero positivo es perfecto. Un número entero positivo n se denomina perfecto si la suma de sus divisores propios (excluyendo a n) es igual a n. Formalmente:\n\nn es perfecto ⟺ n = Σ_(d|n, d<n) d,\n\ndonde d|n indica que d es un divisor de n, es decir, n es divisible por d.\n\nEjemplos\n* Entrada n = 28\nSalida: true\nExplicación:\nDivisores propios de 28: 1, 2, 4, 7, 14,  y  1 + 2 + 4 + 7 + 14 = 28.\n\n* Entrada n = 6\nSalida: true\nExplicación:\nDivisores propios de 6: 1, 2, 3,  y 1 + 2 + 3 = 6.\n\n* Entrada n = 12\nSalida: false\nExplicación:\nDivisores propios de 12: 1, 2, 3, 4, 6,  y 1 + 2 + 3 + 4 + 6 = 16 ≠ 12."
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "accumulators",
          "data_types"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Determine si un número entero positivo es un número de Armstrong. Un número n se dice que es un número de Armstrong (o número narcisista) si cumple la siguiente propiedad:\n\nn = Σᵢ₌₁ᵈ dᵢᵈ,\n\ndonde:\n* d es el número de dígitos de n,\n* dᵢ representa el i-ésimo dígito de n.\n\nO sea, un número es un número de Armstrong si es igual a la suma de sus dígitos elevados a la cantidad de dígitos del número.\n\nEjemplos\n* Entrada n = 153\nSalida: true\nExplicación:\nDígitos de 153: 1, 5, 3, y 1³ + 5³ + 3³ = 1 + 125 + 27 = 153.\n\n* Entrada n = 9474\nSalida: true\nExplicación:\nDígitos de 9474: 9, 4, 7, 4, y 9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474.\n\n* Entrada n = 9475\nSalida: false\nExplicación:\nDígitos de 9475: 9, 4, 7, 5, y 9⁴ + 4⁴ + 7⁴ + 5⁴ = 6561 + 256 + 2401 + 625 = 9843 ≠ 9475.\n\n* Entrada n = 370\nSalida: true\nExplicación:\nDígitos de 370: 3, 7, 0, y 3³ + 7³ + 0³ = 27 + 343 + 0 = 370.\n\nPropuesta: Implemente un método que reciba un número entero y calcule su cantidad de dígitos (sin usar la clase string)."
      },
      {
        type: "syntax",
        topics: [],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "medium",
        explanation: "",
        text: "Implementa un método que muestre en la consola la tabla de multiplicar del 1 al 10."
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Implemente un método que, dado un número entero positivo n, encuentre y retorne el número primo más cercano a n. Si existen dos números primos equidistantes de n, retorne el menor de los dos.\n\nEjemplos:\n* Entrada n = 10\nSalida: 11\n\n* Entrada n = 13\nSalida: 13\n\n* Entrada n = 21\nSalida: 19\nExplicación:\nLos números primos más cercanos a 21 son 19 y 23. Como ambos están a igual distancia de 21, se retorna el menor.\n\n* Entrada n = 2\nSalida: 2"
      },
      {
        type: "syntax",
        topics: [
          "operators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Implemente un método que reciba un número entero positivo n y escriba en la consola su descomposición en factores primos.\nEjemplos\n* Entrada n = 28\nSalida en consola: 2 × 2 × 7\n\n* Entrada n = 45\nSalida en consola: 3 × 3 × 5\n\n* Entrada n = 13\nSalida en consola: 13"
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "accumulators"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "Dos números enteros positivos a y b se denominan amigos si cumplen las siguientes condiciones:\nb = Σ(d|a, d < a)d  y  a = Σ(d|b, d < b) d,\ndonde la notación d|a denota que d es un divisor de a.\n\nEs decir, la suma de los divisores propios de a debe ser igual a b, y la suma de los divisores propios de b debe ser igual a a.\n\nEjemplos\n* Entrada: a = 220, b = 284\nSalida: true\nExplicación:\nDivisores propios de 220: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110,  y su suma es 284.\nDivisores propios de 284: 1, 2, 4, 71, 142,  y su suma es 220.\nPor lo tanto, 220 y 284 son números amigos.\n\n* Entrada: a = 1184, b = 1210\nSalida: true\nExplicación:\nDivisores propios de 1184: 1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592,  y su suma es 1210.\nDivisores propios de 1210: 1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605,  y su suma es 1184.\nPor lo tanto, 1184 y 1210 son números amigos.\n\n* Entrada: a = 30, b = 42\nSalida: false\nExplicación:\nDivisores propios de 30: 1, 2, 3, 5, 6, 10, 15,  y su suma es 42.\nDivisores propios de 42: 1, 2, 3, 6, 7, 14, 21,  y su suma es 54.\nAunque la suma de los divisores propios de 30 es 42, no se cumple que la suma de los divisores propios de 42 sea 30. Por lo tanto, no son números amigos."
      },
      {
        type: "syntax",
        topics: [
          "operators",
          "conditionals",
          "data_types"
        ],
        options: [],
        answer: "",
        testCases: [],
        hint: "",
        difficulty: "hard",
        explanation: "",
        text: "a) Implemente un método que convierta un número de binario a decimal.\nUn número binario es una representación en base 2 de un número entero. El número binario está compuesto solo por los dígitos 0 y 1, donde cada posición en el número tiene un valor que es una potencia de 2, comenzando desde la derecha (posición 0).\n\nPara convertir un número binario a decimal, se puede utilizar la siguiente fórmula:\nn = Σ_{i=0}^{k} b_i * 2^i\ndonde b_i es el i-ésimo dígito del número binario, comenzando desde la derecha, y k es el índice de la posición más significativa (la izquierda).\n\nEjemplos:\n* Entrada: 1101\nSalida: 13\nExplicación:\n1101_2 = 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 8 + 4 + 0 + 1 = 13.\nEl número binario 1101_2 equivale a 13 en decimal.\n\n* Entrada: 10101\nSalida: 21\nExplicación:\n10101_2 = 1 * 2^4 + 0 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 16 + 0 + 4 + 0 + 1 = 21.\nEl número binario 10101_2 equivale a 21 en decimal.\n\nb) Implemente un método que reciba un número entero no negativo y devuelva un string con su representación binaria.\nEl número binario correspondiente se obtiene dividiendo el número entre 2 repetidamente, y registrando los restos de cada división. El número binario es el conjunto de los restos en orden inverso.\n\nEjemplos:\n* Entrada: 13\nSalida: 1101\nExplicación:\n13 ÷ 2 = 6, resto 1\n6 ÷ 2 = 3, resto 0\n3 ÷ 2 = 1, resto 1\n1 ÷ 2 = 0, resto 1\nLos restos en orden inverso son 1101, por lo tanto, la representación binaria de 13 es 1101.\n\n* Entrada: 21\nSalida: 10101\nExplicación:\n21 ÷ 2 = 10, resto 1\n10 ÷ 2 = 5, resto 0\n5 ÷ 2 = 2, resto 1\n2 ÷ 2 = 1, resto 0\n1 ÷ 2 = 0, resto 1\nLos restos en orden inverso son 10101, por lo tanto, la representación binaria de 21 es 10101."
      } */
    {
        type: "syntax",
        topics: [
            "operators"
        ],
        options: [],
        answer: "",
        testCases: [[["number", "2"], ["number", "3"], ["number", "5"]]],
        hint: "Al igual que en matemática, el operador '+' es usado para calcular la suma entre dos numeros",
        difficulty: "easy",
        explanation: "",
        text: "Implemente un método que reciba dos enteros y devuelva la suma de ambos."
    }
];
