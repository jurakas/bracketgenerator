var is = 0;

function duplicate(tableID) {
    var original = document.getElementById(tableID + is);
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = tableID + ++is; // there can only be one element with an ID
    clone.onclick = duplicate; // event handlers are not cloned
    original.parentNode.appendChild(clone);
}

var ds = 0;
function checkForFalse(tableID,NR){
    var getID = document.getElementById(tableID + ds);
    if (NR == false){
        getID.style.display = "none";
    }
}


function makeDuplicates(myTables){
    var neli = true, viis = true, kuus = true, seitse = true, kaheksa = true;
    for (var i = 0; i<myTables.length; i++){
        //esimene element on 4, viimane 8 in myTables
        //esimese elemendiga tuleks teha nii palju duplikaate kui on
        var count = myTables[i];
        while (count != 0){
            if (i == 0){
                duplicate("4table");
                if (neli == true){
                    //addNumbersNextToIT
                    neli = false;
                }
            }
            else if (i == 1){
                duplicate("5table");
            }
            else if(i == 2){
                duplicate("6table");
            }
            else if(i == 3){
                duplicate("7table");
            }
            else if(i == 4){
                duplicate("8table");
            }
            count = count - 1;
        }
        is = 0;
        
    }
    var neli = false, viis = false, kuus = false, seitse = false, kaheksa = false;
    checkForFalse("4table",neli);
    checkForFalse("5table",viis);
    checkForFalse("6table",kuus);
    checkForFalse("7table",seitse);
    checkForFalse("8table",kaheksa);
    
    return document.getElementsByClassName("namefield");
    
}

function getInside(howmany, tableid){
    var testAsi = []
       while (howmany != 0){
           var idnr = tableid+howmany;
           testAsi.push($('#'+idnr).find('.namefield'));
           howmany = howmany - 1;
       }
   return testAsi;
}

    function getElements(myTables){
        var names = []
        var nimed = []
        var kaunt = 4;
        for (var i = 0; i<myTables.length;i++){
           if (myTables[i] != 0){ //mitu tabelit teha
               nimed = getInside(myTables[i],kaunt+"table"); //mis klassid on sees
               var pikkus = nimed.length;
               for (var j = 0; j<pikkus; j++){ //mitu tabelit meil on
                   var newpikkus = nimed[j].length;
                   var tabelisees = nimed[j];
                   for (var o = 0; o<newpikkus;o++){ //testasi[0] olev sees asi
                       var asd = tabelisees[o];
                       //alert(asd.textContent);
                       names.push(asd);
                   }
                   
               }
           }
            kaunt = kaunt + 1;
        }
        return names;
    }

window.onload = function() {
       var myValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [];
       var myTables = localStorage.getItem("tableValues") ? JSON.parse(localStorage.getItem("tableValues")) : [];
    var checkBoxes = localStorage.getItem("checkboxes") ? JSON.parse(localStorage.getItem("checkboxes")) : [];
       var divElements = makeDuplicates(myTables);
       var names = getElements(myTables);
       //create empty table
       if (checkBoxes[2] == true){
           var emptyA = []
           for (var i = 0; i<100;i++){
               emptyA.push("");
           }
           myValues = emptyA;
       }
       for(var i = 0; i < myValues.length; i++) {
           var sone = myValues[i];
           if (checkBoxes[2] != true){
               var suurelt = sone[0].toUpperCase() + sone.substr(1);
           }
           names[i].textContent = suurelt;
       }
       if (checkBoxes[3].length > 0){
           nameTAG = document.getElementsByClassName("nameTAG");
           for (var i = 0; i<nameTAG.length;i++){
               nameTAG[i].textContent = checkBoxes[3];
           }
           
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