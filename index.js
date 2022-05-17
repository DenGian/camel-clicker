var camel = 0;
var clicks = 1;
var jamalCost = 100;
var jamals = 0;
var nissanCost = 1000;
var nissans = 0;
var shaniquaCost = 5000;
var shaniquas = 0;

document.getElementById('camel').addEventListener('click', addCamel);

function addCamel() {
    camel = camel + clicks;
    document.getElementById('score').innerHTML = camel
}
document.getElementById('jamal').addEventListener('click',upgrade1);

function upgrade1(){
    if(camel>=jamalCost){
        camel=camel-jamalCost;
        jamals=jamals+1;
        jamalCost=Math.round(jamalCost*1.3);
        clicks=clicks+1;
        document.getElementById('score').innerHTML = camel;
        document.getElementById('jamalCost').innerHTML = jamalCost;
        document.getElementById('jamals').innerHTML = jamals;
    }
}
document.getElementById('nissan').addEventListener('click',upgrade2);

function upgrade2(){
    if (camel >=nissanCost){
        camel=camel-nissanCost;
        nissans=nissans+1;
        nissanCost=Math.round(nissanCost*1.35);
        document.getElementById('score').innerHTML = camel;
        document.getElementById('nissanCost').innerHTML = nissanCost;
        document.getElementById('nissans').innerHTML = nissans;
    }
}
setInterval(function (){
    camel = camel+nissans;
    document.getElementById('score').innerHTML = camel;
},1000)

document.getElementById('shaniqua').addEventListener('click',upgrade3);

function upgrade3(){
    if (camel >=shaniquaCost){
        camel=camel-shaniquaCost;
        shaniquas=shaniquas+1;
        shaniquaCost=Math.round(shaniquaCost*1.40);
        document.getElementById('score').innerHTML = camel;
        document.getElementById('shaniquaCost').innerHTML = shaniquaCost;
        document.getElementById('shaniquas').innerHTML = shaniquas;
    }
}
setInterval(function (){
    camel = camel+Math.floor(shaniquas*3);
    document.getElementById('score').innerHTML = camel;
},1000)