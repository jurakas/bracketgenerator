window.onload = function() {
    var playerLst = localStorage.getItem("playerVal") ? JSON.parse(localStorage.getItem("playerVal")) : [];
    var First = document.getElementById("1");
    var Second = document.getElementById("2");
    var Third = document.getElementById("3");
    var Fourth = document.getElementById("4");
    var Fifth = document.getElementById("5");
    var Sixth = document.getElementById("6");
    var Seventh = document.getElementById("7");
    var Eigth = document.getElementById("8");
    for (var i = 0; i<playerLst.length;i++){
        var Player = playerLst[i];
        if (Player.koht == 1){
            console.log(Player.name);
            First.textContent = Player.name;
        }
        else if (Player.koht == 2){
            Second.textContent = Player.name;
        }
        else if (Player.koht == 3){
            Third.textContent = Player.name;
        }
        else if (Player.koht == 4){
            Fourth.textContent = Player.name;
        }
        else if (Player.koht == 5){
            Fifth.textContent = Player.name;
        }
        else if (Player.koht == 6){
            Sixth.textContent = Player.name;
        }
        else if (Player.koht == 7){
            Seventh.textContent = Player.name;
        }
        else if(Player.koht == 8){
            Eigth.textContent = Player.name;
        }
    }
}