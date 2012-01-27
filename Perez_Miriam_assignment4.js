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

//Does a string follow an aaa@bbb.ccc pattern like an email address?

function emailAddress () {
	var email = "myusername@myemail.com"
	
if (email !== "aaa@bbb.ccc") {

	console.log("My email address is " + email + ".");

} else {

	console.log("I'm sorry, but I do not have an email address");
	}
};
emailAddress();

//Is the string a URL? (Does it start with http: or https:?)

function url () {
	var protocol = "http";
	var secureProtocol = "https"
	
if (protocol === "http") {

	console.log("Fullsail's website starts with " + protocol + ".");
	
	if (secureProtocol === "https") {
	
		console.log("Many secure websites start with " + secureProtocol + ".");

	} else {

	console.log("All websites start with " + protocol + ".");
	};
	
} else {
	
	console.log("All websites start with " + secureProtocol + ".");
	}
};
url();

//Title-case a string (split into words, then uppercase the first letter of each word)

function titleCaseString () {
	var myString = "i enjoy solving problems"

console.log(myString.slice(0,1));
console.log(myString.slice(2,7));
console.log(myString.slice(8,15));
console.log(myString.slice(16,24));
console.log("I E" + myString.substring (3,8) + "S" + myString.substring (9,16) + "P" + myString.substring (18,24) + ".");
	
};
titleCaseString();

//Given a string that is a list of things separated by a given string, as well as another string separator, 
//return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

function separatedStrings () {
	var givenString = "fruits, candy, drinks";
	var separatorToReplace = /,/g;
	var newSeparator = givenString.replace(separatorToReplace, "/");
	
console.log(givenString + "," + " /" + newSeparator);

};
separatedStrings();

//Number

//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

function decimalPlaces () {
	var money = 2.1

console.log("I have $" + money.toFixed(2) + ".");

};
decimalPlaces();

//Fuzzy-match a number: is the number above or below a number within a certain percent?

function fuzzyMath () {
	var myNumber = 100;
	var numAbove = 100*1.5;
	var numBelow = 100/2

console.log("50% above " + myNumber + " is " + numAbove + " and 50% below " + myNumber + " is " + numBelow + ".");

};
fuzzyMath();

//Find the number of hours or days difference between two dates.

function dayDifference () {
	var mins = 1000*60;
    var hours = mins*60;
    var days = hours*24;
	var firstDate = new Date ("12/01/2000");
	var secondDate = new Date ("01/27/2012");
	var difference = Math.round((secondDate - firstDate)/days)

console.log("The number of days difference between " + firstDate + " and " + secondDate + " is " + difference + ".");

};
dayDifference();