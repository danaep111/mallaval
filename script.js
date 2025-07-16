
const mallaData = window.mallaData;  // de data.js
const mallaElement = document.getElementById("malla");

const estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function guardarEstado() {
    localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function tieneRequisitosCumplidos(ramo) {
    if (!ramo.requisitos || ramo.requisitos.length === 0) return true;
    return ramo.requisitos.every(req => estado[req]);
}

function crearRamo(ramo) {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;

    if (estado[ramo.codigo]) {
        div.classList.add("aprobado");
    } else if (!tieneRequisitosCumplidos(ramo)) {
        div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => {
        if (!tieneRequisitosCumplidos(ramo)) return;
        estado[ramo.codigo] = !estado[ramo.codigo];
        guardarEstado();
        renderMalla();
    });

    return div;
}

function renderMalla() {
    mallaElement.innerHTML = "";
    mallaData.forEach((semestre, i) => {
        const semDiv = document.createElement("div");
        semDiv.className = "semestre";
        const title = document.createElement("h2");
        title.textContent = `Semestre ${i + 1}`;
        semDiv.appendChild(title);
        semestre.forEach(ramo => {
            const ramoElement = crearRamo(ramo);
            semDiv.appendChild(ramoElement);
        });
        mallaElement.appendChild(semDiv);
    });
}

renderMalla();
