var playerLst = [];
var vooru_nr = 1;
var historyArr = [];
var round = 1;

function createTable() {
    var a, b, tableElem, rowElem, colElem;
    var nameValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [];

    //a = document.getElementById('tb1').value;
    //b = document.getElementById('tb2').value;
    a = nameValues.length+1;
    b = 12;

    if (a == "" || b == "") {
        alert("Please enter some numeric value");
    } else {
        tableElem = document.createElement('table');
        var countRIDA = 0;

        for (var i = 0; i < a; i++) {
            rowElem = document.createElement('tr');
            rowElem.className = "rida_"+i;

            for (var j = 0; j < b; j++) {
                colElem = document.createElement('td');
                colElem.className = "elem_"+j;
                //colElem.appendChild(document.createTextNode(j + 1));
                if (i >0 && j>=1 && j<=7){ //here happens the editable change
                    colElem.setAttribute("contentEditable",true);
                    colElem.className += " editableCELL"+countRIDA;
                }
                rowElem.appendChild(colElem);
            }

            tableElem.appendChild(rowElem);
            countRIDA += 1;
        }

        document.getElementById("tabel").appendChild(tableElem);


    }
}



function createTableTwo() {
    var a, b, tableElem, rowElem, colElem;
    var nameValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [];

    //a = document.getElementById('tb1').value;
    //b = document.getElementById('tb2').value;
    a = nameValues.length/2 +1;
    b = 2;

    if (a == "" || b == "") {
        alert("Please enter some numeric value");
    } else {
        tableElem = document.createElement('table');
        tableElem.id = "gamestable";
        var countRIDA = 0;

        for (var i = 0; i < a; i++) {
            rowElem = document.createElement('tr');
            rowElem.className = "2_rida_"+i;

            for (var j = 0; j < b; j++) {
                colElem = document.createElement('td');
                colElem.className = "2_elem_"+j;
                colElem.className += " boxboy_"+j;
                //colElem.appendChild(document.createTextNode(j + 1));
                if (i >0 && j==1){ //here happens the editable change
                    colElem.setAttribute("contentEditable",true);
                    colElem.className += " editableCELL"+countRIDA;
                }
                rowElem.appendChild(colElem);
            }

            tableElem.appendChild(rowElem);
            //tableElem.className += " col-xs-6";
            tableElem.className += " tableSTIIL";
            countRIDA += 1;
        }

        document.getElementById("voorutabel").appendChild(tableElem);
        

    }
}

function createTableThree() {
    var a, b, tableElem, rowElem, colElem;
    var nameValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [];

    //a = document.getElementById('tb1').value;
    //b = document.getElementById('tb2').value;
    a = nameValues.length/2 +1;
    b = 2;

    if (a == "" || b == "") {
        alert("Please enter some numeric value");
    } else {
        tableElem = document.createElement('table');
        tableElem.id = "historytable";
        var countRIDA = 0;

        for (var i = 0; i < a; i++) {
            rowElem = document.createElement('tr');
            rowElem.className = "2_rida_"+i;

            for (var j = 0; j < b; j++) {
                colElem = document.createElement('td');
                colElem.className = "3_elem_"+j;
                colElem.className += " boxboy2_"+j;
                //colElem.appendChild(document.createTextNode(j + 1));
                rowElem.appendChild(colElem);
            }

            tableElem.appendChild(rowElem);
            countRIDA += 1;
        }

        document.getElementById("voorutabel").appendChild(tableElem);
        

    }
}

function removeTableTWO(){
    var lastDiv = document.getElementById("gamestable");
    lastDiv.parentNode.removeChild(lastDiv);
}

/*$(document).ready(function() {
    createTable();
});*/


window.onload = function() {
       createTable();
       createTableTwo();
       //createTableThree();
       var myValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [],
       divElements = document.getElementsByClassName("elem_0");
       var checkBoxes = localStorage.getItem("checkboxes") ? JSON.parse(localStorage.getItem("checkboxes")) : [];
       for(var i=1; i < myValues.length+1; i++) {
           divElements[i].textContent = myValues[i-1];
       }
       for(var i = 0; i<myValues.length;i++){
           var Player = new Object();
           var name = myValues[i];
           Player["name"] = name;
           Player["voor_1"] = "";
           Player["voor_2"] = 0;
           Player["voor_3"] = 0;
           Player["voor_4"] = 0;
           Player["voor_5"] = 0;
           Player["voor_6"] = 0;
           Player["voor_7"] = 0;
           Player["punkte"] = 0;
           Player["koef"] = 0;
           Player["suhe"] = "0:0";
           Player["koht"] = i+1;
           Player["playedNames"] = [];
           Player["canPlay"] = [];
           playerLst.push(Player);
       }
       updatePlayerBack(1);
       createCONTENT();
       playervsplayer();
   }

function writeHistory(){
    var historytabel = document.getElementById("historydiv");
    historytabel.textContent = "";
    for (var i = 0; i<historyArr.length;i++){
        //iga erineva tabeli sisu historyarris
        var tabel = historyArr[i];
        for (var j = 1; j<tabel.length;j++){
            //siin on kaks arrayd veel sees res & nam
                //esimene res teine nam
            for (var x = 0; x<tabel[j].length;x++){
                historytabel.textContent += " Mängijad: "+tabel[0][x]+" ja suhe: "+tabel[1][x];
            }

            
        }
    }
}


function updatePlayerBack(vooru_nr){
    //loadib punktid, koef, suhte ja koha
       var nameField = document.getElementsByClassName("elem_0");
       var vooruField = document.getElementsByClassName("elem_"+vooru_nr);
       var punktiField = document.getElementsByClassName("elem_8");
       var koefField = document.getElementsByClassName("elem_9");
       var suhteField = document.getElementsByClassName("elem_10");
       var kohaField = document.getElementsByClassName("elem_11");
       for (var i = 1; i<playerLst.length+1;i++){
           var Player = playerLst[i-1];
           nameField[i].textContent = Player.name;
           punktiField[i].textContent = Player.punkte;
           vooruField[i].textContent = valiVoor(Player,vooru_nr);
           koefField[i].textContent = Player.koef;
           suhteField[i].textContent = Player.suhe;
           kohaField[i].textContent = Player.koht;
       }
}

function playervsplayer(){
    //Järjestamisega tegeleb teine funktsioon, sellele antakse juba re-ordered list!!!!
    //Hiljem on taas vaja ümber sättida nii nagu on esimene list, sest uued andmed on sees.
    var arrayForCalc = reastaArray();
    var res = "";
    var nameFields = document.getElementsByClassName("2_elem_0");
    var resFields = document.getElementsByClassName("2_elem_1");
    var hasEmpt = false;
    for (var i = 1;i<resFields.length;i++){
        if (resFields[i] == ""){
            hasEmpt = true;
        }
    }
    var counter = 1;
    var namArr = [];
    var resArr = [];
    //var mover = 1;
    for (var i = 1; i<arrayForCalc.length;i = i+2){
        mover = 1;
        Player_one = arrayForCalc[i-1];
        Player_two = arrayForCalc[i];
        res = Player_one.name + " vs " + Player_two.name;
        if (hasEmpt != true){
            Player_one.playedNames.push(Player_two.name);
            Player_two.playedNames.push(Player_one.name);
        }
        nameFields[counter].textContent = res;
        counter = counter + 1;
        namArr.push(res);
    }
    
    for (var i = 0; i<3;i++){
        var cont_2 = document.getElementsByClassName("2_elem_"+i);
            if (i == 0){
                cont_2[0].textContent = "Mäng";
            }
            if (i == 1){
                cont_2[0].textContent = "RES";
            }
        
    }
    playerLst = arrayForCalc;
}

function createCONTENT(){
    for (var i = 0; i<12;i++){
        var cont = document.getElementsByClassName("elem_"+i);
        if (i == 0){
            cont[0].textContent = "Nimi";
        }
        if (i >= 1 && i<=7){
            cont[0].textContent = "VOOR "+i;
        }
        if (i == 8){
            cont[0].textContent = "Punkte";
        }
        if (i == 9){
            cont[0].textContent = "Koef";
        }
        if (i == 10){
            cont[0].textContent = "Suhe";
        }
        if (i == 11){
            cont[0].textContent = "Koht";
        }
    }
    for (var i = 0; i<3;i++){
        var cont_2 = document.getElementsByClassName("2_elem_"+i);
            if (i == 0){
                cont_2[0].textContent = "Mäng";
            }
            if (i == 1){
                cont_2[0].textContent = "RES";
            }
        
    }
}

function valiVoor(player, r){
    if (r == 1){
        return player.voor_1;
    }
    else if (r == 2){
        return player.voor_2;
    }
    else if (r == 3){
        return player.voor_3;
    }
    else if (r == 4){
        return player.voor_4;
    }
    else if (r == 5){
        return player.voor_5;
    }
    else if (r == 6){
        return player.voor_6;
    }
    else if (r == 7){
        return player.voor_7;
    }
}

function calculatePoints(voor){
    //var firstCol = document.getElementsByClassName("elem_"+vooru_nr);
    //siin paneme playerlst = playercombosiga.
    var firstCol = document.getElementsByClassName("2_elem_1");
    var neimCol = document.getElementsByClassName("2_elem_0");
    var taidetud = true;
    var allEmpty = false;
    var taidCounter = 0;
    for (var o = 0;o<firstCol.length;o++){
        if (firstCol[o].textContent == ""){
            taidCounter += 1;
            if (taidCounter == o){
                if (taidCounter == firstCol.length-1){
                    allEmpty = true;
                }
            }
            else{
            taidetud = false;
            alert("Jätsid midagi sisestamata või sisestasid valel kujul: 'number:number'");
            break;
            }
        }
        
    }
    if (allEmpty == true){
        var vooruCol = document.getElementsByClassName("elem_"+round);
        var summa = 0;
        var valjue = "";
        var res = [];
        var win = true;
        var countija = 1;
        var arr = [];
        var namArr = [];
        var resArr = [];
        for (var i = 0; i<playerLst.length;i+=1){
            valjue = (vooruCol[countija].textContent).trim();
            res = valjue.split(":");
            esimene = parseInt(res[0]);
            teine = parseInt(res[1]);
            vastupidi = teine+":"+esimene;
            tehe = esimene-teine;
            Player = playerLst[i];
            playervoor = valiVoor(Player,vooru_nr);
            if (tehe > 0){ //esimene võitis
                win = true;
                playervoor = vooruCol[countija].textContent;
                Player.punkte += 2;
                suhte_playerist = Player.suhe;
                suhe_arr = suhte_playerist.split(":");
                suhe_one = parseInt(suhe_arr[0]);
                suhe_two = parseInt(suhe_arr[1]);
                suhe_one = suhe_one + esimene;
                suhe_two = suhe_two + teine;
                suhte_string = suhe_one + ":" + suhe_two;
                Player.suhe = suhte_string;
            }
            else if (tehe == 0){
                playervoor = vooruCol[countija].textContent;
                win = false;
                Player.punkte += 0;
            }
            else if (tehe < 0){
                win = false;
                playervoor = vooruCol[countija].textContent;
                Player.punkte += 1;
                suhte_playerist = Player.suhe;
                suhe_arr = suhte_playerist.split(":");
                suhe_one = parseInt(suhe_arr[0]);
                suhe_two = parseInt(suhe_arr[1]);
                suhe_one = suhe_one + esimene;
                suhe_two = suhe_two + teine;
                suhte_string = suhe_one + ":" + suhe_two;
                Player.suhe = suhte_string;
            }
            countija += 1;
        }
        calculateKoef();
        playerLst = (playerLst.sort(suuremKuiTeine)).reverse();
        for (var i = 0; i<playerLst.length;i++){
            playerLst[i].koht = i+1;
        }
        updatePlayerBack(round);
        round += 1;
        vooru_nr += 1;
    }
    else if (taidetud == true){
    var summa = 0;
    var valjue = "";
    var res = [];
    var win = true;
    var countija = 1;
    var arr = [];
    var namArr = [];
    var resArr = [];
    for (var i = 1; i<playerLst.length;i=i+2){
        valjue = (firstCol[countija].textContent).trim();
        namArr.push(neimCol[countija].textContent);
        resArr.push(firstCol[countija].textContent);
        res = valjue.split(":");
        esimene = parseInt(res[0]);
        teine = parseInt(res[1]);
        vastupidi = teine+":"+esimene;
        tehe = esimene-teine;
        Player = playerLst[i-1];
        Player_two = playerLst[i];
        if (tehe > 0){ //esimene võitis
            win = true;
            Player.voor_1 = firstCol[countija].textContent;
            Player.punkte += 2;
            suhte_playerist = Player.suhe;
            suhe_arr = suhte_playerist.split(":");
            suhe_one = parseInt(suhe_arr[0]);
            suhe_two = parseInt(suhe_arr[1]);
            suhe_one = suhe_one + esimene;
            suhe_two = suhe_two + teine;
            suhte_string = suhe_one + ":" + suhe_two;
            Player.suhe = suhte_string;
            
            Player_two.voor_1 = vastupidi;
            Player_two.punkte += 1;
            suhte_playerist = Player_two.suhe;
            suhe_arr = suhte_playerist.split(":");
            suhe_one = parseInt(suhe_arr[0]);
            suhe_two = parseInt(suhe_arr[1]);
            suhe_one = suhe_one + teine;
            suhe_two = suhe_two + esimene;
            suhte_string = suhe_one + ":" + suhe_two;
            Player_two.suhe = suhte_string;
        }
        else if (tehe == 0){
            Player.voor_1 = firstCol[countija].textContent;
            Player_two.voor_1 = vastupidi;
            win = false;
            Player.punkte += 0;
        }
        else if (tehe < 0){
            win = false;
            Player_two.voor_1 = vastupidi;
            Player_two.punkte += 2;
            suhte_playerist = Player_two.suhe;
            suhe_arr = suhte_playerist.split(":");
            suhe_one = parseInt(suhe_arr[0]);
            suhe_two = parseInt(suhe_arr[1]);
            suhe_one = suhe_one + teine;
            suhe_two = suhe_two + esimene;
            suhte_string = suhe_one + ":" + suhe_two;
            Player_two.suhe = suhte_string;
            
            Player.voor_1 = firstCol[countija].textContent;
            Player.punkte += 1;
            suhte_playerist = Player.suhe;
            suhe_arr = suhte_playerist.split(":");
            suhe_one = parseInt(suhe_arr[0]);
            suhe_two = parseInt(suhe_arr[1]);
            suhe_one = suhe_one + esimene;
            suhe_two = suhe_two + teine;
            suhte_string = suhe_one + ":" + suhe_two;
            Player.suhe = suhte_string;
        }
        /*if (tehe > 0 || tehe <= 0){
            suhte_playerist = Player.suhe;
            suhe_arr = suhte_playerist.split(":");
            suhe_one = parseInt(suhe_arr[0]);
            suhe_two = parseInt(suhe_arr[1]);
            suhe_one = suhe_one + esimene;
            suhe_two = suhe_two + teine;
            suhte_string = suhe_one + ":" + suhe_two;
            Player.suhe = suhte_string;
        }*/
        countija += 1;
    }
    calculateKoef();
    playerLst = (playerLst.sort(suuremKuiTeine)).reverse();
    for (var i = 0; i<playerLst.length;i++){
        playerLst[i].koht = i+1;
    }
    round += 1;
    updatePlayerBack(vooru_nr);
    vooru_nr += 1;
    removeTableTWO();
    createTableTwo();
    playervsplayer();
    arr.push(namArr);
    arr.push(resArr);
    historyArr.push(arr);
    writeHistory();
    }
}

function calculateKoef(){
    for (var i = 0; i<playerLst.length;i++){
        Player = playerLst[i];
        nameArr = Player.playedNames;
        if (nameArr.length != 0){
            for (var j = 0; j<nameArr.length;j++){
                name = nameArr[j];
                for (var y = 0; y<playerLst.length;y++){
                    if (name == playerLst[y].name){
                        Player_in_arr = playerLst[y];
                        break;
                    }
                }
                Player.koef += Player_in_arr.punkte;
        }
        }
    }
}

function suuremKuiTeine(player1,player2){
    if (player1.punkte > player2.punkte){
        return 1;
    }
    else if (player2.punkte > player1.punkte){
        return -1;
    }
    else if(player2.punkte == player1.punkte){ //scores are equal
        if (player1.koef > player2.koef){
            return 1;
        }
        else if (player2.koef > player1.koef){
            return -1;
        }
        else if(player2.koef == player1.koef){ //coeficents are equal
            ratio1 = player1.suhe;
            ratio_split = ratio1.split(":");
            ratio1 = parseInt(ratio_split[0])-parseInt(ratio_split[1]);
            ratio2 = player2.suhe;
            ratio_split = ratio2.split(":");
            ratio2 = parseInt(ratio_split[0])-parseInt(ratio_split[1]);
            if (ratio1 > ratio2){
                return 1;
            }
            else if (ratio2 > ratio1){
                return -1;
            }
            else{
                return 0;
            }
            
        }
    }
}


function reastaArray(){
    var newArr = jQuery.extend(true,[],playerLst); //see on meie main
    var original = jQuery.extend(true,[],playerLst); //see on meie main
    var inPlay = []; //siia hakkame lisama
    var firstRound = true;
    var i = 0;
    var count = 0;
    while (newArr.length != 0){
        //seni teeme kuni main-is elemente on veel
        count = i;
        hereiam = false;
        if (inPlay.length % 2 == 0){
            inPlay.push(newArr[i]);
            newArr.splice(i,1);
        }
        else{
            //vähemalt teine round: inPlay.length != 0!
            var lastEl = inPlay[inPlay.length-1];
            var element = newArr[i];
            var played = hasPlayed(element,lastEl);
            while (played == true){
                count += 1;
                //alert(count + " = count ja "+newArr.length+" = newArr.length");
                if (count == newArr.length){
                    alert("Valitud mängud ei pruugi olla enam parimas järjekorras, vajaduse korral lisa tulemused ise tabelisse ning jäta kõik väljad tühjaks alumises tabelis");
                    newArr = original.reverse();
                    inPlay = [];
                    firstElement = newArr[0];
                    lastElement = newArr[newArr.length-1];
                    newArr[0] = lastElement;
                    newArr[newArr.length-1] = firstElement;
                    /*var hereiam = true;
                    alert("While IF-i algus");
                    //me oleme array pikkusest väljas..
                    //peaksime võtma kaks viimast elementi juurde, et nendega kombinatsioone teha.
                    finalMatch = inPlay[inPlay.length-1];
                    inPlay.splice(inPlay.length-1,1);
                    lastfromPlay = inPlay[inPlay.length-1];
                    inPlay.splice(inPlay.length-1,1);
                    secondLastfromPlay = inPlay[inPlay.length-1];
                    inPlay.splice(inPlay.length-1,1);
                    newArr.push(finalMatch);
                    newArr.push(lastfromPlay);
                    newArr.push(secondLastfromPlay);
                    //oleme tagasi pannud neli viimast elementi, vaatame, kas saame teha nendega nii, et nad saaks omavahel mängida
                    returner = canPlayFunc(newArr);
                    if (returner == true){
                        //saab mängida, ilmselt väga vähe true
                        played = false;
                    }
                    else{
                        //tuleb juurde lisada newArr-i
                        el_one = inPlay[inPlay.length-1];
                        inPlay.splice(inPlay.length-1,1);
                        el_two = inPlay[inPlay.length-1];
                        inPlay.splice(inPlay.length-1,1);
                        newArr.push(el_two);
                        newArr.push(el_one);
                        returner = canPlayFunc(newArr);
                        played = false;
                        alert(inPlay.length+" = players in game & players in arr = "+newArr.length);
                        if (returner == true){
                            //peaks tulema suhteliselt alati true
                            //teeme uue järjestuse sõltuvalt sellest mis on newarris canPlay numbrid.
                            makeCombs(newArr);
                            played = false;
                        }
                        else{
                        }
                    }*/
                    
                }
                else{
                    element = newArr[count];
                    played = hasPlayed(element,lastEl);
                }
            }
            if (hereiam == false){
            //nüüd teame, et meil on mingi element, millega eelmine element ei ole mänginud
            inPlay.push(element);
            newArr.splice(count,1);
            }
            
            
        }
    }
    return inPlay;
}

function makeCombs(newArr){
    for (var i = 0;i<newArr.length;i++){
        for (var j=0;j<newArr[i].canPlay.length;j++){
            alert(newArr[i].canPlay[j] + " ja pikkus: "+newArr[i].canPlay.length);
        }
    }
    alert("combsi lõpp");
}


function canPlayFunc(newArr){
    //alert("Funktsiooni call");
    for (var i=0;i<newArr.length;i++){
        gamer = newArr[i];
        for (var j=0;j<newArr.length;j++){
            if (gamer != newArr[j]){
                gamer.canPlay.push(newArr[j].name);
            }
        }
    }
    //now every player has three possible opponents in their canPlay
    //do cross reference with playedNames and remove names who are in playedNames from canPlay
    for (var i=0;i<newArr.length;i++){
        var games = newArr[i].playedNames;
        var canGo = newArr[i].canPlay;
        //alert("Games length: "+games.length+" ja canPlay length: "+canGo.length);
        for (var g=0;g<games.length;g++){
            //käime läbi kõik mängitud mängud, kui leiame, et mängitud mäng = võimalik vastane, eemaldame ta
            for (var o=0;o<canGo.length;o++){
                if(games[g] = canGo[o]){
                    canGo.splice(canGo.indexOf(canGo[o]),1);
                    break;
                }
            }
        }
    }
    //nüüd on meil newArris nimed, kus on sees mängud kellega nad minna saavad, siit tuleks teha kombinatsioonid..
    var returner = true;
    for (var i=0;i<newArr.length;i++){
        if (newArr[i].canPlay.length == 0){
            //vähemalt üks canPlaydest on tühi, nimesid kokku ei saa panna, vaja nimesid juurde lisada.
            returner = false;
        }
    }
    //alert("Oleme lõpus: "+returner);
    return returner;
}


function hasPlayedFunc(newArr,original){
    alert("hasplayedfunc entered");
    var nameArr = [];
    var allNames = [];
    var games = [];
    var sameNames = [];
    for (var x = 0; x<newArr.length;x++){
        nameArr.push(newArr[x].name); //all current names
    }
    for (var x = 0; x<original.length;x++){
        allNames.push(original[x].name); //all original names
    }
    for (var i = 0;i<newArr.length;i++){
        games = newArr[i].playedNames;
        for (var j=0;j<games.length;j++){
            //käime läbi mängija tehtud mängud, siit saaksime nimed teada
            for (var x = 0; x<nameArr.length;x++){
                //hetkelised nimed
                if (games[j] == nameArr[x]){
                    sameNames.push(nameArr[x]);
                }
            }
        }
        //teame nimesid mis on nii nameArris kui gamesis, vaja välja võtta nimed, mis on sameNamesis, aga nameArris pole.
        alert("nameArr: "+nameArr.length);
        var same = false;
        for (var j=0;j<sameNames.length;j++){
            var samename = "";
            for (var x=0;x<nameArr.length;x++){
                if (sameNames[j] == nameArr[x]){
                    alert("Leitud sama nimi");
                    samename = sameNames[j];
                }
            }
            if (samename != ""){
                nameArr.splice(nameArr.indexOf(samename),1);
                same = true;
            }
        }
        alert(nameArr.length);
        if (same == true){
            //kõik nimed, mis on nameArris on ka sameArris, mitte midagi ei muutnud.
        }
        //nüüd on nameArris järel vaid nimed, mis alles, aga kellega mängitud ei ole
        if (nameArr.length != 0){
            //kui pikkus ei ole 0 ehk on nimesid, kellega on võimalik veel mängida
            for (var j=0;j<nameArr.length;j++){
                newArr[i].canPlay.push(nameArr[j]);
            }
            
        }
        alert(newArr[i].canPlay.length +" = canPlay pikkus mängijal: "+ newArr[i].name);
        nameArr = [];
        for (var x = 0; x<newArr.length;x++){
            nameArr.push(newArr[x].name); //all current names
        }
        
    }
}

function hasPlayed(player1,player2){
    var played = false;
    for (var j = 0; j<player1.playedNames.length;j++){
        if (player2.name == player1.playedNames[j]){
            played = true;
            break;
        }
    }
    return played;
}




