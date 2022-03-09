function Call_Loop() {
    var Number = "";
    var X = 10;
    while (X > 0) {
        Number += "<br>" + X;
        X--;
    }
    document.getElementById ("Loop").innerHTML = Number;
}

function String_Length() {
    var string = "The world is your oyster.";
    var length = string.length;

    document.getElementById("String").innerHTML = length; // EXAMPLE OF A STRING LOOP.
}


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violine", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
   
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = Content; //  EXAMPLE OF A FOR LOOP.
}

function Array_Function() { 
    var Football_Team = [] ;
    Football_Team[0] = "Manchester City";
    Football_Team[1] = "Chelsea";
    Football_Team[2] = "Manchester United";
    Football_Team[3] = "Arsenal";
    Football_Team[4] = "Liverpool";

    document.getElementById("Array").innerHTML = "The best team in the Premier League are " + Football_Team[2] //Example of an Array function
    
}

function constant_function() {
    const Car_models = {Make:"Ford", Model:"Ranger", Color:"Burnt Orange"}; 
    Car_models.Color = " Black "
    Car_models.Price = " £36000 "
    document.getElementById("Constant").innerHTML = "You have ordered the " + Car_models.Make + " " +Car_models.Model+ " In " +Car_models.Color+ " for " + Car_models.Price; // Example of a constant function 
}

function let_function() {
    var X = 82;
    document.write (X);
    {
    let X = 33;
    document.write("<br>" + X);
    }
document.write("<br>" + X); //This is a let function 
}


function My_Function() {
    return 10 * 26;
}
document.getElementById("Return").innerHTML = My_Function(); // this is a return statment 

let car = {
    Make : "Ford ",
    Model : "Mustang ",
    Year : "2022 ",
    Color : "Black ",
    description : function() {
        return "the car is a " + this.Year + this.Color + this.Make + this.Model; // Creating an Object with properties and a method.
    }
};
document.getElementById ("Car_Object").innerHTML = car.description();

let text_1 = "";
for (let i = 0; i < 10; i++) {
    if (i === 3 ) { break; }
    text_1 += "The number is " + i + "<br>";
}
  document.getElementById("Break").innerHTML = text_1; // This is a break Statment 

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3 ) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = text; // This is a Continue Statment 

