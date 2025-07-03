const valoresLetras = {
  a: 1, j: 1, s: 1,
  b: 2, t: 2,
  c: 3, ç: 3, l: 3, u: 3,
  d: 4, m: 4,
  e: 5, n: 5, ñ: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9,
  k: 11,
  v: 22
};

const etiquetas = {
  año: "Año Calendario",
  personal: "Número Personal",
  destino: "Número del Destino",
  nombre: "Número del Nombre",
  alma: "Número del Alma",
  expresion: "Expresión del Alma",
  proyecto: "Proyecto Sentido",
  añopersonal: "Año Personal",
  mespersonal: "Mes Personal"
};

// normalizar textos
function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// función para reducir números completamente
function reducirNumero(numero) {
    const maestros = [11, 22];
    let numeroReducido = numero;

    while (numeroReducido > 9 && !maestros.includes(numeroReducido)) {
        let suma = 0;
        const digitos = numeroReducido.toString();

        for (let i = 0; i < digitos.length; i++) {
            suma += parseInt(digitos[i]);
        }

        numeroReducido = suma;
    }

    return numeroReducido;
}


// 0. año actual
function calcularAñoCalendario() {
    const hoy = new Date();
    return hoy.getFullYear();
}


//1. numero personal
function calcularNumeroPersonal(fecha) {
    const dia = new Date(fecha).getDate();
    return reducirNumero(dia);
}

//2. numero del Destino
function calcularNumeroDestino(fecha) {
    const partes = fecha.split("-");
    const numeros = partes.join("");
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += parseInt(numeros[i]);
    }
    return reducirNumero(suma);
}

//3 numero del nombre
function calcularNumeroNombre(nombre, apellido) {
    const texto = normalizarTexto(nombre + apellido);
    let suma = 0;

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (valoresLetras[letra]) {
            suma += valoresLetras[letra];
        }
    }

    return reducirNumero(suma);
}

//4 numero del alma
function calcularNumeroAlma(nombre, apellido) {
    const texto = normalizarTexto(nombre + apellido);
    let suma = 0;

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if ("aeiou".includes(letra) && valoresLetras[letra]) {
            suma += valoresLetras[letra];
        }
    }

    return reducirNumero(suma);
}

// 5 expresion del alma
function calcularExpresionAlma(nombre, apellido) {
    const texto = normalizarTexto(nombre + apellido);
    let suma = 0;

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (!"aeiou".includes(letra) && valoresLetras[letra]) {
            suma += valoresLetras[letra];
        }
    }

    return reducirNumero(suma);
}

// 6 proyecto sentido
function calcularProyectoSentido(nombre) {
    const texto = normalizarTexto(nombre);
    let suma = 0;

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if ("aeiou".includes(letra) && valoresLetras[letra]) {
            suma += valoresLetras[letra];
        }
    }

    return reducirNumero(suma);
}

// 7 año personal
function calcularAñoPersonal(fecha) {
    const hoy = new Date();
    const anioActual = hoy.getFullYear();

    const nacimiento = new Date(fecha);
    const suma = anioActual + nacimiento.getDate() + (nacimiento.getMonth() + 1);

    return reducirNumero(suma);
};

// 8 mes personal
function calcularMesPersonal(fecha) {
    const añoPersonal = calcularAñoPersonal(fecha);
    const mesActual = new Date().getMonth() + 1;
    return reducirNumero(añoPersonal + mesActual);
};

// obtener datos del user

document.getElementById("formularioNumerologia").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    const fecha = document.querySelector('input[name="fecha"]').value;
    const calculo = document.querySelector('select[name="calculo"]').value;

    let resultado = null;

    if (calculo === "personal") {
        resultado = calcularNumeroPersonal(fecha);
    } else if (calculo === "año") {
        resultado = calcularAñoCalendario();
    } else if (calculo === "destino") {
        resultado = calcularNumeroDestino(fecha);
    } else if (calculo === "nombre") {
        resultado = calcularNumeroNombre(nombre, apellido);
    } else if (calculo === "alma") {
        resultado = calcularNumeroAlma(nombre, apellido);
    } else if (calculo === "expresion") {
        resultado = calcularExpresionAlma(nombre, apellido);
    } else if (calculo === "proyecto") {
        resultado = calcularProyectoSentido(nombre);
    } else if (calculo === "añopersonal") {
        resultado = calcularAñoPersonal(fecha);
    } else if (calculo === "mespersonal") {
        resultado = calcularMesPersonal(fecha);
    }


    if (resultado !== null) {
        document.getElementById("resultadoNumerologico").style.display = "block";
        document.getElementById("tipoResultado").innerText = etiquetas[calculo];
        document.getElementById("valorResultado").innerText = resultado;
    }
});

function verInterpretacion() {
  const select = document.querySelector('select[name="calculo"]');
  const tipo = select.value;
  const valor = document.getElementById("valorResultado").innerText.trim();

  const url = `interpretacion.html?tipo=${encodeURIComponent(tipo)}&valor=${valor}`;
  window.location.href = url;
}