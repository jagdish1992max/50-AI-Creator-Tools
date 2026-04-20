function generate(type){

let topic = document.getElementById("topic").value
let result = ""

if(!topic){
result="Please enter a topic first"
document.getElementById("result").innerText=result
return
}

switch(type){

case "title":
result="Top 5 Secrets About " + topic
break

case "script":
result="आज हम बात करने वाले हैं " + topic + " के बारे में। लेकिन जो आप जानने वाले हैं वो शायद आपने पहले कभी नहीं सुना होगा..."
break

case "hook":
result="अगर आप " + topic + " के बारे में नहीं जानते तो यह वीडियो आपको चौंका सकती है!"
break

case "idea":
result="3 shocking facts about " + topic
break

case "hashtag":
result="#viral #shorts #reels #trending #youtube"
break

case "thumbnail":
result="Shocked face + big text 'SECRET' + red arrow pointing at " + topic
break

case "description":
result="In this video we explore amazing facts about " + topic
break

case "tags":
result= topic + ", viral video, trending, shorts"
break

case "trend":
result="Trending video idea: The truth about " + topic
break

case "growthtip":
result="Daily shorts about " + topic + " can grow your channel fast"
break

default:
result="AI generated idea about " + topic

}

document.getElementById("result").innerText=result

}
