function makeOrder(myValues){
    var emptyArr = [];
    var counter = 0;
    for (var i = 0; i<32;i++){
        emptyArr.push("-");
    }
    //now we has empty array
    var len = emptyArr.length;
    var tyhi = 32-myValues.length;
    var count = 0;
    for (var i = 0; i<len;i++){
        if (count <= tyhi){
            //viga on siin, tuleks teha nii, et tühjaks jäetakse pos vastavalt countile..
            //võibolla teha array, kus märkida ära kõik emptyspotsid ning võtta neid järjest, kuidas me tahame, et täidetakse.
            //st lasta for-iga koguaeg läbi toda arrayd, kui i = ühega neist mis seal sees on, siis jätta tühjaks..
            //okei, for-i plaan ei pruugi just hea olla..
            //tuleks võtta counteriga tollest, kui üks on võetud, siis võtta kohe järgmine, siis järgmine jne.. sõltuvalt tühjade arvust..
            if (i == 1 || i == len-1 || i == 17  || i == len-17 || i == 9  || i == len-9 || i == 7  || i == len-7  || i == 5  || i == len-5 || i == 11  || i == len-11 || i == 13  || i == len-13){
                count = count + 1;
                continue;
            }
             else{
                emptyArr[i] = myValues[counter];
                counter = counter + 1;
            }
        }
        else{
            emptyArr[i] = myValues[counter];
            counter = counter + 1;
        }
    }
    return emptyArr;
} 

function sortNumber(a,b) {
    return a - b;
}

function isOdd(num) { return num % 2;}

function getForwardNames(myValues){
    var emptyNames = [];
    var emptyNumbers = [];
    for (var i = 0; i<myValues.length;i++){
        //käime läbi terve myValuesi, kui i on paaris, siis ülemine, kui paaritu, siis alumine
        if (myValues[i] == "-"){
            //kui tegemist on tühjaga, siis tuleb i check teha
            if (isOdd(i)){
                //Ülemises on nimi (i-1)
                emptyNames.push(myValues[i-1]);
                emptyNumbers.push(i-1);
            }
            else{
                //Alumises on nimi (i+1)
                emptyNames.push(myValues[i+1]);
                emptyNumbers.push(i+1);
            }
        }
    }
    var comboArr = [];
    comboArr.push(emptyNames);
    comboArr.push(emptyNumbers);
    return comboArr;
}

function checkID(nr){
    var retID = 0;
    if (nr == 0 || nr == 1){
        retID = 1;
    }
    else if (nr == 2 || nr == 3){
        retID = 2;
    }
    else if (nr == 4 || nr == 5){
        retID = 3;
    }
    else if (nr == 6 || nr == 7){
        retID = 4;
    }
    else if (nr == 8 || nr == 9){
        retID = 5;
    }
    else if (nr == 10 || nr == 11){
        retID = 6;
    }
    else if (nr == 12 || nr == 13){
        retID = 7;
    }
    else if (nr == 14 || nr == 15){
        retID = 8;
    }
    else if (nr == 16 || nr == 17){
        retID = 9;
    }
    else if (nr == 18 || nr == 19){
        retID = 10;
    }
    else if (nr == 20 || nr == 21){
        retID = 11;
    }
    else if (nr == 22 || nr == 23){
        retID = 12;
    }
    else if (nr == 24 || nr == 25){
        retID = 13;
    }
    else if (nr == 26 || nr == 27){
        retID = 14;
    }
    else if (nr == 28 || nr == 29){
        retID = 15;
    }
    else{
        retID = 16;
    }
    return retID;
}

function autoForward(myValues){
    var comboArr = getForwardNames(myValues);
    var emptyNames = comboArr[0];
    var emptyNumbers = comboArr[1];
    var number = 0;
    var idNR = 0;
    var name;
    var changedEL;
    for (var i=0; i<emptyNumbers.length;i++){
        number = emptyNumbers[i];
        name = emptyNames[i];
        //see on number, kus on tühi koht
        idNR = checkID(number);
        changedEL = document.getElementById(idNR);
        changedEL.textContent = name;
    }
}

function orderMaker(myValues){
    var emptyArr = [];
    var counter = 0;
    var count = 0;
    for (var i = 0; i<32;i++){
        emptyArr.push("-");
    }
    //now we has empty array
    var len = emptyArr.length;
    var tyhi = 32-myValues.length;
    var slots = [1,31,17,15,9,23,7,25,5,27,11,21,13,19,3,29]; //this array will have values which will be left empty!!!!
    //how many from slots we need
    var emptySlots = [];
    for (var i = 0; i<=tyhi;i++){
        emptySlots[i] = slots[i];
    }
    emptySlots = emptySlots.sort(sortNumber);
    //now we have an array with empty slots to be filled..
    for (var i = 0; i<len;i++){
        //iterates through every emptyArray element
        if (i == emptySlots[counter]){
            counter = counter + 1;
            continue;
        }
        else{
            emptyArr[i] = myValues[count];
            count = count + 1;
        }
    }
    return emptyArr;
}

window.onload = function() {
       var myValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [],
       divElements = document.getElementsByClassName("namefield");
       var checkBoxes = localStorage.getItem("checkboxes") ? JSON.parse(localStorage.getItem("checkboxes")) : [];
       if (checkBoxes[1] == true){
           myValues = ["Tiit", "Kevin", "Andres", "Sören", "Banaan", "Sairos", "Lembit", "Taavi", "Ants", "Nimi", "Üksteist", "Siku", "Rene", "Testplayer", "VeryPlayer", "Manyplayer", "Superplayer", "Nimedotsas", "Puhasjama", "Appiii", "Võikslõppeda", "Kakskendkaks"];
       }
       myValues = orderMaker(myValues);
       for(var i =0; i < myValues.length; i++) {
           divElements[i].textContent = myValues[i];
       }
       //IF AUTOFORWARD SETTING ON
       if (checkBoxes[0] == false){
           autoForward(myValues);
       }
   }
/*
function PrintElem(elem)
    {
        Popup($(elem).html());
    }

function Popup(data) 
{
    var mywindow = window.open('', 'printstartshere', 'height=400,width=600');
    mywindow.document.write('<html><head><title>16-tabel</title>');
    mywindow.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    mywindow.document.write('<link rel="stylesheet" href="css/small-business.css" type="text/css" />');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10

    mywindow.print();
    mywindow.close();

    return true;
}
*/