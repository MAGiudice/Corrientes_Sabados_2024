var img = document.getElementById("letras");

document.addEventListener("keydown", teclado);
document.addEventListener("keyup", reset);

function teclado(evento){
    var codigo = event.keyCode;
    if(codigo > 64 && codigo < 91){
        img.src = "images/"+codigo+".gif";
    }
}

function reset(evento){
    img.src = "images/vacio.gif";
}
