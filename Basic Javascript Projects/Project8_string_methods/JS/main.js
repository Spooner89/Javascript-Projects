function Full_Sentence() {
    var part_1 = "In the end ";
    var part_2 = "we only REGRET ";
    var part_3 = "the CHANCES ";
    var part_4 = "we didnt take.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence; //EXAMPLE OF A CONCAT() METHOD 
    }

    function Slice_Method() {
        var Sentence = "A river cuts through a rock, not because of its power but is PERSISTENCE"
        var Section = Sentence.slice(61,72);
        document.getElementById("Slice").innerHTML = Section; // EXAMPLE OF A SLICE() METHOD.
    }

    function Upper_Case() {
        var Upper_Sentence = "the key to sucsess is to focus on goals, not obstacles"
        var Upper_Case = Upper_Sentence.toUpperCase();
        document.getElementById("Upper").innerHTML = Upper_Case; //// EXAMPLE OF A toUpperCase()Method.
    }

    function Search_Method() {
        var Sentence ="All you need is the plan, the road map, and the courage to press on to your destination."
        var Search = Sentence.search("courage")
        document.getElementById ("Search").innerHTML = Search; // EXAMPLE OF THE search() Method.
    }

    function String_Method() {
        var x = 180;
        document.getElementById("Numbers_to_String").innerHTML = x.toString(); // EXAMPLE OF THE toString() Method.
    }

    function Precision_Method() {
        var x = 1583927.7920439297;
        document.getElementById ("Precision").innerHTML = x.toPrecision(8); // EXAMPLE OF THE toPrecision() Method
    }

    function Fixed_Method() {
        var X = 1.6879;
        document.getElementById("Fixed").innerHTML = X.toFixed(); // EXAMPLE OF THE toFixed() Method
       
    }

    function Value_Method() {
        var X = "Value Method!";
        document.getElementById("Value").innerHTML = X.valueOf(); // EXAMPLE OF THE valueOf() Method.

    }