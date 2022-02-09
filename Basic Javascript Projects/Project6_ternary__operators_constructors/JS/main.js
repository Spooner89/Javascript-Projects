function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}

function Age_Function () {
    var Age, Old;
    Age = document.getElementById("Tall").value;
    Old = (Age < 18) ? "You're not old enough ":"You're old enough ";
    document.getElementById("Result").innerHTML = Old + "to enter" // example of Ternary Operators.
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
    }

    var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
    var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
    var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
    function myFunction () {
        document.getElementById("Keywords_and_Constructors").innerHTML = 
        "Erik drives a " + Erik.Vehicle_Color + " -colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
    }

    function myFunction1 () {
        document.getElementById("New_and_This").innerHTML = 
        "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " Manufactured in " + Jack.Vehicle_Year;
    }


    function Dog (Breed, Color, Speed, Lifespan) {
        this.Dog_Breed = Breed;
        this.Dog_Color = Color;
        this.Dog_Speed = Speed;
        this.Dog_Lifespan = Lifespan; // Example of construction function. 
    }

    var Sam = new Dog ("German Shepherd", "Black", 30, "13 Years");
    var Paul = new Dog ("Rottweiler", "Black and Brown", 25, "10 Years");
    var Liv = new Dog ("staffordshire bull terrier", "White with Black spots" , 31, "14 Years.");
    function myFunction2 () {
        document.getElementById("Dogs").innerHTML =
        "Sam has a " + Sam.Dog_Color + " " + Sam.Dog_Breed + " at top speed he can run " + Sam.Dog_Speed + " mph and will live for " + Sam.Dog_Lifespan + "."; //Funtion to run my keywords in HTML. 
    }

    function count_Function () {
        document.getElementById("Nested_Function").innerHTML = Count ();
        function Count () {
            var Starting_point = 599;
            function Plus_one () {Starting_point += 487;}   // Example of a nested function. 
            Plus_one ();
            return Starting_point ; 
     }
    }