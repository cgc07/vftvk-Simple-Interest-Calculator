/* funcion para validar cantidad ingresada
se pueden usar solo valores mayores a cero
*/
function valPrincipal()
{
	var monto = document.getElementById("principal");

	if (monto.value == ""){
		alert("Please enter a valid number");
		monto.focus();
		return false;
	}else{
		var valor=parseInt(monto.value);
		if (valor <= 0){
			alert("Please enter a positive number");
			monto.focus();
			return false;
		}
	}
	return true;
}
// funcion para generar el calculo de interes ganado
function compute()
{

	if (valPrincipal()){

	    p = document.getElementById("principal").value;
	    var rate = document.getElementById("rate").value;
	    var years = document.getElementById("years").value;
	    var interest = parseInt(years) * (parseInt(p) * (parseFloat(rate) /100));
	    var year = new Date().getFullYear()+parseInt(years);
	    var amount = p + interest;
	    var marcaP=document. createElement("mark");
	    marcaP.innerText=p;
		document.getElementById("result").innerHTML="If you deposit "+marcaP+",\<br\>at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

	}
}
//funcion para actualizar el valor del rango seleccionado
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}