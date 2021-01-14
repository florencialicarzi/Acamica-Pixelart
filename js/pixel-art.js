var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var paleta= document.getElementById('paleta');
var grilla= document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById("indicador-de-color");
var colorPersonalizado = document.getElementById('color-personalizado');
var estadoMouse;
var botonGuardar = document.getElementById('guardar');
var botonBorrar = document.getElementById('borrar');
var batmanJs = document.getElementById('batman');
var wonderJs = document.getElementById('wonder');
var flashJs = document.getElementById('flash');
var invisibleJs = document.getElementById('invisible');

function recorrerColores()
{
    for (var i = 0; i < nombreColores.length; i++) 
    {
      var elemento = document.createElement('div');
      elemento.className = "color-paleta";
      elemento.style.backgroundColor= nombreColores[i];
      paleta.appendChild(elemento);     
    }
}

function crearGrilla()
{
   for (var i = 0; i < 1750; i++) 
    {
      var pixel = document.createElement('div');
      grilla.appendChild(pixel);     
    }
}

//Guarda el color de la paleta en el indicador de color
paleta.addEventListener("click", function (e){

 indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
}
);

//Pinta el pixel
grilla.addEventListener("click", function (e){

  e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
});

// Guardar color personalizado en el indicador de color.

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;

  })
);


grilla.addEventListener("mouseup", function (e) {

    estadoMouse = false;
    console.log("suelto")
});

grilla.addEventListener("mousedown", function (e) {

    estadoMouse = true;
    console.log("Apretado")
});

grilla.addEventListener("mousemove", function (e){
  if (estadoMouse==true) {
     e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  }
});
 
botonGuardar.addEventListener("click", function(e){
  guardarPixelArt();
});

botonBorrar.addEventListener("click",function(e){

      $("#grilla-pixeles div").animate({"background-color": "white"}, 1500);
});

batmanJs.addEventListener("click", function(e){
  console.log(" batman ok");
  cargarSuperheroe(batman);
});

wonderJs.addEventListener("click", function(e){
  console.log(" wonder ok");
  cargarSuperheroe(wonder);
});

flashJs.addEventListener("click", function(e){
  console.log(" flash ok");
  cargarSuperheroe(flash);
});

invisibleJs.addEventListener("click", function(e){
  console.log(" invisible ok");
  cargarSuperheroe(invisible);
});
// llamado de funciones

recorrerColores();
crearGrilla();

