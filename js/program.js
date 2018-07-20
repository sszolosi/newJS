function changeImage() {
  document.getElementById('image').src = "images/silly.png";
}

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
