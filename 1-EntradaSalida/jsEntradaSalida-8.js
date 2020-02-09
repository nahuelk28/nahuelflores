/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividiendo;
	var divisor;

	dividiendo=document.getElementById('numeroDividendo').value;
	dividiendo=parseInt(dividiendo);

	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor);

	var SacarResto;

	SacarResto= dividiendo % divisor;

	alert("el resto es " +SacarResto)
	
}
