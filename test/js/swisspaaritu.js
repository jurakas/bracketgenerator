var playerLst = [];
var vooru_nr = 1;
var haveVisited = false;
var lastNames = [];
var lastValues = [];
var tableCount = 3;
var viimaneEl = "";
var inThisFunc = 1;
var olnudVabad = [];

function continueCheck(){
    var checkbox = document.getElementById("turnoffalgorithm");
    var state = checkbox.checked;
    return state;
}

function removeTableTWO(){
    var lastDiv = document.getElementById("gamestable");
    lastDiv.parentNode.removeChild(lastDiv);
}

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
                if (i >0 && j==1){ //here happens the editable change
                    //colElem.setAttribute("contentEditable",true);
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
    a = nameValues.length/2;
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
            countRIDA += 1;
        }

        document.getElementById("voorutabel").appendChild(tableElem);
        

    }
}

function lisaVooruTabel(playerArr) {
    var a, b, tableElem, rowElem, colElem;

    //a = document.getElementById('tb1').value;
    //b = document.getElementById('tb2').value;
    a = 3;
    b = 2;

    if (a == "" || b == "") {
        alert("Please enter some numeric value");
    } else {
        tableElem = document.createElement('table');
        tableElem.id = "lisatable";
        var countRIDA = 0;

        for (var i = 0; i < a; i++) {
            rowElem = document.createElement('tr');
            rowElem.className = "4_row_"+i;

            for (var j = 0; j < b; j++) {
                colElem = document.createElement('td');
                colElem.className = "4_el_"+j;
                colElem.className += " boxboy_"+j;
                //colElem.appendChild(document.createTextNode(j + 1));
                if (i >0 && j==1){ //here happens the editable change
                    colElem.setAttribute("contentEditable",true);
                    colElem.className += " editableCELL"+countRIDA;
                }
                rowElem.appendChild(colElem);
            }

            tableElem.appendChild(rowElem);
            countRIDA += 1;
        }

        document.getElementById("voorutabel").appendChild(tableElem);
        

    }
}

function addHistoryRound(round){
    var roundshower = document.createElement('div');
    roundshower.id = "roundNR_"+round;
    document.getElementById("historyTable").appendChild(roundshower);
    var jumo = document.getElementById("roundNR_"+round);
    jumo.textContent = "Voor: "+round;
}

function createHistoryTable(c) {
    var a, b, tableElem, rowElem, colElem;
    var nameValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [];
    var thingy = document.getElementById("historyDisp");
    thingy.className = "setDisplay";
    //a = document.getElementById('tb1').value;
    //b = document.getElementById('tb2').value;
    a = nameValues.length/2-1;
    b = 2;

    if (a == "" || b == "") {
        alert("Please enter some numeric value");
    } else {
        tableElem = document.createElement('table');
        tableElem.id = "history";
        tableElem.className = "historyClass";
        var countRIDA = 0;

        for (var i = 0; i < a; i++) {
            rowElem = document.createElement('tr');
            rowElem.className = c+"_rida_"+i;

            for (var j = 0; j < b; j++) {
                colElem = document.createElement('td');
                colElem.className = c+"_elem_"+j;
                colElem.className += " boxboy_"+j;
                rowElem.appendChild(colElem);
            }

            tableElem.appendChild(rowElem);
            countRIDA += 1;
        }

        document.getElementById("historyTable").appendChild(tableElem);
        

    }
}


window.onload = function() {
       createTable();
       createTableTwo();
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
           if (i == myValues.length-1){
               Player["voor_1"] = "V";
               olnudVabad.push(Player);
           }
           else{
               Player["voor_1"] = "";
           }
           Player["voor_2"] = "";
           Player["voor_3"] = "";
           Player["voor_4"] = "";
           Player["voor_5"] = "";
           Player["voor_6"] = "";
           Player["voor_7"] = "";
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


function updatePlayerBack(vooru_nr){
    //loadib punktid, koef, suhte ja koha
       var nameField = document.getElementsByClassName("elem_0");
       var vooru1Field = document.getElementsByClassName("elem_1");
       var vooru2Field = document.getElementsByClassName("elem_2");
       var vooru3Field = document.getElementsByClassName("elem_3");
       var vooru4Field = document.getElementsByClassName("elem_4");
       var vooru5Field = document.getElementsByClassName("elem_5");
       var vooru6Field = document.getElementsByClassName("elem_6");
       var vooru7Field = document.getElementsByClassName("elem_7");
       var punktiField = document.getElementsByClassName("elem_8");
       var koefField = document.getElementsByClassName("elem_9");
       var suhteField = document.getElementsByClassName("elem_10");
       var kohaField = document.getElementsByClassName("elem_11");
       for (var i = 1; i<playerLst.length+1;i++){
           var Player = playerLst[i-1];
           //readPlayerNames(Player);
           nameField[i].textContent = Player.name;
           punktiField[i].textContent = Player.punkte;
           vooru1Field[i].textContent = Player.voor_1;
           vooru2Field[i].textContent = Player.voor_2;
           vooru3Field[i].textContent = Player.voor_3;
           vooru4Field[i].textContent = Player.voor_4;
           vooru5Field[i].textContent = Player.voor_5;
           vooru6Field[i].textContent = Player.voor_6;
           vooru7Field[i].textContent = Player.voor_7;
           koefField[i].textContent = Player.koef;
           suhteField[i].textContent = Player.suhe;
           kohaField[i].textContent = Player.koht;
       }
}

function swapLast(newArr,vooru_nr){
    var kaunter = 2;
    var viimne = newArr[newArr.length-1]; //praegu free
    var viimneVaba = hasBeenFree(viimne)
    if (viimneVaba != true){
        setValiVoor(viimne,vooru_nr+1,"V");
        olnudVabad.push(viimne);
    }
    else{
    var eelviimne = newArr[newArr.length-kaunter]; //kandidaat free
    while (hasBeenFree(eelviimne) == true){
        //alert(kaunter);
        //alert("element: "+newArr[newArr.length-kaunter].name);
        kaunter += 1;
        eelviimne = newArr[newArr.length-kaunter];
    }
    //swap
    if (vooru_nr < 4){
        setValiVoor(eelviimne,vooru_nr+1,"V");
        olnudVabad.push(eelviimne);
    }
    newArr[newArr.length-1] = eelviimne;
    newArr[newArr.length-kaunter] = viimne;
    }
}

function hasBeenFree(player){
    if (player.voor_1 == "V" || player.voor_2 == "V" || player.voor_3 == "V" || player.voor_4 == "V" || player.voor_5 == "V" || player.voor_6 == "V" || player.voor_7 == "V"){
        return true;
    }
    else{
        return false;
    }
}

function paneKohadÕigeks(){
    for (var i = 0; i<olnudVabad.length;i++){
        var vabaEl = olnudVabad[i];
        for (var j = 0; j<playerLst.length;j++){
            //alert(vabaEl.name + " = vaba nimi & playerlistinimi = "+playerLst[j].name);
            if (vabaEl.name.localeCompare(playerLst[j].name) == 0){
                //alert("vana koht vabal "+vabaEl.nimi+": "+vabaEl.koht);
                vabaEl.koht = playerLst[j].koht;
                vabaEl.voor_1 = playerLst[j].voor_1;
                vabaEl.voor_2 = playerLst[j].voor_2;
                vabaEl.voor_3 = playerLst[j].voor_3;
                vabaEl.voor_4 = playerLst[j].voor_4;
                vabaEl.suhe = playerLst[j].suhe;
                vabaEl.punkte = playerLst[j].punkte;
                vabaEl.koef = playerLst[j].koef;
            }
        }
    }
}

function vahetaPlayeriks(){
    for (var i=0; i<olnudVabad.length;i++){
        var vabaEl = olnudVabad[i];
        for (var j = 0; j<playerLst.length;j++){
            if (vabaEl.name.localeCompare(playerLst[j].name) == 0){
                playerLst[j] = vabaEl;
            }
        }
    }
}

function playervsplayer(){
    //Järjestamisega tegeleb teine funktsioon, sellele antakse juba re-ordered list!!!!
    //Hiljem on taas vaja ümber sättida nii nagu on esimene list, sest uued andmed on sees.
    if (vooru_nr == 4){
        removeTableTWO();
        playerLst = playerLst.sort(suuremKuiTeine).reverse();
        updatePlayerBack(vooru_nr);
        var buttonGO = document.getElementById("edasi");
        buttonGO.textContent = "Arvuta Lisavoor";
        //teed tabeli neli, kus on vabad ainult..
        lisaVooruTabel(olnudVabad);
        for (var i = 0; i<3;i++){
            var cont_3 = document.getElementsByClassName("4_el_"+i);
                if (i == 0){
                    cont_3[0].textContent = "Mäng";
                }
                if (i == 1){
                    cont_3[0].textContent = "RES";
                }

        }
        paneKohadÕigeks();
        olnudVabad = vabaCalc();
        var nimedekoht = document.getElementsByClassName("4_el_0");
        var luger = 1;
        for (var i = 1; i<olnudVabad.length;i = i+2){
            P1 = olnudVabad[i-1];
            P2 = olnudVabad[i];
            resultaat = P1.name+" vs "+P2.name;
            nimedekoht[luger].textContent = resultaat;
            luger += 1;
        }
    }
    else{


        if (playerLst.length < 17){
            var arrayForCalc = testFunction();
        }
        else{
            var arrayForCalc = reastaArray();
        }
        var res = "";
        var resArr = [];
        var nameFields = document.getElementsByClassName("2_elem_0");
        var counter = 1;
        //var mover = 1;
        for (var i = 1; i<arrayForCalc.length;i = i+2){
            mover = 1;
            Player_one = arrayForCalc[i-1];
            Player_two = arrayForCalc[i];
            res = Player_one.name + " vs " + Player_two.name;
            resArr.push(res);
            Player_one.playedNames.push(Player_two.name);
            Player_two.playedNames.push(Player_one.name);
            nameFields[counter].textContent = res;
            counter = counter + 1;
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
        lastNames.push(resArr);
        arrayForCalc.push(viimaneEl);
        playerLst = arrayForCalc;
    }
    
}

function valiVoor(player, r){
    return player['voor_'+r];
}

function setValiVoor(player, r, value){
    player['voor_'+r] = value;
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

function makeHistory(names,values){
    //names[0] = values[0]
    for (var i = 0;i<names.length;i++){
        var nameCol = document.getElementsByClassName(tableCount+"_elem_0"); //array
        var resCol = document.getElementsByClassName(tableCount+"_elem_1"); //array
        for (var j =0;j<names[i].length;j++){
            nameCol[j].textContent = names[i][j];
            resCol[j].textContent = values[i][j+1].textContent;
        }
    }
}

function readPlayerNames(player){
    alert("Nimi: "+player.name + ", voor_1: "+player.voor_1+", voor_2: "+player.voor_2+", suhe: "+player.suhe+", punkte: "+player.punkte);
}

function leiaPlayer(name){
    for (var i = 0; i<playerLst.length;i++){
        if (playerLst[i].name.localeCompare(name) == 0){
            return playerLst[i];
        }
    }
}

//kui checked, siis tolle jaoks üldse uus funktsioon mida button välja callib
function calculatePoints(){
    //console.log("button clicked!");
    if (vooru_nr == 6){
        alert("kuues voor");
    }
    else if (vooru_nr == 5){
        //alert("viies voor");
        var resultCol = document.getElementsByClassName("4_el_1"); //pikkusega kaks
        var taidetud = true;
        var c = 1;
        var fromRes = "";
        for (var o = 0;o<resultCol.length;o++){
            if (resultCol[o].textContent == ""){
                taidetud = false;
                alert("Jätsid midagi sisestamata või sisestasid valel kujul: 'number:number'");
                break;
            }
        }
        if (taidetud == true){
            for (var i = 1; i<olnudVabad.length;i=i+2){
                Player = olnudVabad[i];
                Player_two = olnudVabad[i-1];
                fromRes = resultCol[c].textContent.trim();
                splitter = fromRes.split(":");
                esimene = parseInt(splitter[0]);
                teine = parseInt(splitter[1]);
                tehe = esimene-teine;
                vastupidi = teine+":"+esimene;
                if (tehe > 0){ //esimene võitis
                    win = true;
                    playerVoor = setValiVoor(Player,vooru_nr,fromRes);
                    Player.punkte += 2;
                    suhte_playerist = Player.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + esimene;
                    suhe_two = suhe_two + teine;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player.suhe = suhte_string;

                    playertwoVoor = setValiVoor(Player_two,vooru_nr,vastupidi);
                    Player_two.punkte += 0;
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
                    playerVoor = setValiVoor(Player,vooru_nr,fromRes);
                    playertwoVoor = setValiVoor(Player_two,vooru_nr,vastupidi);
                    suhte_playerist = Player_two.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + teine;
                    suhe_two = suhe_two + esimene;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player_two.suhe = suhte_string;
                    suhte_playerist = Player.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + esimene;
                    suhe_two = suhe_two + teine;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player.suhe = suhte_string;
                    win = false;
                    Player.punkte += 1;
                    Player_two.punkte += 1;
                }
                else if (tehe < 0){
                    win = false;
                    playertwoVoor = setValiVoor(Player_two,vooru_nr,vastupidi);
                    Player_two.punkte += 2;
                    suhte_playerist = Player_two.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + teine;
                    suhe_two = suhe_two + esimene;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player_two.suhe = suhte_string;

                    playerVoor = setValiVoor(Player,vooru_nr,fromRes);
                    Player.punkte += 0;
                    suhte_playerist = Player.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + esimene;
                    suhe_two = suhe_two + teine;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player.suhe = suhte_string;
                }
                c += 1;
            }
            //nüüd on olnudVabad-is voorud antud!
            vahetaPlayeriks();
            for (var i = 0; i<playerLst.length;i++){
                if (hasBeenFree(playerLst[i])){
                    continue;
                }
                else{
                    playerLst[i].voor_5 = "0:0";
                }
            }
            //now filled with data
            calculateKoef();
            playerLst = (playerLst.sort(suuremKuiTeine)).reverse();
            for (var i = 0; i<playerLst.length;i++){
                playerLst[i].koht = i+1;
            }
            updatePlayerBack(vooru_nr);
            vooru_nr += 1;
            console.log(vooru_nr);
            var buttonGO = document.getElementById("edasi");
            buttonGO.textContent = "Playoff-i";
            
            
            
        } //if taidetud == true endif
        
        
    } //endif
    else{
        var lastSTATE = jQuery.extend(true,[],playerLst); //see on eelmine state
        var firstCol = document.getElementsByClassName("2_elem_1");
        lastValues.push(firstCol);
        var taidetud = true;
        for (var o = 0;o<firstCol.length;o++){
            if (firstCol[o].textContent == ""){
                taidetud = false;
                alert("Jätsid midagi sisestamata või sisestasid valel kujul: 'number:number'");
                break;
            }
        }
        if (taidetud == true){
            //siin peaks olema add historyArray, sest kui vajutatakse nupule, siis liigutatakse esimese asjana vanad asjad historysse
            //lastnames ja lastValuesiga saame ehitada ülesse historyarray
            addHistoryRound(vooru_nr);
            createHistoryTable(tableCount);
            makeHistory(lastNames,lastValues);
            tableCount += 1;
            var summa = 0;
            var valjue = "";
            var res = [];
            var win = true;
            var countija = 1;
            //siin võiks olla copy playerLst-st mis omab väärtust lastSTATE ehk siis enne kui midagi muudetakse
            for (var i = 1; i<playerLst.length;i=i+2){
                valjue = (firstCol[countija].textContent).trim();
                res = valjue.split(":");
                esimene = parseInt(res[0]);
                teine = parseInt(res[1]);
                vastupidi = teine+":"+esimene;
                tehe = esimene-teine;
                Player = playerLst[i-1];
                Player_two = playerLst[i];
                if (tehe > 0){ //esimene võitis
                    win = true;
                    playerVoor = setValiVoor(Player,vooru_nr,firstCol[countija].textContent);
                    Player.punkte += 2;
                    suhte_playerist = Player.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + esimene;
                    suhe_two = suhe_two + teine;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player.suhe = suhte_string;

                    playertwoVoor = setValiVoor(Player_two,vooru_nr,vastupidi);
                    Player_two.punkte += 0;
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
                    playerVoor = setValiVoor(Player,vooru_nr,firstCol[countija].textContent);
                    playertwoVoor = setValiVoor(Player_two,vooru_nr,vastupidi);
                    suhte_playerist = Player_two.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + teine;
                    suhe_two = suhe_two + esimene;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player_two.suhe = suhte_string;
                    suhte_playerist = Player.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + esimene;
                    suhe_two = suhe_two + teine;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player.suhe = suhte_string;
                    win = false;
                    Player.punkte += 1;
                    Player_two.punkte += 1;
                }
                else if (tehe < 0){
                    win = false;
                    playertwoVoor = setValiVoor(Player_two,vooru_nr,vastupidi);
                    Player_two.punkte += 2;
                    suhte_playerist = Player_two.suhe;
                    suhe_arr = suhte_playerist.split(":");
                    suhe_one = parseInt(suhe_arr[0]);
                    suhe_two = parseInt(suhe_arr[1]);
                    suhe_one = suhe_one + teine;
                    suhe_two = suhe_two + esimene;
                    suhte_string = suhe_one + ":" + suhe_two;
                    Player_two.suhe = suhte_string;

                    playerVoor = setValiVoor(Player,vooru_nr,firstCol[countija].textContent);
                    Player.punkte += 0;
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
                //readPlayerNames(Player);
                //readPlayerNames(Player_two);
            }
            calculateKoef();
            playerLst = (playerLst.sort(suuremKuiTeine)).reverse();
            for (var i = 0; i<playerLst.length;i++){
                playerLst[i].koht = i+1;
            }
            var viimneElement = playerLst[playerLst.length-1];
            playerLst.splice(playerLst.indexOf(viimneElement),1);
            playerLst = playerLst.sort(sordiKohaJärgi);
            playerLst.push(viimneElement);
            swapLast(playerLst,vooru_nr);
            var viimneElement = playerLst[playerLst.length-1];
            playerLst.splice(playerLst.indexOf(viimneElement),1);
            playerLst = playerLst.sort(sordiKohaJärgi);
            playerLst.push(viimneElement);
            updatePlayerBack(vooru_nr);
            removeTableTWO();
            createTableTwo();
            playervsplayer();
            vooru_nr += 1;
        }
    }
}

function calculateKoef(){
    for (var i = 0; i<playerLst.length;i++){
        Player = playerLst[i];
        Player.koef = 0;
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
                //alert("Nimi: "+Player.name + " ja koef: "+Player.koef+" liidetav nimi: "+name+" nimesid: "+nameArr.length);
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
            ratio_split1 = ratio1.split(":");
            ratio1 = parseInt(ratio_split1[0])-parseInt(ratio_split1[1]);
            ratio2 = player2.suhe;
            ratio_split2 = ratio2.split(":");
            ratio2 = parseInt(ratio_split2[0])-parseInt(ratio_split2[1]);
            if (ratio1 > ratio2){
                return 1;
            }
            else if (ratio2 > ratio1){
                return -1;
            }
            else{
                if (ratio_split1[0] > ratio_split2[0]){
                    return 1;
                }
                else if (ratio_split1[0] < ratio_split2[0]){
                    return -1;
                }
                else {
                    if (player1.name.charAt(0) > player2.name.charAt(0)){
                        return 1;
                    }
                    else if (player1.name.charAt(0) < player2.name.charAt(0)){
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            }
            
        }
    }
}

function isInArray(arr,element){
    var bool = false;
    for (var i = 0; i<arr.length;i++){
        if(arr[i] == element){
            bool = true;
            break
        }
    }
    return bool;
}

function takeLast(inPlay,newArr){
    var last = inPlay[inPlay.length-1];
    inPlay.splice(inPlay.length-1,1);
    newArr.push(last);
}

function canWePlayNow(newArr){
    for (var i = 0; i<newArr.length;i++){
        var player = newArr[i];
        player.canPlay = [];
        var hasPlayed = player.playedNames;
        for (var j = i+1; j<newArr.length;j++){
            playerFromPlayed = newArr[j];
            var inArr = isInArray(hasPlayed,playerFromPlayed.name);
            if (inArr == false){
                player.canPlay.push(playerFromPlayed.name);
            }
        }
    }
}

function checkPlayed(newArr){
    for (var i = 0; i<newArr.length;i++){
        var player = newArr[i];
        var canPlay = player.canPlay;
        for (var j = 0; j<canPlay.length;j++){
            alert("Mängija: "+player.name+ " saab mängida, mängijaga: "+canPlay[j]);
        }
    }
}

function isInPlay(inPlayArr, player){
    var inPlay = false;
    for (var i = 0; i<inPlayArr.length;i++){
        if (player == inPlayArr[i]){
            inPlay = true;
            break;
        }
    }
    return inPlay;
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

var confirmOnPageExit = function (e) 
{
    // If we haven't been passed the event get the window.event
    e = e || window.event;

    var message = 'Lahkudes leheküljelt lähevad kaotsi Sinu sisestatud andmed, oled sa kindel, et soovid lahkuda?';

    // For IE6-8 and Firefox prior to version 4
    if (e) 
    {
        e.returnValue = message;
    }

    // For Chrome, Safari, IE8+ and Opera 12+
    return message;
};

// Turn it on - assign the function that returns the string
window.onbeforeunload = confirmOnPageExit;

function findCombinations(players) {
  var combinations = [];

  function removePlayer(a, name) {
    for(var i = 0; i < a.length; i++) {
      if(a[i].name === name) return a.slice(0, i).concat(a.slice(i+1));
    }
    return a;
  }

  function find(players, comb) {
    if(players.length === 0) {
      combinations.push(comb);
      return;
    };
    var player = players[0];
    player.canPlay.forEach(function(other) {
      var newPlayers = removePlayer(players, other);
      if(newPlayers !== players && other !== player.name) {
        find(newPlayers.slice(1), comb.concat([[player.name, other]]));
      }
    });
  }

  find(players, []);
  return combinations;
}

function findBest(combinations, players) {
  if(combinations.length === 0) throw new Error();
  var koht = {};
  function score(comb) {
    return comb.reduce(function(score, pair) {
      //console.log("New calc:");
      //console.log(score+koht[pair[0]]*koht[pair[1]]);
      return score + koht[pair[0]] * koht[pair[1]];
    }, 0);
  };
  players.forEach(function(p) {
    koht[p.name] = p.koht;
  });
  //console.log("koht: ");
  //console.log(koht); 
  var best = combinations[0];
  combinations.slice(1).forEach(function(comb) {
    //console.log(score(comb) + " = combs & best = "+score(best));
    //console.log("Checked combs: ");
    //console.log(comb);
    if(score(comb) > score(best)) {
        best = comb;
    }
  });
 // console.log("Returned array: (best)");
  //console.log(best);
  return best;
}

function sordiKohaJärgi(p1,p2){
    if (p1.koht > p2.koht){
        return 1;
    }
    else if (p1.koht < p2.koht){
        return -1;
    }
    else{
        return 0;
    }
}

function testFunction(){
    var newArr = jQuery.extend(true,[],playerLst); //see on meie main
    viimaneEl = newArr[newArr.length-1];
    newArr.splice(newArr.indexOf(newArr.length-1),1); //viskame viimase nahui
    var original = jQuery.extend(true,[],playerLst); //see on meie main
    canWePlayNow(newArr);
    var combinations = findCombinations(newArr);
    var arr = findBest(combinations,newArr);
    var resulted = [];
    var returnArr = [];
    for (var i = 0; i<arr.length;i++){
        var comb = arr[i];
        for (var j = 0; j<comb.length;j++){
            resulted.push(comb[j]);
        }
    }
    //resultedis on õiges järjekorras, vaja asendada playeritega need nimed.
    for (var i = 0; i<resulted.length;i++){
        var el = resulted[i];
        for (var j = 0; j<original.length;j++){
            if (el == original[j].name){
                returnArr.push(original[j]);
            }
        }
    }
    return returnArr; 
}

function vabaCalc(){
    var newArr = jQuery.extend(true,[],olnudVabad); //see on meie main
    var original = jQuery.extend(true,[],olnudVabad); //see on meie main
    canWePlayNow(newArr);
    var combinations = findCombinations(newArr);
    var arr = findBest(combinations,newArr);
    var resulted = [];
    var returnArr = [];
    for (var i = 0; i<arr.length;i++){
        var comb = arr[i];
        for (var j = 0; j<comb.length;j++){
            resulted.push(comb[j]);
        }
    }
    //resultedis on õiges järjekorras, vaja asendada playeritega need nimed.
    for (var i = 0; i<resulted.length;i++){
        var el = resulted[i];
        for (var j = 0; j<original.length;j++){
            if (el == original[j].name){
                returnArr.push(original[j]);
            }
        }
    }
    return returnArr; 
}

function calculateFunction(newArr){
    var original = jQuery.extend(true,[],playerLst); //see on meie main
    canWePlayNow(newArr);
    var combinations = findCombinations(newArr);
    var arr = findBest(combinations,newArr);
    var resulted = [];
    var returnArr = [];
    for (var i = 0; i<arr.length;i++){
        var comb = arr[i];
        for (var j = 0; j<comb.length;j++){
            resulted.push(comb[j]);
        }
    }
    //resultedis on õiges järjekorras, vaja asendada playeritega need nimed.
    for (var i = 0; i<resulted.length;i++){
        var el = resulted[i];
        for (var j = 0; j<original.length;j++){
            if (el == original[j].name){
                returnArr.push(original[j]);
            }
        }
    }
    return returnArr; 
}


function reastaArray(){
    var newArr = jQuery.extend(true,[],playerLst); //see on meie main
    var original = jQuery.extend(true,[],playerLst); //see on meie main
    viimaneEl = newArr[newArr.length-1];
    newArr.splice(newArr.indexOf(newArr.length-1),1); //viskame viimase nahui
    var inPlay = []; //siia hakkame lisama
    var firstRound = true;
    var visitedCount = 1;
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
                    takeLast(inPlay,newArr);
                    for (var y = 0; y<visitedCount;y++){
                        takeLast(inPlay,newArr);
                        takeLast(inPlay,newArr);
                    }
                    newArr = calculateFunction(newArr);       
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