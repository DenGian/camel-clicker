var camel = 0;
var clicks = 1;


document.getElementById('camel').addEventListener('click', addCamel);
function addCamel(){
camel=camel+clicks;
document.getElementById('score').innerHTML=camel.toFixed(2)
}