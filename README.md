# Módulo Económico: Planificación de Ahorro Progresivo mediante la Serie de Fibonacci

Este módulo interactivo aplica patrones de crecimiento biológico y matemático al entorno de las finanzas personales, ofreciendo una alternativa dinámica a los métodos tradicionales de acumulación de capital.

---

## 📈 Contexto del Problema Real

Ahorrar una cantidad fija de dinero de forma mensual puede volverse monótono o insuficiente cuando se intentan alcanzar metas financieras exponenciales. Además, el comportamiento de la inflación y las necesidades de capitalización requieren que el esfuerzo de ahorro aumente de manera progresiva a medida que se consolida el hábito.

Este sistema resuelve el problema implementando una estrategia de ahorro basada en la **sucesión de Fibonacci**, una secuencia matemática donde cada valor es el resultado de sumar los dos anteriores. Esto permite al usuario iniciar su plan con montos muy accesibles y pequeños (como Bs. 1), incrementando la meta mes a mes de manera controlada y predecible, simulando una curva de aceleración económica ideal para fondos de inversión o metas a mediano plazo.

---

## ⚙️ Características Clave del Sistema

* **Proyección Personalizada:** El usuario interactúa mediante un formulario interactivo para definir la cantidad exacta de meses que desea evaluar en su plan de ahorro.
* **Cálculo de Flujo de Caja:** Genera una matriz visual detallada (tabla) que desglosa el depósito exacto requerido para cada periodo y calcula la sumatoria acumulada en tiempo real.
* **Optimización de Memoria:** El motor lógico realiza el procesamiento iterativo de forma directa, garantizando la estabilidad del navegador al no utilizar recursos de almacenamiento masivo.
* **Diseño UI Adaptable:** Interfaz limpia basada en una paleta de colores verdes (temática *Fintech* de crecimiento financiero), optimizada al 100% para teléfonos celulares, tabletas y computadoras.

---

## 🧮 Explicación del Algoritmo Producido

Para cumplir estrictamente con los requerimientos técnicos del proyecto, la lógica detrás de la simulación sigue estos pasos estructurados:

1. **Lectura de Datos:** Mediante la instrucción nativa `document.getElementById()`, el script captura los meses ingresados en el formulario y los convierte en un entero operable mediante un casteo numérico.
2. **Control de Sucesión sin Vectores:** En lugar de saturar la memoria guardando listas de datos en un array, el algoritmo utiliza únicamente tres variables simples independientes (`a`, `b` y `c`) para calcular los términos en caliente y optimizar el rendimiento.
3. **Bucle de Simulación:** Un ciclo estructurado `for` calcula el término actual y acumula el dinero de manera progresiva. En cada iteración, la variable `c` toma el valor de `a + b`, desplazando luego los valores lógicos (`a = b` y `b = c`) para preparar el cómputo del mes subsiguiente.
4. **Renderizado Dinámico:** Los montos calculados se transforman directamente en una estructura de tabla organizada y se inyectan en la vista web usando la propiedad `.innerHTML`, cumpliendo la restricción de no mostrar resultados en la consola del navegador.

---

## 🛠️ Tecnologías Empleadas

* **HTML5:** Estructuración semántica de la página, maquetación del formulario de proyección y bloques de información de contexto.
* **CSS3:** Estilos visuales adaptados a la temática económica y diseño responsivo basado en consultas de medios (*Media Queries*).
* **JavaScript (Vanilla JS):** Motor dinámico encargado de la algoritmia iterativa, control de la serie numérica y manipulación limpia del DOM.

---

## 📂 Estructura del Módulo

```text
fibonacci/
├── index.html
├── LÉAME.md
│
├── css/
│   └── estilos.css
│
└── js/
    └── script-fibonacci.js
