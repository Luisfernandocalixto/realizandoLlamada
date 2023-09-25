function mostrarHora() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();

    let format = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh -= 12;
        format = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let tiempo = hh + ":" + mm + " " + format;

    let mostrar = document.querySelector('#reloj');
    mostrar.textContent = tiempo;

}

setInterval(mostrarHora, 1000);