console.log("light.js");

//iife pattern with es6 objects

{
	Lightside = {};

	area = "Planet Isle";
	Lightside.getarea = function (whoAsks){
		if (whoAsks != "Darth Vador"){
			return area;
		}
	}

	parent.StarWars = parent.StarWars || {};
	parent.StarWars.Lightside = Lightside;
}






{
	Darkside = {};
	Darkside.area = "Death Star";

	parent.StarWars = parent.StarWars || {};
	parent.StarWars.Darkside = Darkside;

}



console.log("lightsideLocation", StarWars.Lightside.getarea("yoda"));
console.log("Darkside", StarWars.Darkside.area);