function number(num) {
    document.getElementById("result").value += num;
}

function del() {
    let value = document.getElementById("result").value;
    if(value.length > 1){
        value = value.substr(0, value.length -1);
        value = document.getElementById("result").value = value;
    }else{
        value = document.getElementById("result").value = "";
    }
}

function AC() {
    document.getElementById("result").value ="";
}