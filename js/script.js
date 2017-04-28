var a = 0;
var b= 0;
alert("Witaj policzymy sobie coś ok ?")
a = prompt("podaj wartosc a")
b = prompt("podaj wartost b")
var value = (a * a) + (2 * a * b) - (b * b);
console.log(value);
if(value>0) {
	console.log("Wynik jest dodatni");
	alert("Wynik jest dodatni");
}
if (value<0){
	console.log("Wynik jest ujemny");
	alert("Wynik jest ujemny");
}
if (value==0) {
	console.log ("Wynikiem jest zero");
	alert("Wynikiem jest zero");
}