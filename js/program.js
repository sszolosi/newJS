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
