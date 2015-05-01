function makeOrder(myValues){
    var pikkus = myValues.length;
    var neededEmptys = 16-pikkus;
    var counter = 0;
    var counterBOT = 0;
    var counterTOP = 0;
    var up = true;
    for (var i = 0; i<neededEmptys;i++){
        if (up == true){
            //place top
            myValues.splice(counterTOP,0,"-");
            up = false;
            counterTOP = counterTOP + 5;
        }
        else{
            //place bot
            myValues.splice(myValues.length-counterBOT,0,"-");
            up = true;
            counterBOT = counterBOT +5;
        }
    }
    return myValues;
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
    else {
        retID = 8;
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

window.onload = function() {
       var myValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [],
       divElements = document.querySelectorAll("#MAIN");
       var checkBoxes = localStorage.getItem("checkboxes") ? JSON.parse(localStorage.getItem("checkboxes")) : [];
        if (checkBoxes[1] == true){
           myValues = ["Tiit", "Kevin", "Andres", "Sören", "Banaan", "Sairos", "Lembit", "Taavi", "Ants", "Nimi", "Üksteist"];
       }
       myValues = makeOrder(myValues);
        //create empty table
       if (checkBoxes[2] == true){
           var emptyA = []
           for (var i = 0; i<16;i++){
               emptyA.push("&nbsp");
           }
           myValues = emptyA;
       }
       //add table name
       if (checkBoxes[3].length > 0){
           nameTAG = document.getElementById("nameTAG");
           nameTAG.textContent = checkBoxes[3];
       }
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