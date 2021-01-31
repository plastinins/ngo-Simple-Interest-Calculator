function compute()
{
	// Find principal input and get it's value
	var principalInput = document.getElementById("principal");
    var principal = principalInput.value;

	// Validate principal input
	if(principal == "" || principal <= 0)
	{
		alert("Enter a positive number");
		principalInput.focus();
		return;
	}
	
	// Find rate and years inputs and get their values
    var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	
	// calculate interest
	var interest = principal * years * rate / 100;

	var result = document.getElementById("result");
	
	// concatenate result string
	result.innerHTML = "If you deposit <span class=\"highlight\">" + principal + 
	                   "</span>,<br/>at an interest rate of <span class=\"highlight\">" + rate + 
					   "%</span>.<br/>You will receive an amount of <span class=\"highlight\">" + interest + 
					   "</span>,<br/>in the year <span class=\"highlight\">" + getFutureYear(years) + "</span><br/><br/>";


}

// This function returns current year plus param "addYears" value
function getFutureYear(addYears)
{
	return (new Date()).getFullYear() + parseInt(addYears);
}

// This function updates rate's displaying value on rate's input change
function updateRateValue() {
	var rate = document.getElementById("rate").value;
	var rateVal = document.getElementById("rateValue");
	rateVal.innerHTML = rate.toString() + " %";
}
        