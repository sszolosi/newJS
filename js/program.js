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

function afiseazaNoLoop(x) {
  console.log(x);
  console.log(typeof x);
  document.write((x) + "-");
  if (x != 0) {
    afiseazaNoLoop(x - 1);
  } else {
    return x;
  }
};
afiseazaNoLoop(10);
document.write("<br>");

//--------------------------------022-------------------------------------

var i;
var x;

function fizzBuzz(x) {
  for (i = 1; i <= x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      document.write("FizzBuzz");
      document.write("<br>");
    } else if (i % 3 === 0) {
      document.write("Fizz");
      document.write("<br>");
    } else if (i % 5 === 0) {
      document.write("Buzz");
      document.write("<br>");
    } else {
      document.write(i);
      document.write("<br>");
    }
  }
};
fizzBuzz(100);
document.write("<br>");
//--------------------------------023-------------------------------------

var a = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]]]];

for (i = 0; i < a.length; i++) {
  if (!a[i].length) {
    document.write(a[i] + '<br/>');
  } else {
    console.log('aaaa', a[i]);
    for (j = 0; j < a[i].length; j++) {

      if (!a[i][j].length) {
        document.write('****' + a[i][j] + '<br/>');
      } else {
        for (k = 0; k < a[i][j].length; k++) {
          if (!Array.isArray(a[i][j][k])) {
            document.write('********' + a[i][j][k] + '<br/>');
          } else {
            for (l = 0; l < a[i][j][k].length; l++) {
              if (!Array.isArray(a[i][j][k][l])) {
                document.write('************' + a[i][j][k][l] + '<br/>');
              } else {
                for (z = 0; z < a[i][j][k][l].length; z++) {
                  document.write('****************' + a[i][j][k][l][z] + '<br/>');
                }
              }
            }
          }
        }
      }
    }
  }
}


var a = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4, ]]]];

a.forEach(function(item, index, array) {
  if (!Array.isArray(item)) {
    document.write(item + '<br/>');
  } else {
    item.forEach(function(itemB) {
      if (!Array.isArray(itemB)) {
        document.write('****' + itemB + '<br/>');
      } else {
        itemB.forEach(function(itemC) {
          if (!Array.isArray(itemC)) {
            document.write('********' + itemC + '<br/>');
          } else {
            itemC.forEach(function(itemD) {
              if (!Array.isArray(itemD)) {
                document.write('************' + itemD + '<br/>');
              }
            });
          }
        });
      }
    });
  }
});

//--------------------------------024-------------------------------------
let str = '12341234 56781234 91231234 45672222 12341234 56781234 91231234 45672222';


let newArray = str.replace(/\n/g, " ").split(" ");
console.log(newArray);
console.log(typeof newArray);
document.write(newArray + "<br/><br/>");




//--------------------------------025-------------------------------------

function removeElement() {
  var parent = document.getElementById("remove");
  var child = document.getElementById("p1");
  parent.removeChild(child);
};


function replaceLinks() {

  document.getElementById("change-link1").href = "http://www.github.com";
  document.getElementById("change-link2").href = "http://wwww.developer.mozilla.org";
};

//--------------------------------026-------------------------------------

myArr = [1, 2, 7, 5, 10, 20, 15, 6, 4, 3, 0];

myArr.sort();
document.write(myArr + "  - NU E OK!!!!" + "<br/><br/>");

myArr = [1, 2, 7, 5, 10, 20, 15, 6, 4, 3, 0];
myArr.sort(
  function(a, b) {
    return a - b;
  });
document.write("Ordine crescatoare: " + myArr + "<br/><br/>");

myArr = [1, 2, 7, 5, 10, 20, 15, 6, 4, 3, 0];
myArr.sort(
  function(a, b) {
    return b - a;
  });
document.write("Ordine descrescatoare: " + myArr + "<br/><br/>");

//--------------------------------027-------------------------------------

let myObj = {
  "preNume": "Alexandru",
  "ocupatie": "programator junior",
  "companie": "Fortech S.R.L."
};

document.getElementById("prenume").innerHTML = `<strong style="font-size:18px";><p>Prenume: </strong> ${myObj.preNume}</p>`;
document.getElementById("ocupatie").innerHTML = `<strong style="font-size:18px";><p>Ocupatie: </strong>${myObj.ocupatie}</p>`;
document.getElementById("companie").innerHTML = `<strong style="font-size:18px";><p>Companie: </strong>${myObj.companie}</p>`;
