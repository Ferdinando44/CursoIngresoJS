function Mostrar()
{
//tomo la edad 
var edad
var ecivil
 edad = document.getElementById ("edad").value;
 ecivil = document.getElementById ("estadoCivil").value;
 edad=parseInt(edad);
 
 if (edad <=17 && ecivil == "Casado"||edad <=17 && ecivil =="Divorciado")
 {
 alert ("Es muy pequeño para NO ser soltero");
}
 

	


}//FIN DE LA FUNCIÓN