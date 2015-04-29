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

window.onload = function() {
       var myValues = localStorage.getItem("myValues") ? JSON.parse(localStorage.getItem("myValues")) : [],
       divElements = document.querySelectorAll("#MAIN");
       myValues = makeOrder(myValues);
       for(var i =0; i < myValues.length; i++) {
           divElements[i].textContent = myValues[i];
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