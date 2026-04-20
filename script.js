function login(){

let email=document.getElementById("email").value

let pass=document.getElementById("password").value

if(email && pass){

window.location="dashboard.html"

}else{

alert("Enter email and password")

}

}



function generate(type){

let topic=document.getElementById("topic").value

if(topic==""){

document.getElementById("result").innerText="Enter topic"

return

}

let result=""

switch(type){

case "title":

result="Top 5 Secrets About "+topic

break

case "script":

result="आज हम बात करने वाले हैं "+topic+" के बारे में..."

break

case "hook":

result="अगर आप "+topic+" नहीं जानते तो यह आपको चौंका देगा!"

break

case "idea":

result="3 shocking facts about "+topic

break

case "tags":

result="#viral #shorts #trending #"+topic

break

}

document.getElementById("result").innerText=result

}
