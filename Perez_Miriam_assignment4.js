/*
Miriam Perez
January 25, 2012
Deliverable 4
"Library"
*/

//alert("JavaScript works!");

//String

//Does a string follow a 123-456-7890 pattern like a phone number?

var phoneNumber = "123-456-7890";

var end = phoneNumber.indexOf("-");

console.log(phoneNumber.substring (0,end));