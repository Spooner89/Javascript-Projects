function addition_function () {
    var addition = 20 + 35;
    document.getElementById("math").innerHTML = "20 + 35 =" +addition; // Function to add the number 35 to 20 and gives the answer
}

function subtraction_function () {
    var subtraction = 150 - 35;
    document.getElementById("math_1").innerHTML = "150 - 35 =" +subtraction; //function to subtracts 35 from 150 and gives the answer
}

function multiplication_function () {
    var multiplication = 150 * 35;
    document.getElementById("math_2").innerHTML = "150 * 35 =" +multiplication; //function that multiplys 150 by 35 and give the answer
}

function division () {
    var division = 309 / 6;
    document.getElementById("math_3").innerHTML = "309 / 6 =" +division; //function that divides 6 into 309 and gives the answer 
}

function more_function () {
    var more = (20+35) * 115 / 6 -35;
    document.getElementById("math_4").innerHTML = "(20+35) * 115 / 6 -35 =" +more;//function that does many multiplications in one ( adding 20 and 35 together and the multiplying by 155 deviding that number by 6 and taking away 35 ) and giving the answer 
}


function modulus_Operator () {
    var simple_math = 168 % 9;
    document.getElementById("math_5").innerHTML = "168 divided by 9 you have a remainder of: " +simple_math; // //function that gives the remainder of 9 devided by 168
}

function negative_Operator () {
    var x = 20;
    document.getElementById("math_6").innerHTML = - x; //function that changes the number into a negative 
}

function increment_Operator() {
    var x = 1;
    x++;
    document.write(x);//function that increases X by 1 number 
}

function Decrement_Operator() {
    var X = 10;
    X--;
    document.write(X);//function that decreases X by 1 number 
}

function Random_Number () {
    window.alert(Math.random()*100);//function that gives a random number from 0 to 100
}

function Math_object () { 
    window.alert(Math.sqrt(144));//function that gives the square root of 144 
}