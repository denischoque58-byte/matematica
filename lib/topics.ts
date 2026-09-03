export type Step = {
  text: string
  math?: string
}

export type Topic = {
  id: string
  title: string
  tagline: string
  description: string
  formula: string
  exampleTitle: string
  example: string
  steps: Step[]
  result: string
}

export type Level = {
  id: "primaria" | "secundaria" | "universitaria"
  label: string
  short: string
  description: string
  topics: Topic[]
}

export const levels: Level[] = [
  {
    id: "primaria",
    label: "Nivel primario",
    short: "Primaria",
    description:
      "Las operaciones fundamentales que forman la base de todo el pensamiento matemático: contar, agrupar, repartir y comparar.",
    topics: [
      {
        id: "suma",
        title: "Suma con llevadas",
        tagline: "Aritmética",
        description:
          "Sumar dos números combinando sus unidades, decenas y centenas. Cuando una columna supera 9, se 'lleva' una unidad a la columna siguiente.",
        formula: "a + b = c",
        exampleTitle: "Calcular 47 + 38",
        example: "47 + 38",
        steps: [
          { text: "Sumamos las unidades: 7 + 8 = 15. Escribimos 5 y llevamos 1.", math: "7 + 8 = 15" },
          { text: "Sumamos las decenas más la que llevamos: 4 + 3 + 1 = 8.", math: "4 + 3 + 1 = 8" },
          { text: "Unimos los resultados: decenas 8 y unidades 5.", math: "85" },
        ],
        result: "47 + 38 = 85",
      },
      {
        id: "resta",
        title: "Resta con préstamo",
        tagline: "Aritmética",
        description:
          "Restar cuando un dígito de arriba es menor que el de abajo. Se 'pide prestada' una decena a la columna vecina.",
        formula: "a - b = c",
        exampleTitle: "Calcular 62 - 47",
        example: "62 - 47",
        steps: [
          { text: "En las unidades 2 es menor que 7, pedimos prestado: 12 - 7 = 5.", math: "12 - 7 = 5" },
          { text: "La decena queda en 5 tras el préstamo: 5 - 4 = 1.", math: "5 - 4 = 1" },
          { text: "Unimos: decena 1 y unidad 5.", math: "15" },
        ],
        result: "62 - 47 = 15",
      },
      {
        id: "multiplicacion",
        title: "Multiplicación",
        tagline: "Aritmética",
        description:
          "Multiplicar es sumar un número varias veces. La multiplicación por columnas descompone el problema dígito a dígito.",
        formula: "a \\times b = c",
        exampleTitle: "Calcular 23 × 6",
        example: "23 \\times 6",
        steps: [
          { text: "Multiplicamos las unidades: 3 × 6 = 18. Escribimos 8 y llevamos 1.", math: "3 \\times 6 = 18" },
          { text: "Multiplicamos las decenas: 2 × 6 = 12, más 1 que llevamos = 13.", math: "2 \\times 6 + 1 = 13" },
          { text: "Unimos los resultados.", math: "138" },
        ],
        result: "23 \\times 6 = 138",
      },
      {
        id: "fracciones",
        title: "Fracciones equivalentes",
        tagline: "Fracciones",
        description:
          "Una fracción representa partes de un todo. Dos fracciones son equivalentes si representan la misma cantidad.",
        formula: "\\frac{a}{b} = \\frac{a \\times k}{b \\times k}",
        exampleTitle: "¿Es 1/2 igual a 3/6?",
        example: "\\frac{1}{2} \\stackrel{?}{=} \\frac{3}{6}",
        steps: [
          { text: "Multiplicamos numerador y denominador de 1/2 por 3.", math: "\\frac{1 \\times 3}{2 \\times 3}" },
          { text: "Obtenemos 3/6, la misma fracción.", math: "\\frac{3}{6}" },
          { text: "Por lo tanto son equivalentes.", math: "\\frac{1}{2} = \\frac{3}{6}" },
        ],
        result: "\\frac{1}{2} = \\frac{3}{6}",
      },
    ],
  },
  {
    id: "secundaria",
    label: "Nivel secundario",
    short: "Secundaria",
    description:
      "El álgebra y la geometría introducen la abstracción: letras que representan números, ecuaciones que modelan la realidad y figuras que se miden.",
    topics: [
      {
        id: "ecuacion-lineal",
        title: "Ecuaciones lineales",
        tagline: "Álgebra",
        description:
          "Una ecuación de primer grado tiene una incógnita elevada a la potencia 1. Se resuelve despejando la variable.",
        formula: "ax + b = c",
        exampleTitle: "Resolver 3x + 5 = 20",
        example: "3x + 5 = 20",
        steps: [
          { text: "Restamos 5 en ambos lados de la ecuación.", math: "3x = 20 - 5" },
          { text: "Simplificamos el lado derecho.", math: "3x = 15" },
          { text: "Dividimos ambos lados entre 3.", math: "x = \\frac{15}{3}" },
          { text: "Obtenemos el valor de x.", math: "x = 5" },
        ],
        result: "x = 5",
      },
      {
        id: "pitagoras",
        title: "Teorema de Pitágoras",
        tagline: "Geometría",
        description:
          "En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.",
        formula: "a^2 + b^2 = c^2",
        exampleTitle: "Catetos de 3 y 4, hallar la hipotenusa",
        example: "a = 3,\\ b = 4",
        steps: [
          { text: "Sustituimos los catetos en la fórmula.", math: "3^2 + 4^2 = c^2" },
          { text: "Calculamos los cuadrados.", math: "9 + 16 = c^2" },
          { text: "Sumamos.", math: "25 = c^2" },
          { text: "Aplicamos raíz cuadrada.", math: "c = \\sqrt{25} = 5" },
        ],
        result: "c = 5",
      },
      {
        id: "cuadratica",
        title: "Ecuación cuadrática",
        tagline: "Álgebra",
        description:
          "Ecuaciones de segundo grado que se resuelven con la fórmula general (o resolvente).",
        formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        exampleTitle: "Resolver x² - 5x + 6 = 0",
        example: "x^2 - 5x + 6 = 0",
        steps: [
          { text: "Identificamos los coeficientes.", math: "a = 1,\\ b = -5,\\ c = 6" },
          { text: "Sustituimos en la fórmula general.", math: "x = \\frac{5 \\pm \\sqrt{25 - 24}}{2}" },
          { text: "Simplificamos el discriminante.", math: "x = \\frac{5 \\pm 1}{2}" },
          { text: "Obtenemos las dos soluciones.", math: "x_1 = 3,\\ x_2 = 2" },
        ],
        result: "x = 3 \\ \\text{o} \\ x = 2",
      },
      {
        id: "trigonometria",
        title: "Razones trigonométricas",
        tagline: "Trigonometría",
        description:
          "Relacionan los ángulos de un triángulo rectángulo con las longitudes de sus lados.",
        formula: "\\sin\\theta = \\frac{\\text{opuesto}}{\\text{hipotenusa}}",
        exampleTitle: "Seno de un ángulo con opuesto 3 e hipotenusa 5",
        example: "\\text{op} = 3,\\ \\text{hip} = 5",
        steps: [
          { text: "Aplicamos la definición de seno.", math: "\\sin\\theta = \\frac{3}{5}" },
          { text: "Dividimos para obtener el valor decimal.", math: "\\sin\\theta = 0{,}6" },
          { text: "Calculamos el ángulo con la función inversa.", math: "\\theta = \\arcsin(0{,}6) \\approx 36{,}87^\\circ" },
        ],
        result: "\\theta \\approx 36{,}87^\\circ",
      },
    ],
  },
  {
    id: "universitaria",
    label: "Nivel universitario",
    short: "Universidad",
    description:
      "El cálculo y el álgebra lineal estudian el cambio, lo infinitamente pequeño y los sistemas de muchas dimensiones.",
    topics: [
      {
        id: "limites",
        title: "Límites",
        tagline: "Cálculo",
        description:
          "El límite describe el valor al que se acerca una función cuando la variable tiende a un punto.",
        formula: "\\lim_{x \\to a} f(x) = L",
        exampleTitle: "Calcular el límite de (x²-1)/(x-1) cuando x → 1",
        example: "\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}",
        steps: [
          { text: "Al sustituir se obtiene 0/0, una indeterminación.", math: "\\frac{1 - 1}{1 - 1} = \\frac{0}{0}" },
          { text: "Factorizamos el numerador como diferencia de cuadrados.", math: "\\frac{(x-1)(x+1)}{x-1}" },
          { text: "Cancelamos el factor común (x - 1).", math: "x + 1" },
          { text: "Ahora sustituimos x = 1.", math: "1 + 1 = 2" },
        ],
        result: "\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = 2",
      },
      {
        id: "derivadas",
        title: "Derivadas",
        tagline: "Cálculo",
        description:
          "La derivada mide la razón de cambio instantánea de una función. La regla de la potencia es la más usada.",
        formula: "\\frac{d}{dx} x^n = n\\,x^{n-1}",
        exampleTitle: "Derivar f(x) = 3x³ + 2x",
        example: "f(x) = 3x^3 + 2x",
        steps: [
          { text: "Aplicamos la regla de la potencia al primer término.", math: "\\frac{d}{dx}(3x^3) = 9x^2" },
          { text: "Derivamos el segundo término.", math: "\\frac{d}{dx}(2x) = 2" },
          { text: "Sumamos las derivadas de cada término.", math: "f'(x) = 9x^2 + 2" },
        ],
        result: "f'(x) = 9x^2 + 2",
      },
      {
        id: "integrales",
        title: "Integrales",
        tagline: "Cálculo",
        description:
          "La integral es la operación inversa de la derivada y permite calcular áreas bajo una curva.",
        formula: "\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C",
        exampleTitle: "Integrar ∫ (2x + 3) dx",
        example: "\\int (2x + 3)\\, dx",
        steps: [
          { text: "Integramos cada término por separado.", math: "\\int 2x\\, dx + \\int 3\\, dx" },
          { text: "Aplicamos la regla de la potencia.", math: "x^2 + 3x" },
          { text: "Añadimos la constante de integración.", math: "x^2 + 3x + C" },
        ],
        result: "\\int (2x + 3)\\, dx = x^2 + 3x + C",
      },
      {
        id: "matrices",
        title: "Determinante 2×2",
        tagline: "Álgebra lineal",
        description:
          "El determinante de una matriz cuadrada resume información clave, como si el sistema tiene solución única.",
        formula: "\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc",
        exampleTitle: "Determinante de [[2, 3], [1, 4]]",
        example: "\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}",
        steps: [
          { text: "Multiplicamos la diagonal principal.", math: "2 \\times 4 = 8" },
          { text: "Multiplicamos la diagonal secundaria.", math: "3 \\times 1 = 3" },
          { text: "Restamos ambos productos.", math: "8 - 3 = 5" },
        ],
        result: "\\det = 5",
      },
    ],
  },
]
