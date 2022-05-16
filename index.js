var camel = 0;
var clicks = 1;
var jamalCost = 100;
var jamals = 0;

document.getElementById('camel').addEventListener('click', addCamel);

function addCamel() {
    camel = camel + clicks;
    document.getElementById('score').innerHTML = camel.toFixed(2)
}
document.getElementById('jamal').addEventListener('click',upgrade1);

function upgrade1(){
    if(camel>=jamalCost){
        camel=camel-jamalCost;
        jamals=jamals+1;
        jamalCost=Math.round(jamalCost*1.3);
        clicks=clicks+1;
        document.getElementById('score').innerHTML = camel.toFixed(2);
        document.getElementById('jamalCost').innerHTML = jamalCost.toFixed(2);
        document.getElementById('jamals').innerHTML = jamals;
    }
}
