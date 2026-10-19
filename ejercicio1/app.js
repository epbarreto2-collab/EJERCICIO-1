document.getElementById('conversorForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Leer el valor del formulario
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Fórmulas
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Mostrar el resultado en pantalla
    const contenedorResultado = document.getElementById('resultado');
    contenedorResultado.innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
        <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
    `;
});