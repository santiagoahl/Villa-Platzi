var cuadro = document.getElementById("villaPlatzi"); //OJO AQUI NECESITO UN OBJETO AL CUAL TIRARLE LA FUNCION (DOCUMENT)
var lienzo = cuadro.getContext("2d");

var arrayImgs = {
  vaca : [],
  pollo : [],
  cerdo : [],
};

var arrayPosX = {
  vaca : [],
  pollo : [],
  cerdo : [],
};

var arrayPosY = {
  vaca : [],
  pollo : [],
  cerdo : [],
};

var i, cantidad;


var x0 = 50, y0 = 0; //Usadas para mover al cerdin

//Teclas

var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39,
};

//DECLARAMOS VAR MUÑECOS

var fondo =
{
  url:"tile.png",
  cargaOK:false,
};
var vaca =
{
  url:"vaca.png",
  cargaOK:false,
};
//console.log(vaca);

var pollo =
{
  url:"pollo.png",
  cargaOK:false,
};
var cerdo =
{
  url:"cerdo.png",
  cargaOK:false,
};

//Aqui vamos a PREPARAR la carga de Imgs

fondo.imagen = new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

//Aqui vamos a CARGAR cada img

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujarImg();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujarImg();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujarImg();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujarImg();
}

//Aqui vamos a DIBUJAR cada img en orden

function dibujarImg () //Recordar que las funciones no se DISPARAN si no se les da la ORDEN
{
  var x, y;

  if(fondo.cargaOK)
  {
    lienzo.drawImage(fondo.imagen, 0, 0); //Se carga el fondo primero simplemente porque se le da esa instruccion primero
  }

  if(vaca.cargaOK)
  {
    cantidad_v=aleatorio(0,10);
    for(i=0;i<cantidad_v;i++)
    {
     arrayPosX.vaca[i] = 80*aleatorio(5, 0);
     arrayPosY.vaca[i] = 80*aleatorio(5, 0);
     var x = arrayPosX.vaca[i];
     var y = arrayPosY.vaca[i];
     lienzo.drawImage(vaca.imagen, x, y);
     //var v = lienzo.drawImage(vaca.imagen, x, y);
     //arrayImgs.pollo [i] = v;
    }
    //console.log("v= " + cantidad_v);

  }

  if(pollo.cargaOK)
  {
    cantidad_p=aleatorio(0,10);
    for(i=0;i<cantidad_p;i++)
    {
      arrayPosX.pollo[i] = 80*aleatorio(5, 0);
      arrayPosY.pollo[i] = 80*aleatorio(5, 0);
      var x = arrayPosX.pollo[i];
      var y = arrayPosY.pollo[i];
      lienzo.drawImage(pollo.imagen, x, y);
      //arrayImgs.pollo [i] = p;
    }
  }
  if(cerdo.cargaOK)
  {
    console.log(cerdo.cargaOK);
    cantidad_c=aleatorio(0,10);

   for(i=0; i<cantidad_c; i++)
   {
      arrayPosX.cerdo[i] = 80*aleatorio(5, 0);
      arrayPosY.cerdo[i] = 80*aleatorio(5, 0);
      console.log(arrayPosX.cerdo[i], arrayPosY.cerdo[i]);
      var x = arrayPosX.cerdo[i];
      var y = arrayPosY.cerdo[i];
      lienzo.drawImage(cerdo.imagen, x, y);
    }
    document.addEventListener("keydown", moverPersonaje);
  }

}

//Aqui declaramos funcion que me de posiciones ALEATORIAS para los muñecos

function aleatorio (max, min) //esta funcion DEVUELVE valor!
{
  var random;
  random = Math.floor(Math.random()*(max - min) + min);

  return random;
}

//Aqui moveremos a la imagen (cerdo) a través del tablero

function moverPersonaje (evento)
{
  //console.log(evento);
 var xf=x0, yf=y0, movimiento = 5; //mov de 3 pixeles xd
  switch (evento.keyCode) //vamos a ejecutar teclas dependiendo de cual se teclee
  {
    case teclas.DOWN: //Bajamos  -> sumamos a (Y) ¿Por Qué?
    yf=y0+movimiento;
    break;
    case teclas.UP:
    yf=y0-movimiento;
    break;
    case teclas.LEFT:
    xf=x0-movimiento;
    break;
    case teclas.RIGHT:
    xf=x0+movimiento;
    break;
    default:
}

if(x0>=-10 && y0>=-25 && x0<=430 && y0<=435)
{
  lienzo.drawImage(fondo.imagen, 0, 0);
  for(i=0;i<cantidad_v;i++)lienzo.drawImage(vaca.imagen, arrayPosX.vaca[i], arrayPosY.vaca[i]);
  for(i=0;i<cantidad_p;i++)lienzo.drawImage(pollo.imagen, arrayPosX.pollo[i], arrayPosY.pollo[i]);
  for(i=0;i<cantidad_c;i++)lienzo.drawImage(cerdo.imagen, arrayPosX.cerdo[i], arrayPosY.cerdo[i]);
  lienzo.drawImage(cerdo.imagen, xf, yf);
  console.log();
}
  x0=xf;
  y0=yf;




 }

 //con mouse? (opcional)

 //cuadro.addEventListener("mousedown",inicioMouse);
 //cuadro.addEventListener("mousemove",dibujarMouse);
 //cuadro.addEventListener("mouseup",finMouse);

 function inicioMouse(eventoinicio)
 {
   pintar=true;
 }

 function finMouse(eventofin)
 {
   pintar=false;
 }

 function dibujarMouse(eventodibujar)
 {
   var xf=x0, yf=y0, movimiento = 5
 console.log(eventodibujar);
   if(pintar)
   {
     lienzo.drawImage(fondo.imagen, 0, 0);
     for(i=0;i<cantidad_v;i++)lienzo.drawImage(vaca.imagen, arrayPosX.vaca[i], arrayPosY.vaca[i]);
     for(i=0;i<cantidad_c;i++)lienzo.drawImage(pollo.imagen, arrayPosX.pollo[i], arrayPosY.pollo[i]);
     for(i=0;i<cantidad_c;i++)lienzo.drawImage(cerdo.imagen, arrayPosX.cerdo[i], arrayPosY.cerdo[i]);
     lienzo.drawImage(cerdo.imagen, xf, yf);
   }
 }
