function Mostrar()
{
//tomo la edad  
  var edad;
  edad= document.getElementById("edad").value;
  edad=parseInt(edad);

  if (edad <=12||edad>=18)
  {
      alert("Ud no es adolescente");
  }

}//FIN DE LA FUNCIÓN