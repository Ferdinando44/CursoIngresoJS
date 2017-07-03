function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota= parseInt(Math.random()*(10-1))+1;
	
	if(nota>=9)
	{
	alert("Su nota es "+nota+" Excelente!!!!");
	}

else
{
	if (nota>=4)
	{
		alert("Su nota es "+nota+" APROBO")
	}

	else
	{
		alert("Su nota es "+nota+" Vamos, la proxima se puede");
	}
}

}//FIN DE LA FUNCIÓN