function check1() {
    // Primero creamos la expresión regular como patrón constante
    const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

    // Obtenemos el valor introducido
    let date = document.getElementById("date").value;

    // Lo comprobamos con el patrón
    if (regex.test(date)) {
        alert("Valid date.");
    } else {
        alert("Date not valid.");
    }
}

function check2() {
    const regex = /^[\w-\.]+@([\w])+.[\w]{2,3}$/;
    let mail = document.getElementById("mail").value;
    if (regex.test(mail)) {
        alert("Valid mail.");
    } else {
        alert("Mail not valid.");
    }
}

function escapeHTML() {
    str = document.getElementById("html").value;
    const charsToEncode = /[&"<>]/g;
    const encodeTo = {
      "&": '&amp;',
      "\"": '&quot;',
      "<": '&lt;',
      ">": '&gt;',
    }
    alert(str.replace(charsToEncode, char => encodeTo[char]));
}