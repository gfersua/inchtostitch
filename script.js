function calcular() {

    const aida = parseInt(document.getElementById("aida").value);
    const puntosAncho = parseFloat(document.getElementById("puntos-ancho").value);
    const puntosAlto = parseFloat(document.getElementById("puntos-alto").value);

    if (isNaN(puntosAncho) || isNaN(puntosAlto) || puntosAncho <= 0 || puntosAlto <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, añade un formato válido.";
        return;
    }

    const cmAncho = (puntosAncho / aida) * 2.54;
    const cmAlto = (puntosAlto / aida) * 2.54;

    document.getElementById("resultado").innerHTML = `
        <div class="resultado-contenido">
            <p class="resultado-titulo">Resultado</p>
            <p class="resultado-linea">Ancho: <span>${cmAncho.toFixed(2)} cm</span></p>
            <p class="resultado-linea">Alto: <span>${cmAlto.toFixed(2)} cm</span></p>
        </div>
    `;
}