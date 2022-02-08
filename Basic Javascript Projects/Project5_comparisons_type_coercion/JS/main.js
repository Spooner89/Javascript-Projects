function my_Function () {
    document.getElementById("Challenge_6").innerHTML = 0/0; // 1st example of a inNaN
}

function my_Function1 () {
    document.getElementById("Test1").innerHTML = isNaN('This is a string') // 2nd example of a isNaN

}

function my_Function2 () {
    document.getElementById("Test2").innerHTML = isNaN('007'); // 3rd example of an isNaN

}

function my_Function3 () {
    document.write (2E310) // function showing a infinate number
}

function my_Function4 () {
    document.write (-3E310) // function showing a -infinate number 
}

function my_Function5 () {
    document.write (20>2); // function showing the boolean Logic (true)

}

function my_Function6 () {
    document.write (20<2);// function showing the boolean logic (false)

}

function my_Function7 () {
    console.log (6+6); // function that only shows in the consol log     
}

function my_Function8 () {
    document.write ("10" +5); // This is an example of a Type Coercion

}

function my_Function9 () {
    console.log(20<5) // function using the boolean logic in the consol log
}

function my_Function10 () {
   document.write (10==10); //function using the double = method shwing a true outcome
}

function my_Function11 () {
    document.write (10==3); //function using the double = method shwing a false outcome
}

function my_Function12 () {
    x = "Blue";
    y = "Blue";
    document.write (x===y); // function using the tripple = method showing a true outcome
}

function my_Function13 () {
    x = 10;
    y = "One hundred";
    document.write (x===y);// function using the tripple = method showing a false outcome
}


function my_Function14 () {
    x = 10;
    y = "Ten";
    document.write (x===y);// function using the tripple = method showing a false outcome
}


function my_Function15 () {
    x = "Blue";
    y = "Green";
    document.write (x===y);// function using the tripple = method showing a false outcome
}


function my_Function16 () {
    document.write (100 > 10 && 30 > 20);// function showing the AND method with a true outcome

}
function my_Function17 () {
    document.write (100 < 10 && 30 < 20 );// function showing the AND method with a true false

}
function my_Function18 () {
    document.write (5 > 10 || 10 > 4);// function showing the OR method with a true outcome

} 
function my_Function19 () {
    document.write (100 < 50|| 40 > 100);// function showing the OR method with a False outcome

}

function not_Function () {
    document.getElementById ("Not").innerHTML= !(5>10) // function showing the NOT method with a true outcome
}

function not_Function2 () {
    document.getElementById ("Not1").innerHTML = !(10>5) // function showing the NOT method with a false outcome
}