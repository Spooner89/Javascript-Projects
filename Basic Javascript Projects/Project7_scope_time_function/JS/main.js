var X = 35;
function Add_numbers_1() {
    document.write(20 + X + "<br>" ); //  EXAMPLE OF A GLOBAL VARIABLE
}
function Add_numbers_2() {
    document.write(X +100 +"<br>");
}
Add_numbers_1 ();
Add_numbers_2 ();

function Add_numbers_3 () {
    var X = 35;
    document.write(222 + X + "<br>"); // EXAMPLE OF A LOCAL VARIABLE 
} 
function Add_numbers_4 () {
    document.write (X + 459 + "<br>");
}
Add_numbers_3 ();
Add_numbers_4 ();

function Add_numbers_5 () {
    var X = 78;
    console.log(558 + X + "<br>"); // EXAMPLE OF AN ERROR USING THE CONSOL LOG METHOD TO DEBUG.
} 
function add_numbers_6 () {
    console.log (X + 106);
}
Add_numbers_5 ();
Add_numbers_6 ();

function get_date () {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";// EXAMPLE OF AN IF STATEMENT
    }
}

function season () {
    if (new Date().getHours() <12){
        document.getElementById("Greeting2").innerHTML = "Good Morning";
    }
 
    if(new Date().getHours() >12){
        document.getElementById("Greeting2").innerHTML = " Good Afternoon"  
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        enter = "You are old enough to enter the club!"; // EXAMPLE OF AN IF AND ELSE STATEMENT
    }
    else {
        enter = "You are not old enough to enter the club!";
    }
    document.getElementById("How_old_are_you?").innerHTML = enter;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time <2 == Time>0) {
        Reply= "It is morning time!";
    }

    else if ( Time >12 == Time <18) {
        Reply = "It is the afternoon.";
    }

    else {
        Reply = "It is the evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}