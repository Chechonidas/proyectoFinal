// obtener parámetros de la URL
function obtenerParametro(nombre) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nombre);
}

// mostrar la interpretación
function mostrarInterpretacion() {
    const tipo = obtenerParametro("tipo");
    const valor = Number(obtenerParametro("valor"));

    const titulo = document.getElementById("tituloTipo");
    const resultado = document.getElementById("valorInterpretado");
    const texto = document.getElementById("textoInterpretacion");

    if (!tipo || isNaN(valor)) {
        titulo.innerText = "Parámetros no válidos.";
        resultado.innerText = "";
        texto.innerText = "Por favor, regresa al inicio y realiza un nuevo cálculo.";
        return;
    }

    let interpretacion = "";
    let tipoTexto = "";

    if (tipo === "personal" || tipo === "año") {
        tipoTexto = tipo === "personal" ? "Número Personal" : "Año Calendario";
        const item = numeroDestino.find(n => n.numero === valor);
        interpretacion = item?.significado || "No se encontró interpretación.";
    } else if (tipo === "añopersonal") {
        tipoTexto = "Año Personal";
        const item = numeroAnioPersonal.find(n => n.numero === valor);
        interpretacion = item?.significado || "No se encontró interpretación.";
    } else if (tipo === "mespersonal") {
        tipoTexto = "Mes Personal";
        const item = numeroMesPersonal.find(n => n.numero === valor);
        interpretacion = item?.significado || "No se encontró interpretación.";
    } else if (tipo === "destino") {
        tipoTexto = "Número de Destino";
        const item = numeroDestino.find(n => n.numero === valor);
        interpretacion = item?.significado || "No se encontró interpretación.";
    } else if (tipo === "nombre") {
        tipoTexto = "Número del Nombre";
        const item = numerosNombre.find(n => n.numero === valor);
        interpretacion = item?.personalidad || "No se encontró interpretación.";
    } else if (tipo === "alma") {
        tipoTexto = "Número del Alma";
        const item = numeroAlma.find(n => n.numero === valor);
        interpretacion = item?.significado || "No se encontró interpretación.";
    } else if (tipo === "expresion") {
        tipoTexto = "Expresión del Alma";
        const item = numeroExpresion.find(n => n.numero === valor);
        interpretacion = item?.significado || "No se encontró interpretación.";
    } else if (tipo === "proyecto") {
        tipoTexto = "Proyecto Sentido";
        const item = numeroProyecto.find(n => n.numero === valor);
        interpretacion = item?.significado || "No se encontró interpretación.";
    }

    titulo.innerText = `Has elegido saber tu ${tipoTexto}`;
    resultado.innerText = valor;
    texto.innerText = interpretacion;
}

// Ejecutar al cargar
window.onload = mostrarInterpretacion;
