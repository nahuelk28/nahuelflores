/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var primernumero;
	var segundonumero;

	primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);

	segundonumero=document.getElementById('numeroDos').value;
	segundonumero=parseInt(segundonumero);

	var suma;
	suma= primernumero + segundonumero;

	alert("la resta es " + suma);
	
}

function restar()
{
	var primernumero;
	var segundonumero;

	primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);

	segundonumero=document.getElementById('numeroDos').value;
	segundonumero=parseInt(segundonumero)

	var restar;
	restar= primernumero - segundonumero;

	alert("la resta es " + restar)
	
}

function multiplicar()
{ 
	var primernumero;
	var segundonumero;

	primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);
	segundonumero=document.getElementById('numeroDos').value;
    segundonumero=parseInt(segundonumero);

    var multiplicar;

    multiplicar= primernumero * segundonumero;

    alert("la multiplicacion es" + multiplicar)
	
}

function dividir()
{
	var primernumero;
	var segundonumero;

	primernumero=document.getElementById('numeroUno').value;
	primernumero=parseInt(primernumero);
	segundonumero=document.getElementById('numeroDos').value;
	segundonumero=parseInt(segundonumero);

	var dividir;

	dividir= primernumero / segundonumero;

	alert("la division es " + dividir)
	
}

