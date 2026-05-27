var mivideoo, reproducir, barra, progreso, maximo;

maximo=302;

//primero va el nombre de la variable, despues "document.getElementById" lo que hace es unir la variable con el id del html que en este caso llame igual 
function comenzar(){
    mivideoo=document.getElementById("mivideoo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");


 
    //aqui agregar "addEventListener" es para que se transforme en evento y reaccione a lo que uno haga
    //al hacer "click" en "reproducir" reaccionara la variable "clicando" desatando el evento que haya puesto en la variable
    reproducir.addEventListener("click",clicando,false);
    barra.addEventListener("click",adelantando,false);
}

function clicando(){
    if((mivideoo.paused==false) && (mivideoo.ended==false)){
        mivideoo.pause();
        reproducir.innerHTML="Play";
    }
    else{
        mivideoo.play();
        reproducir.innerHTML="Pause";

        bucle= setInterval(estado,125);
    }
}

function estado(){
    if (mivideoo.ended==false){
        var total=parseInt(mivideoo.currentTime*maximo/mivideoo.duration);
        progreso.style.width=total+"px";
    }
}

function adelantando(posicion){
    if ((mivideoo.paused==false) && (mivideoo.ended==false)){
        var ratonX=posicion.pageX-barra.offsetLeft;
        var nuevoTiempo=ratonX*mivideoo.duration/maximo;
        mivideoo.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+"px";
    }
}

window.addEventListener("load",comenzar,false);