function dropdownmenu() {
    var x = document.getElementById("dropdownclick");
    if (x.className == "topnav") {
        x.className += " responsive";
        //change topnav to topnav.responsive
    } else {
        x.className = "topnav";
    }
}