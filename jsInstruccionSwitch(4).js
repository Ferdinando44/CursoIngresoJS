function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case"Febrero":
    alert("Este mes tiene 28 dias");
    break;

    case "Abril":
    case "Mayo":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    
     alert("este mes tiene 30 dias");
     break;

     default:
     alert("ESte mes tiene 31 dias");
     break;
    
}
	
	



}