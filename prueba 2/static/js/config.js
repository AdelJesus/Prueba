function toggleMenu() { 
    let menu = document.getElementById("menu");
    let contenedor = document.getElementById("contenedor");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        contenedor.classList.remove("shifted");
    } else {
        menu.classList.add("open");
        contenedor.classList.add("shifted");
    }
}

document.addEventListener("click", function(event) {
    let menu = document.getElementById("menu");
    let contenedor = document.getElementById("contenedor");
    let button = document.querySelector(".boton");

    if (menu.classList.contains("open") && !menu.contains(event.target) && event.target !== button) {
        menu.classList.remove("open");
        contenedor.classList.remove("shifted");
    }
});

function cambiarSeccion(seccionId) {
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach(sec => sec.style.display = "none");

    const seccion = document.getElementById(seccionId);

    if (seccionId === "calendario") {
        seccion.style.display = "block";
        generarCalendario();
    } else {
        seccion.style.display = "block";
    }
}


function generarCalendario() {
    let calendarContainer = document.getElementById("calendar-container");
    if (!calendarContainer) return;
    
    calendarContainer.innerHTML = "";

    let fecha = new Date();
    let mesActual = fecha.getMonth();
    let anioActual = fecha.getFullYear();
    let diaHoy = fecha.getDate();

    let nombreMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    let tabla = `<table border="1">
        <caption>${nombreMeses[mesActual]} ${anioActual}</caption>
        <tr>
            <th>Dom</th><th>Lun</th><th>Mar</th><th>Mié</th>
            <th>Jue</th><th>Vie</th><th>Sáb</th>
        </tr>`;

    let primerDia = new Date(anioActual, mesActual, 1).getDay();
    let diasEnMes = new Date(anioActual, mesActual + 1, 0).getDate();

    let dia = 1;
    for (let i = 0; i < 6; i++) {
        tabla += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < primerDia) {
                tabla += "<td></td>";
            } else if (dia > diasEnMes) {
                break;
            } else {
                let claseHoy = dia === diaHoy ? 'hoy' : '';
                tabla += `<td class="${claseHoy}">${dia}</td>`;
                dia++;
            }
        }
        tabla += "</tr>";
    }

    tabla += "</table>";
    calendarContainer.innerHTML = tabla;
}



