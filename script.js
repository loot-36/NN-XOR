const numberInputNeurons=3;
const numberMiddleNeurons=3;
const numberOutputNeurons=1;

const topPositionOutput= 10;
const topPositionMiddle= 45;
const topPositionInput= 80;

const lernRate=0.5;

const abstand=25;
const plazierung=30;

const groesseNeuronen=50;
const groesseSynapsen=50;

class neuronalesNetz {
    constructor(numberInput, numberMiddle, numberOutput) { 
    this.obereSynapsen= new Array(numberOutput).fill(new Array(numberMiddle));
    this.untereSynapsen= new Array(numberMiddle).fill(new Array(numberInput));
    this.obereSynapsenDelta= new Array(numberOutput).fill(new Array(numberMiddle));
    this.untereSynapsenDelta= new Array(numberMiddle).fill(new Array(numberInput));
    this.inputNeurons= new Array(numberInput);
    this.middleNeurons= new Array(numberMiddle);
    this.outputNeurons= new Array(numberOutput);
    this.middleNeuronsNetto= new Array(numberMiddle);
    this.outputNeuronsNetto= new Array(numberOutput);
    }
}


function sig(neuronenWert) {
    return Math.exp(neuronenWert)/(1 + Math.exp(neuronenWert));
}

function sigAbleitung(neuronenWert) {
    return sig(neuronenWert)*(1-sig(neuronenWert));
}

function eingabeNeuronenFestlegen() {
    var eingabezahlLinks = prompt("Zahl für Eingabe Links festlegen");
    var x= 0 + numberOutputNeurons + numberMiddleNeurons;
    synapsenid = "btn" + x;
    var synapsenElement=document.getElementById(synapsenid);
    synapsenElement.innerText = eingabezahlLinks;

    var eingabezahlRechts = prompt("Zahl für Eingabe Rechts festlegen");
    var y= 1 + numberOutputNeurons + numberMiddleNeurons;
    synapsenid = "btn" + y;
    var synapsenElement=document.getElementById(synapsenid);
    synapsenElement.innerText = eingabezahlRechts;

    
    var y= 2 + numberOutputNeurons + numberMiddleNeurons;
    synapsenid = "btn" + y;
    var synapsenElement=document.getElementById(synapsenid);
    synapsenElement.innerText = 1;
}

{/* <button onclick="myFunction()">Try it</button> */}

var hauptNetz = new neuronalesNetz(numberInputNeurons, numberMiddleNeurons, numberOutputNeurons);


window.onload = function createAllElements() {
    
    
    

    for (i = 0; i < numberOutputNeurons; i++) { 
        var leftposition=50+abstand*(i-numberOutputNeurons/2);
        
        var div = document.createElement("DIV");
        div.id = "btn" + i;
        div.className = "outputNeuronen";
        div.style.position = 'absolute'
        div.style.top = topPositionOutput + "%";
        div.style.left = leftposition + "%";
        document.body.appendChild(div); 
    }
    for (i = 0; i < numberMiddleNeurons; i++) { 
        var leftposition=50+abstand*(i-numberMiddleNeurons/2);
        var x= i + numberOutputNeurons;

        var div = document.createElement("DIV");
        div.id = "btn" + x;
        div.className = "outputNeuronen";
        div.style.position = 'absolute'
        div.style.top = topPositionMiddle + "%";
        div.style.left = leftposition + "%";
        document.body.appendChild(div); 
    }
    for (i = 0; i < numberInputNeurons; i++) { 
        var leftposition=50+abstand*(i-numberInputNeurons/2);
        var x= i + numberOutputNeurons + numberMiddleNeurons;

        var div = document.createElement("DIV");
        div.id = "btn" + x;
        div.className = "outputNeuronen";
        div.style.position = 'absolute'
        div.style.top = topPositionInput + "%";
        div.style.left = leftposition + "%";
        document.body.appendChild(div); 
    }
    

    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    var randx= ((groesseNeuronen/2)/width)*100;
    var randy= ((groesseNeuronen/2)/height)*100;

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.width="100%"
    svg.style.height="100%"

    for (i = 0; i < numberOutputNeurons; i++) {
        for (j = 0; j < numberMiddleNeurons; j++) {
            
            
            
            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            var div = document.createElement("DIV");
           
            var leftposition1=50+abstand*(i-numberOutputNeurons/2)+ randx;
            var leftposition2=50+abstand*(j-numberMiddleNeurons/2)+ randx;
            var topPosition1=topPositionOutput + randy;
            var topPosition2=topPositionMiddle + randy;

            var xPos= leftposition1-((groesseSynapsen/2)/width)*100+(plazierung/100)*(leftposition2-leftposition1);
            var yPos= topPosition1-((groesseSynapsen/2)/width)*100+(plazierung/100)*(topPosition2-topPosition1);

            var synapsenid= "synapsenOben" + i + j;

            div.id = synapsenid;
            div.className = "synapsenWert";
            div.style.position = 'absolute'
            div.style.top = yPos + "%";
            div.style.left = xPos + "%";

           
            
            var lineid= "obereSynapsen" + j + x;
            line.setAttribute('id', 'lineid');
            
            line.setAttribute('x1', leftposition1 + "%");
            line.setAttribute('y1', topPosition1 + "%");
            line.setAttribute('x2', leftposition2 + "%");
            line.setAttribute('y2', topPosition2 + "%");

            line.setAttribute('stroke', 'black');
    svg.appendChild(line);
    document.body.appendChild(div); 
    
        }
    }
    for (i = 0; i < numberMiddleNeurons; i++) {
        for (j = 0; j < numberInputNeurons; j++) {
            
            
            
            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            var div = document.createElement("DIV");
            
            var leftposition1=50+abstand*(i-numberMiddleNeurons/2)+ randx;
            var leftposition2=50+abstand*(j-numberInputNeurons/2)+ randx;
            var topPosition1=topPositionMiddle + randy;
            var topPosition2=topPositionInput + randy;

            var xPos= leftposition1-((groesseSynapsen/2)/width)*100+(plazierung/100)*(leftposition2-leftposition1);
            var yPos= topPosition1-((groesseSynapsen/2)/width)*100+(plazierung/100)*(topPosition2-topPosition1);

            var synapsenid= "synapsenUnten" + i + j;

            div.id = synapsenid;
            div.className = "synapsenWert";
            div.style.position = 'absolute'
            div.style.top = yPos + "%";
            div.style.left = xPos + "%";

           
            
            var lineid= "obereSynapsen" + j + x;
            line.setAttribute('id', 'lineid');
            
            line.setAttribute('x1', leftposition1 + "%");
            line.setAttribute('y1', topPosition1 + "%");
            line.setAttribute('x2', leftposition2 + "%");
            line.setAttribute('y2', topPosition2 + "%");

            line.setAttribute('stroke', 'black');
    svg.appendChild(line);
    document.body.appendChild(div); 
    
        }
    }
    
    document.body.appendChild(svg);

   

    
}

function synapsenInit(){
    for (i = 0; i < numberOutputNeurons; i++) {
        for (j = 0; j < numberMiddleNeurons; j++) {
            
            var synapsenid= "synapsenOben" + i + j;

            var synapsenElement=document.getElementById(synapsenid);
            
            var x=Math.round((Math.random()*2-1)*100)/100;
            synapsenElement.innerText = x;
            hauptNetz.obereSynapsen[i][j]=x;


        }
    }
    for (i = 0; i < numberMiddleNeurons; i++) {
        for (j = 0; j < numberInputNeurons; j++) {
            
            var synapsenid= "synapsenUnten" + i + j;

            var synapsenElement=document.getElementById(synapsenid);
            
            var x=Math.round((Math.random()*2-1)*100)/100;
            synapsenElement.innerText = x;
            hauptNetz.untereSynapsen[i][j]=x;


        }
    }

}

function synapsenAktualisieren(){
    for (i = 0; i < numberOutputNeurons; i++) {
        for (j = 0; j < numberMiddleNeurons; j++) {
            
            var synapsenid= "synapsenOben" + i + j;

            var synapsenElement=document.getElementById(synapsenid);
            
            var wert=hauptNetz.obereSynapsen[i][j];
            wert=Math.round((wert)*100)/100;
            synapsenElement.innerText = wert;
            


        }
    }
    for (i = 0; i < numberMiddleNeurons; i++) {
        for (j = 0; j < numberInputNeurons; j++) {
            
            var synapsenid= "synapsenUnten" + i + j;

            var synapsenElement=document.getElementById(synapsenid);
            
            var wert=hauptNetz.untereSynapsen[i][j];
            wert=Math.round((wert)*100)/100;
            synapsenElement.innerText = wert;
            


        }
    }

}

function schichtAuswerten(){
    for (i = 0; i < numberMiddleNeurons; i++) {
        x=0.0;
        for (j = 0; j < numberInputNeurons; j++) {
            
            var synapsenid= "synapsenUnten" + i + j;

            var synapsenElement=document.getElementById(synapsenid);
            xaktuell = synapsenElement.innerText;
            var xyc= j + numberOutputNeurons + numberMiddleNeurons;
            synapsenid = "btn" + xyc;
            var synapsenElement=document.getElementById(synapsenid);
            yaktuell = synapsenElement.innerText;
            
            

            x=x +xaktuell*yaktuell;



        }
        var asd= i + numberOutputNeurons;

        
        synapsenid = "btn" + asd;
        var synapsenElement=document.getElementById(synapsenid);
        synapsenElement.innerText = Math.round(sig(x)*100)/100;

    }

    for (i = 0; i < numberOutputNeurons; i++) {
        x=0.0;
        for (j = 0; j < numberMiddleNeurons; j++) {
            
            var synapsenid= "synapsenOben" + i + j;

            var synapsenElement=document.getElementById(synapsenid);
            xaktuell = synapsenElement.innerText;
            var xyc= j + numberOutputNeurons;
            synapsenid = "btn" + xyc;
            synapsenElement=document.getElementById(synapsenid);
            yaktuell = synapsenElement.innerText;
            
            

            x=x +xaktuell*yaktuell;



        }
        var asd= i;

        
        synapsenid = "btn" + asd;
        var synapsenElement=document.getElementById(synapsenid);
        synapsenElement.innerText = Math.round(sig(x)*100)/100;

    }

}

function schichtAuswertenBackend(){
    for (i = 0; i < numberMiddleNeurons; i++) {
        x=0.0;
        for (j = 0; j < numberInputNeurons; j++) {
            x=x + hauptNetz.untereSynapsen[i][j]*hauptNetz.inputNeurons[j];
        }
        hauptNetz.middleNeuronsNetto[i]=x;
        hauptNetz.middleNeurons[i]=sig(x);
    }

    for (i = 0; i < numberOutputNeurons; i++) {
        x=0.0;
        for (j = 0; j < numberMiddleNeurons; j++) {
            x=x + hauptNetz.obereSynapsen[i][j]*hauptNetz.middleNeurons[j];
        }
        hauptNetz.outputNeuronsNetto[i]=x;
        hauptNetz.outputNeurons[i]=sig(x);
    }
}

function lernIterationXOR(){
    for (j =0; j < numberOutputNeurons; j++){
        for (i=0; i < numberMiddleNeurons; i++) {
            hauptNetz.obereSynapsenDelta[j][i]=0;
        }
    }

    for (j =0; j < numberMiddleNeurons; j++){
        for (i=0; i < numberInputNeurons; i++) {
            hauptNetz.untereSynapsenDelta[j][i]=0;
        }
    }


    hauptNetz.inputNeurons[0]=0;
    hauptNetz.inputNeurons[1]=0;
    hauptNetz.inputNeurons[2]=1;
    schichtAuswertenBackend();
    var delta= new Array(numberOutputNeurons);
    for (j =0; j < numberOutputNeurons; j++){
        for (i=0; i < numberMiddleNeurons; i++) {
            delta[j]=sigAbleitung(hauptNetz.outputNeuronsNetto[j])*(hauptNetz.outputNeurons[j]-0);
            
            wert=(-1)*lernRate*hauptNetz.middleNeurons[i]*delta[j];
        
            hauptNetz.obereSynapsenDelta[j][i]=hauptNetz.obereSynapsenDelta[j][i]+wert;
        }

    }

    for (j =0; j < numberMiddleNeurons; j++){
        for (i=0; i < numberInputNeurons; i++) {
            var zwischenwert=0;
            for (k=0; k<numberOutputNeurons; k++){
                zwischenwert=zwischenwert+delta[k]*hauptNetz.obereSynapsen[k][j];

            }
            xxx=sigAbleitung(hauptNetz.middleNeuronsNetto[j])*zwischenwert;
            
            wert=(-1)*lernRate*hauptNetz.inputNeurons[i]*xxx;
        
            hauptNetz.untereSynapsenDelta[j][i]=hauptNetz.untereSynapsenDelta[j][i]+wert;
        }

    }

    hauptNetz.inputNeurons[0]=0;
    hauptNetz.inputNeurons[1]=1;
    hauptNetz.inputNeurons[2]=1;
    schichtAuswertenBackend();
    var delta= new Array(numberOutputNeurons);
    for (j =0; j < numberOutputNeurons; j++){
        for (i=0; i < numberMiddleNeurons; i++) {
            delta[j]=sigAbleitung(hauptNetz.outputNeuronsNetto[j])*(hauptNetz.outputNeurons[j]-1);
            
            wert=(-1)*lernRate*hauptNetz.middleNeurons[i]*delta[j];
        
            hauptNetz.obereSynapsenDelta[j][i]=hauptNetz.obereSynapsenDelta[j][i]+wert;
        }

    }

    for (j =0; j < numberMiddleNeurons; j++){
        for (i=0; i < numberInputNeurons; i++) {
            var zwischenwert=0;
            for (k=0; k<numberOutputNeurons; k++){
                zwischenwert=zwischenwert+delta[k]*hauptNetz.obereSynapsen[k][j];

            }
            xxx=sigAbleitung(hauptNetz.middleNeuronsNetto[j])*zwischenwert;
            
            wert=(-1)*lernRate*hauptNetz.inputNeurons[i]*xxx;
        
            hauptNetz.untereSynapsenDelta[j][i]=hauptNetz.untereSynapsenDelta[j][i]+wert;
        }

    }

    hauptNetz.inputNeurons[0]=1;
    hauptNetz.inputNeurons[1]=0;
    hauptNetz.inputNeurons[2]=1;
    schichtAuswertenBackend();
    var delta= new Array(numberOutputNeurons);
    for (j =0; j < numberOutputNeurons; j++){
        for (i=0; i < numberMiddleNeurons; i++) {
            delta[j]=sigAbleitung(hauptNetz.outputNeuronsNetto[j])*(hauptNetz.outputNeurons[j]-1);
            
            wert=(-1)*lernRate*hauptNetz.middleNeurons[i]*delta[j];
        
            hauptNetz.obereSynapsenDelta[j][i]=hauptNetz.obereSynapsenDelta[j][i]+wert;
        }

    }

    for (j =0; j < numberMiddleNeurons; j++){
        for (i=0; i < numberInputNeurons; i++) {
            var zwischenwert=0;
            for (k=0; k<numberOutputNeurons; k++){
                zwischenwert=zwischenwert+delta[k]*hauptNetz.obereSynapsen[k][j];

            }
            xxx=sigAbleitung(hauptNetz.middleNeuronsNetto[j])*zwischenwert;
            
            wert=(-1)*lernRate*hauptNetz.inputNeurons[i]*xxx;
        
            hauptNetz.untereSynapsenDelta[j][i]=hauptNetz.untereSynapsenDelta[j][i]+wert;
        }

    }

    hauptNetz.inputNeurons[0]=1;
    hauptNetz.inputNeurons[1]=1;
    hauptNetz.inputNeurons[2]=1;
    schichtAuswertenBackend();
    var delta= new Array(numberOutputNeurons);
    for (j =0; j < numberOutputNeurons; j++){
        for (i=0; i < numberMiddleNeurons; i++) {
            delta[j]=sigAbleitung(hauptNetz.outputNeuronsNetto[j])*(hauptNetz.outputNeurons[j]-0);
            
            wert=(-1)*lernRate*hauptNetz.middleNeurons[i]*delta[j];
        
            hauptNetz.obereSynapsenDelta[j][i]=hauptNetz.obereSynapsenDelta[j][i]+wert;
        }

    }

    for (j =0; j < numberMiddleNeurons; j++){
        for (i=0; i < numberInputNeurons; i++) {
            var zwischenwert=0;
            for (k=0; k<numberOutputNeurons; k++){
                zwischenwert=zwischenwert+delta[k]*hauptNetz.obereSynapsen[k][j];

            }
            xxx=sigAbleitung(hauptNetz.middleNeuronsNetto[j])*zwischenwert;
            
            wert=(-1)*lernRate*hauptNetz.inputNeurons[i]*xxx;
        
            hauptNetz.untereSynapsenDelta[j][i]=hauptNetz.untereSynapsenDelta[j][i]+wert;
        }

    }

    for (j =0; j < numberOutputNeurons; j++){
        for (i=0; i < numberMiddleNeurons; i++) {
            hauptNetz.obereSynapsen[j][i]=hauptNetz.obereSynapsen[j][i]+hauptNetz.obereSynapsenDelta[j][i];
        }
    }

    for (j =0; j < numberMiddleNeurons; j++){
        for (i=0; i < numberInputNeurons; i++) {
            hauptNetz.untereSynapsen[j][i]=hauptNetz.untereSynapsen[j][i]+hauptNetz.untereSynapsenDelta[j][i];
        }
    }

    synapsenAktualisieren();
}
