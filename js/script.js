function calcularAhorro() {
    // Uso obligatorio de document.getElementById()
    let inputMeses = document.getElementById("mesesInput");
    let contenedorResultado = document.getElementById("resultadoAhorro");
    
    let totalMeses = parseInt(inputMeses.value);
    
    // Algoritmo de Fibonacci sin vectores usando variables simples
    let a = 0;
    let b = 1;
    let c;
    
    let acumuladoTotal = 0;
    let tablaHtml = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; text-align: left;">
            <thead>
                <tr style="border-bottom: 2px solid #1e3c72; color: #1e3c72;">
                    <th style="padding: 8px;">Mes de Ahorro</th>
                    <th style="padding: 8px;">Depósito (Bs.)</th>
                    <th style="padding: 8px;">Total Acumulado (Bs.)</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 1; i <= totalMeses; i++) {
        // En el primer mes real de ahorro se toma el valor inicial funcional distinto de cero
        let depositoMes = (i === 1) ? 1 : b; 
        acumuladoTotal += depositoMes;

        tablaHtml += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;">Mes ${i}</td>
                <td style="padding: 8px;">Bs. ${depositoMes}</td>
                <td style="padding: 8px;"><strong>Bs. ${acumuladoTotal}</strong></td>
            </tr>
        `;

        // Avanzar la serie matemática
        if (i > 1) {
            c = a + b;
            a = b;
            b = c;
        }
    }

    tablaHtml += `
            </tbody>
        </table>
        <p style="margin-top: 15px; font-size: 1.1rem; color: #27ae60;">
            <strong>¡Meta Final! Ahorro total acumulado: Bs. ${acumuladoTotal}</strong>
        </p>
    `;

    // Renderizar resultados en pantalla sin usar la consola
    contenedorResultado.innerHTML = tablaHtml;
}