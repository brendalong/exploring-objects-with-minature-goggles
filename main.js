console.log("main.js");

const CardMaker = {
  makeFrontMessage: function(string) {
    return `<h2>${string}</h2>`
  },
  makeBackMessage: function(string) {
  	return `<h2>${string}</h2>`
  }
}



const BirthdayCard = Object.create(CardMaker);
BirthdayCard.defaultMessage = function(){
		return `<p>Happy Birthday!!!!!</p>`;
	}

document.getElementById("card1").innerHTML = BirthdayCard.makeFrontMessage("Today is your special day!");
document.getElementById("card1").innerHTML += BirthdayCard.makeBackMessage("And Many More Days to Celebrate");

console.log("BirthdayCard", BirthdayCard);

//Let's try another

const KidBirthdayCard = Object.create(BirthdayCard);
document.getElementById("card1").innerHTML += KidBirthdayCard.defaultMessage();



//Object Starter or 
//The end of All Roads lead to Objects

//The most basic object is a collection of key:value pairs surrounded by curly braces.

let myLunch = {
	fruit: "Apple",
  	meal: "Taco",
  	dessert: "Chocolate",
  	utensils: true
}

//onced defined, add additional property and methods with dot syntax

myLunch.drink = "water";

console.log("My lunch includes", myLunch.fruit, "and", myLunch.meal, "and", myLunch.drink);


///
//===============CONSTRUCTOR=====================//
function cards(name, url, description, price) {
    this.Name = name;
    this.Url = url;
    this.Description = description;
    this.Price = price;
}

//===============Object Constructed=====================//
var cardobject = [];
cardobject.push(new cards("Air We There Yet", "images/mainjar.png", "Lorem1 ipsum doloe inim vecitation ullamco laboris nisi ut aliquip ollit anim id est laborum.", 500));
cardobject.push(new cards("Air-O-Matic", "images/jar2.png", "Lorem2 ipsum dolor sadiam, quis nostr laboris nisi ut aliquip ex ea commodo conseit in vololore eu fugiat nulla pariatborum.", 600));
cardobject.push(new cards("Bad Air Day", "images/jar3.png", "Lorem3 ipsum dolor s, sed dgna ali quis nostrud exercitation ullamco laboris nisi ut aauten voluptate velit esseExcepteur  mollit anim id est laborum.", 700));
cardobject.push(new cards("Air-O-Space", "images/jar4.png", "Lorem4 ipsum dolor o.boris nisi o consequat. Duis aute irure dolor in reprehenderit in vour. Excepteur sint occaecat cupidatat non proimollit anim id est laborum.", 800));
cardobject.push(new cards("Beach Air", "images/jar2.png", "Lorem5 ipsum dolor sitincididunqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  e eu fuupidatalit anim id est laborum.", 1000));
cardobject.push(new cards("Espresso in the Air", "images/jar4.png", "Lorem6 ipsum dolor sitdo e ut labullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reest laborum.", 1100));
cardobject.push(new cards("Margin of Air-r", "images/jar3.png", "Lorem7 ipsum docididunt ut labo ad minim ve commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit eest laborum.", 1200));
cardobject.push(new cards("Share some Air", "images/mainjar.png", "Lorem8 ipsum dolididunal iquarudabohenderit ite velit esse cillum dolore eu fugiat nulla pariatur. Excepteurit ast laborum.", "All the monies"));
//////////////////////////


const Product = {
	setCategory: function(name){
		this.name = name;
	},
	name: "Generic",
	url: "http://google.com",
	description: "Lorem1 ipsum doloe inim vecitation ullamco laboris nisi ut aliquip ollit",
	price: 1.00
}

const AirProduct = Object.create(Product);
AirProduct.setCategory("Jars of Air");
console.log("AirProduct", AirProduct);

let productArray = [];
let product1 = Object.create(AirProduct);

const WaterProduct = Object.create(Product);
let product2 = Object.create(WaterProduct);

console.log("product1.name", product1.name);
productArray.push(product1);
productArray.push(product2);

console.log("productArray", productArray);
console.log("productArray Item", productArray[1].name);

/*
var Widget = {
    init: function(width,height){
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    insert: function($where){
        if (this.$elem) {
            this.$elem.css( {
                width: this.width + "px",
                height: this.height + "px"
            } ).appendTo( $where );
        }
    }
};

var Button = Object.create( Widget );

Button.setup = function(width,height,label){
    // delegated call
    this.init( width, height );
    this.label = label || "Default";

    this.$elem = $( "<button>" ).text( this.label );
};
Button.build = function($where) {
    // delegated call
    this.insert( $where );
    this.$elem.click( this.onClick.bind( this ) );
};
Button.onClick = function(evt) {
    console.log( "Button '" + this.label + "' clicked!" );
};

$( document ).ready( function(){
    var $body = $( document.body );

    var btn1 = Object.create( Button );
    btn1.setup( 125, 30, "Hello" );

    var btn2 = Object.create( Button );
    btn2.setup( 150, 40, "World" );

    btn1.build( $body );
    btn2.build( $body );
} );
*/

