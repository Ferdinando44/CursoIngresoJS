/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numero1;
    var numero2;
    var total;

    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);
    total= numero1+numero2;
    alert("La suma es "+total);
	
}

function restar()
{
    var numero1;
    var numero2;
    var total;

    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);
    total= numero1-numero2;
    alert("La resta es "+total);
	
	
}

function multiplicar()
{ 
	var numero1;
    var numero2;
    var total;

    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);
    total= numero1*numero2;
    alert("La multiplicacion es "+total);
	
}

function dividir()
{
    var numero1;
    var numero2;
    var total;

    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);
    total= numero1/numero2;
    alert("La division es "+total);
	
	
}

