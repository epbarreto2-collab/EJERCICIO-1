document.getElementById('notasForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Leer los valores de los inputs
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Calcular el promedio
    const promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar resultado formateado a 2 decimales
    const contenedorResultado = document.getElementById('resultado');
    contenedorResultado.innerHTML = `
        <h3>Resultado del Estudiante:</h3>
        <p><strong>Promedio final:</strong> ${promedio.toFixed(2)} / 10</p>
    `;
});