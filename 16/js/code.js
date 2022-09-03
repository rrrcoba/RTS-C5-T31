// Reloj a tiempo real
function realTimeWatch() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // Hacemos un check a los minutos y segundos y ponemos 0 delante si es necesario
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('watch').innerHTML = h + " : " + m + " : " + s;
    
    setTimeout("realTimeWatch()", 1000);
}

// Hace el check para poner 0 delante
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}