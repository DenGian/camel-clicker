let camel = 0;
let clicks = 1;
let jamalCost = 40;
let jamals = 0;
let nissanCost = 600;
let nissans = 0;
let shaniquaCost = 3000;
let shaniquas = 0;
let teaCost = 10000;
let teas = 0;
let oilCost = 20000;
let oils = 0;
let sheikhCost = 50000;
let sheikhs = 0;
let sultanCost = 1000000;
let sultans = 0;

setInterval(function (){
    document.title = camel+' camels - Camel Clicker';
    })

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
        jamalCost=Math.round(jamalCost*1.35);
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
        nissanCost=Math.round(nissanCost*1.1);
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
        shaniquaCost=Math.round(shaniquaCost*1.20);
        document.getElementById('score').innerHTML = camel;
        document.getElementById('shaniquaCost').innerHTML = shaniquaCost;
        document.getElementById('shaniquas').innerHTML = shaniquas;
    }
}
setInterval(function (){
    camel = camel+Math.floor(shaniquas*5);
    document.getElementById('score').innerHTML = camel;
},1000)

document.getElementById('tea').addEventListener('click',upgrade4);

function upgrade4(){
    if (camel >=teaCost){
        camel=camel-teaCost;
        teas=teas+1;
        teaCost=Math.round(teaCost*1.25);
        document.getElementById('score').innerHTML = camel;
        document.getElementById('teaCost').innerHTML = teaCost;
        document.getElementById('teas').innerHTML = teas;
    }
}
setInterval(function (){
    camel = camel+Math.floor(teas*20);
    document.getElementById('score').innerHTML = camel;
},1000)

document.getElementById('oil').addEventListener('click',upgrade5);

function upgrade5(){
    if (camel >=oilCost){
        camel=camel-oilCost;
        oils=oils+1;
        oilCost=Math.round(oilCost*1.35);
        document.getElementById('score').innerHTML = camel;
        document.getElementById('oilCost').innerHTML = oilCost;
        document.getElementById('oils').innerHTML = oils;
    }
}
setInterval(function (){
    camel = camel+Math.floor(oils*50);
    document.getElementById('score').innerHTML = camel;
},1000)

document.getElementById('sheikh').addEventListener('click',upgrade6);

function upgrade6(){
    if (camel >=sheikhCost){
        camel=camel-sheikhCost;
        sheikhs=sheikhs+1;
        sheikhCost=Math.round(sheikhCost*1.40);
        document.getElementById('score').innerHTML = camel;
        document.getElementById('sheikhCost').innerHTML = sheikhCost;
        document.getElementById('sheikhs').innerHTML = sheikhs;
    }
}
setInterval(function (){
    camel = camel+Math.floor(sheikhs*250);
    document.getElementById('score').innerHTML = camel;
},1000)

document.getElementById('sultan').addEventListener('click',upgrade7);

function upgrade7(){
    if (camel >=sultanCost){
        camel=camel-sultanCost;
        sultans=sultans+1;
        sultanCost=Math.round(sultanCost*1.45);
        document.getElementById('score').innerHTML = camel;
        document.getElementById('sultanCost').innerHTML = sultanCost;
        document.getElementById('sultans').innerHTML = sultans;
    }
}
setInterval(function (){
    camel = camel+Math.floor(sultans*1000);
    document.getElementById('score').innerHTML = camel;
},30000)
