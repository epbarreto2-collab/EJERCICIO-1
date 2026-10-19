document.getElementById('cuentaForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Leer valores del formulario
    const totalCuenta = parseFloat(document.getElementById('totalCuenta').value);
    const porcentajePropina = parseFloat(document.getElementById('porcentajePropina').value);
    const numeroPersonas = parseInt(document.getElementById('numeroPersonas').value, 10);

    // Cálculos
    const montoPropina = totalCuenta * (porcentajePropina / 100);
    const totalConPropina = totalCuenta + montoPropina;
    const pagoPorPersona = totalConPropina / numeroPersonas;

    // Mostrar el resultado detallado
    const contenedorResultado = document.getElementById('resultado');
    contenedorResultado.innerHTML = `
        <h3>Desglose de Pago:</h3>
        <p><strong>Monto de Propina:</strong> $${montoPropina.toFixed(2)}</p>
        <p><strong>Total con Propina:</strong> $${totalConPropina.toFixed(2)}</p>
        <p><strong>Pago por Persona (${numeroPersonas}):</strong> $${pagoPorPersona.toFixed(2)}</p>
    `;
});