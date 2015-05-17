function createPrintSection(){
    var $printSection = document.getElementById("printSection");
    if (!$printSection){
        var $printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
    }
    $printSection.innerHTML = "";
    return $printSection;
}

function addElement(elem,parent) {
    var domClone = elem.cloneNode(true);
    parent.appendChild(domClone);
}


function removePrintSection(){
    var $printSection = document.getElementById("printSection");
    if (!$printSection){
        return;
    }
    else{
        $printSection.innerHTML = "";
    }
}

function doPrint() {
    var $printSection = createPrintSection();
    addElement(document.getElementById("nameTAG"),$printSection);
    addElement(document.getElementById("tabel"),$printSection);
    addElement(document.getElementById("historyTable"),$printSection);
    addElement(document.getElementById("copyright"),$printSection);
    window.print();
}


function makeImage(){
    var $printSection = createPrintSection();
    addElement(document.getElementById("nameTAG"),$printSection);
    addElement(document.getElementById("tabel"),$printSection);
    addElement(document.getElementById("historyTable"),$printSection);
    addElement(document.getElementById("copyright"),$printSection);
    return $printSection;
}


function makeCanvas(){
    var emptyChild = document.getElementById("notShown");
    emptyChild.innerHTML = "";
    var imgArr = [];
    html2canvas($printSection, {
        onrendered: function(canvas){
            canvas.id = "picture";
            emptyChild.appendChild(canvas);
        }
    });
}

function datemaker(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = mm+'.'+dd+'.'+yyyy;
    return today;
}

function tryThis(){
    var $printSection = makeImage();
    html2canvas($printSection, {
        onrendered: function(canvas) {         
            var imgData = canvas.toDataURL(
                'image/png');              
            var doc = new jsPDF('p', 'mm');
            doc.addImage(imgData, 'PNG', 10, 10);
            var name = document.getElementById("nameTAG").textContent;
            if (name.length < 2){
                name = "nameless";
            }
            var deit = datemaker();
            var stringB = name+"_table_"+deit+".pdf";
            doc.save(stringB);
        }
    });
}


$('#historyModal').modal({
  backdrop: 'static',
  keyboard: false,
  show: false
})

$("#historyModal").on('hide.bs.modal', function () {
    removePrintSection();
})