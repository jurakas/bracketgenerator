function disableRB(){
    var allRadios = document.getElementsByName('choosetable');
    var booRadio;
    var x = 0;
    for(x = 0; x < allRadios.length; x++){
        if(allRadios[x].checked == true){
            allRadios[x].checked = false;
        }
    }
    
}


$(document).ready(function(){
    $('input:radio').change(function() {
       if($(this).attr('id') == 'radiobutton' && $(this).attr('value') == './tables/4group.html') {
           disableRB();
           $(this).prop("checked",true);
            $('#showtest').show();   
           var g1 = document.querySelector("#gcount1");
           var g2 = document.querySelector("#gcount2");
           var g3 = document.querySelector("#gcount3");
           var g4 = document.querySelector("#gcount4");
           var g5 = document.querySelector("#gcount5");
           
           var c = document.getElementById("gamecount");
           var val1 = 0;
           var val2 = 0;
           var val3 = 0;
           var val4 = 0;
           var val5 = 0;
           g1.addEventListener('input', function()
            {
               val1 = 6 * g1.value;
                c.textContent = val1 + val2 + val3 + val4 + val5;
            });
           g2.addEventListener('input', function()
            {
               val2 = 10 * g2.value;
                c.textContent = val1 + val2 + val3 + val4 + val5;
            });
           g3.addEventListener('input', function()
            {
               val3 = 15 * g3.value;
                c.textContent = val1 + val2 + val3 + val4 + val5;
            });
           g4.addEventListener('input', function()
            {
               val4 = 21 * g4.value;
                c.textContent = val1 + val2 + val3 + val4 + val5;
            });
           g5.addEventListener('input', function()
            {  
               val5 = 28 * g5.value;
                c.textContent = val1 + val2 + val3 + val4 + val5;
            });
       }

       else {
           disableRB();
           $(this).prop("checked",true);
           if($(this).attr('value') != 'Groups'){
               $('#showtest').hide();
           }
              
       }
    });
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

//$('#popoverOption').popover({ trigger: "hover" });

var counter = 1;
    var limit = 65;
    var divcounter = 1;
    nimed = document.getElementsByName("namefield");
    function addInput(divName){
         if (nimed[nimed.length-1].value == "")  {
            alert("Ole hea ja sisesta ka ikka midagi kasti..");
         }
         else {
              var newdiv = document.createElement('tr');
              newdiv.className = "spaceUnder";
              newdiv.innerHTML = "<td><p class='nametext' style='font-size:20px'>#"+(counter + 1)+" <i class='fa fa-user' style='font-size:20px'></i></p></td> <td><input id='tfield' type='text' name='namefield' class='field'> </td>";
              document.getElementById(divName).appendChild(newdiv);
              var inputs = document.getElementsByName('namefield');
              inputs[inputs.length-1].focus();
              counter++;
              window.scrollBy(0,50);
         }
    }

    function removeInput(divName) {
      if (counter != 1){
          var lastDiv = document.getElementById(divName).lastChild;
      document.getElementById(divName).removeChild(lastDiv);
        counter--;
      }
      else{
          alert("Jätame ühe kasti ikka alles ka..");
      }
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function checkTableValueSize(){
    var gtable = document.getElementsByName("gtable");
    for (var i = 0; i<gtable.length;i++){
        if (isInt(gtable[i])){
            if (parseInt(gtable[i].value) < 0 || parseInt(gtable[i].value) > 7){
                alert("0-7 tabelit teeme korraga ainult..")
            }
        }
        else{
            alert("Numbreid ainult palun!");
        }
    }
    
}

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}


function getElementArray(divName){
    var myValues = [],
    names = document.getElementsByName("namefield");
    var gtable = document.getElementsByName("gtable");
    var tableValues = [];
    
    for(var i = 0; i < names.length; i++) {
        if (((names[i].value).replace(/\s+/, "")).localeCompare("") == 0){
            continue;
        }
        else{
            myValues.push(names[i].value);
        }
    }
    for (var i = 0; i<gtable.length;i++){
        tableValues.push(parseInt(gtable[i].value));
    }
    if (document.getElementById("shuffleOFF").checked != true){
        myValues = shuffle(myValues);
    }
    localStorage.myValues = JSON.stringify(myValues);
    localStorage.tableValues = JSON.stringify(tableValues);
}

function saveCheckBoxValues(){
    autoForwardValue = document.getElementById("autoforwardOFF");
    runasTestValue = document.getElementById("runasTEST");
    emptyTABLEValue = (document.getElementById("emptyTABLE")).checked;
    addName = (document.getElementById("addNameToTable")).value;
    var nameValue = "";
    if (addName.length > 0){
        nameValue = addName;
    }
    AFvalue = autoForwardValue.checked;
    RATvalue = runasTestValue.checked; 
    var checkboxes = [];
    checkboxes.push(AFvalue);
    checkboxes.push(RATvalue);
    checkboxes.push(emptyTABLEValue);
    checkboxes.push(nameValue);
    localStorage.checkboxes = JSON.stringify(checkboxes);
}

function submitForm(divName){
    inputs = document.getElementsByName("choosetable");
    names = document.getElementsByName("namefield");
    pikkus = names.length;
    var href = "";
    for(var i=0;i<inputs.length;i++){
         if(inputs[i].getAttribute('name').localeCompare("choosetable") == 0 && inputs[i].checked){
             href = inputs[i].getAttribute("value");
             if (href.localeCompare("./tables/16table.html") == 0 && pikkus <= 16){
                 saveCheckBoxValues();
                 window.location = href;
             }
             else if (href.localeCompare("./tables/4group.html") == 0){
                 saveCheckBoxValues();
                 window.location = href;
             }
             else if (href.localeCompare("./tables/32table.html") == 0 && pikkus <= 32 && pikkus >= 17){
                 saveCheckBoxValues();
                 window.location = href;
             }
             else if (href.localeCompare("./tables/swisspaaris.html") == 0){
                 saveCheckBoxValues();
                 if (names.length % 2 == 0){
                    window.location = href;
                 }
                 else{
                    window.location = "./tables/swisspaaritu.html";
                 }
             }
             else{
                 if (document.getElementById("runasTEST").checked == true || document.getElementById("emptyTABLE").checked == true){
                     saveCheckBoxValues();
                     window.location = href;
                 }
                 else{
                    alert("Sisestasid liiga palju/vähe nimesid selle tabeli jaoks " + href);
                 }
             }
             
         }
    }
    return false;
}

    
