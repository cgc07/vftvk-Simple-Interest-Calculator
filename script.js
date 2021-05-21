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

function highlight(text) {
  var inputText = document.getElementById("result");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0,index) + "<span class='marca'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
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
		document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
        highlight(p);
        highlight(rate);
        highlight(""+interest);
        highlight(""+year);
        highlight(""+amount);

	}
}
//funcion para actualizar el valor del rango seleccionado
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}