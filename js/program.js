//-----------------------------012--------------------------------
function changeImage() {
  document.getElementById('image').src = "images/silly.png";
};


//-----------------------------013--------------------------------



//numeric
var a = 5,
  b = 5,
  sum = a + b;
console.log("Suma a+b=", sum + ". Variable type:" + typeof sum);

//string
var animal1 = "lion";
var animal2 = "tiger";
console.log("Why the " + animal1 + ", not the " + animal2 + ", is king of the jungle?" + " Variable type:" + typeof animal1);

//boolean
var a = 10,
  b = 5,
  sum = (a + b) > a;
console.log(sum + ". Variable type:" + typeof sum);

//null
var emptySomething = null;
console.log("Variable type: " + typeof emptySomething);

//undefined
var justSomeVariable;
console.log("Variable type: " + typeof justSomeVariable);

//????? symbol ?????
//---------------------

//arrays
var pens = ["green", "red", "blue", "yellow", "orange"]
console.log(pens[4] + ". Variable type:" + typeof pens);
console.log(pens);

//objects
var televizor = {
  brand: "Samsung",
  model: "UE49MU6202",
  anFabricatie: 2018,
  tipTv: "Smart",
  tehnologie: "HDR 4K"
};
console.log(televizor.brand, televizor.tipTv, televizor.tehnologie);

//-----------------------------------------------------------------------------------

var televizor = function(brand, model, tipTv, tehnologie) {
  this.brand = brand;
  this.model = model;
  this.tipTv = tipTv;
  this.tehnologie = tehnologie;
};
samsung = new televizor('Samsung', 'UE49MU6202', 'Smart', '3D');
console.log(samsung);


//--------------------------------014-------------------------------------

//functie care nu intoarce nimic
function nothingToReturn() {};
console.log(nothingToReturn());

//functie care intoarce true
var a = 100;
var b = 20;

function thisTrue() {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

console.log(thisTrue());

//functie care ia 1 variabila si o intoarce
var name = "Zumzum";

function returnOneVariable() {
  return "Hello " + name + "!"
};
console.log(returnOneVariable());

//functie care ia 2 variabile a si b si le intoarce suma
a = 12;
b = 10;

function sumVariables() {
  var c = a + b;
  return c;
};
console.log(sumVariables());

//functie care ia 2 variabile a si b si le intoarce ca si string impreuna
nume = "Popescu";
varsta = "32"

function stringVariable() {
  var persoana = "Nume:" + nume + ". Varsta:" + varsta + " ani";
  return persoana;
};
console.log(stringVariable() + ". Variable type:" + typeof stringVariable());

//functie care ia 1 variabila si intoarce tipul ei
a = "matematica"
b = 10

function examen() {
  return a;
};
console.log(examen() + ". Variable type:" + typeof examen());

//functie care ia 1 variabila si intoarce toate numerele de la 0 la acea variabila
var a = 10;
var numbers = [];
var i;

function returnNumbers() {
  for (i = 0; i < a; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(returnNumbers());


//--------------------------------015-------------------------------------

var a = 1;
var b = 2;
var c = true;
console.log("Returneaza " + (a = b) + ", a ia valoarea lui b. Invers, b=a ar returna 1; in cazul asta b ar lua valoarea lui a!");

var a = 1;
var b = 2;
var c = true;
console.log("Returneaza " + (a == b) + ", deoarece verifica egalitatea ca valoare, daca b=1 ar returna true, cele doua valori fiind egale")

var a = 1;
var b = 2;
var c = true;

console.log("Returneaza " + (a === b) + ", deoarece verifica in acelasi timp atat egalitatea ca si valoare si ca tip de date.");

var a = 1;
var b = 2;
var c = true;
console.log("Returneaza " + (a == c) + ", deoarece in javascript tipurile boolean(true and false) au si valori numerice, mai exact true=1, false=0");

var a = 1;
var b = 2;
var c = true;
console.log("Returneaza " + (a === c) + ", deoarece sunt doua tipuri diferite de date, numeric si boolean");

var a = 1;
var b = 2;
var c = true;
console.log("Returneaza " + (a > b) + ", deoarece a este mai mic ca b");

var a = 1;
var b = 2;
var c = true;
console.log("Returneaza " + (a < b) + ", deoarece a este mai mic ca b");

var a = 1;
var b = 2;
var c = true;
console.log("Returneaza " + (a >= b) + ", deoarece a este mai mic ca b si a nu este nici egal cu b");


//--------------------------------016-------------------------------------

function unParametru(x) {
  if (x < 10) {
    return "Numar mic";
  } else if (x > 10) {
    return "Numar mare";
  } else {
    return "Parametrul nu este nu numar";
  }
};
console.log(unParametru(99));
console.log(unParametru(5));
console.log(unParametru("text"));

//--------------------------------017-------------------------------------
var a = 3601;
var i = 0;
number = [];
for (i; i <= a; i++) {
  number.push(i);
};
document.write(number);
document.write("<br>");

//--------------------------------018-------------------------------------

//for loop

var a = 10;
var i = 1;
number = [];
for (i; i <= a; i++) {
  number.push(i);
};
document.write(number.join("-") + " : for loop");
document.write("<br>");

//while loop

var a = 10;
var i = 1;
number = [];

while (i <= a) {
  number.push(i);
  i++;
};
document.write(number.join("-") + " : while loop");
document.write("<br>");

// do while loop

var a = 10;
var i = 1;
number = [];

do {
  number.push(i);
  i++;
}
while (i <= a);

document.write(number.join("-") + " : do while loop");
document.write("<br>");

//--------------------------------019-------------------------------------

var a = 10;
var i = 1;
numere = [];

function afiseaza() {
  for (i; i <= a; i++) {
    numere.push(i);
  }
  return numere;

};
document.write(afiseaza().join("."));
document.write("<br>");

//--------------------------------020-------------------------------------

var a;
var b;
var minmax = [];

function afiseazaMinMax(a, b) {
  for (a; a <= b; a++) {
    minmax.push(a);
  }
  return minmax;
};

document.write(afiseazaMinMax(9, 99).join("."));
document.write("<br>");

//--------------------------------021-------------------------------------

function afiseazaNoLoop(x){
  console.log(x);
  console.log(typeof x);
  document.write((x)+"-");
  if(x!=0) {
      afiseazaNoLoop(x-1);
  }
  else{
    return x;
  }
};
afiseazaNoLoop(10);
