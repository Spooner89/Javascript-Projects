function my_Dictionary () {
    var football_team = {
        Name: "Manchester United",
        league: "Premier League",
        kit_color: "Red and White",
        position: "4th",
        song: "Glory Glory Man United",// A group of KVP's listed 
    } ;
    delete football_team.position; // deletes KVP position before it is displayed on the HTML
    document.getElementById("Dictionary").innerHTML = football_team.position
}

function my_Dictionary1 () {
    var football_team = {
        Name: "Chelsea",
        league: "Premier League",
        kit_color: "Blue and White",
        position: "3rd",
        position: "20th",
        song: "blue is the color", //a set of KVP's showing a multiple for position giving me an outcome of the last entry of the two in the html.
    } ;
    document.getElementById("Dictionary1").innerHTML = football_team.position
}