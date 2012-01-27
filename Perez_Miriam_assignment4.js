/*
Miriam Perez
January 25, 2012
Deliverable 4
"Library"
*/

//alert("JavaScript works!");

//String

//Does a string follow a 123-456-7890 pattern like a phone number?

function phoneNumber () {
	var phNumber = "123-456-7890";
	var end = phNumber.length
	
console.log("My phone number is, area code first " + phNumber.substring (0,end) + ".");

};
phoneNumber();