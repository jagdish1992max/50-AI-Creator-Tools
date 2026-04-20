function generate(type){

let topic=document.getElementById("topic").value

let result=""

switch(type){

case "title":
result="Top 5 secrets about "+topic
break

case "script":
result="आज हम बात करने वाले हैं "+topic+" के बारे में..."
break

case "hook":
result="अगर आप "+topic+" नहीं जानते तो आप बहुत कुछ miss कर रहे हैं!"
break

case "idea":
result="3 shocking facts about "+topic
break

case "hashtag":
result="#viral #shorts #reels #trending"
break

case "thumbnail":
result="Big text + shocked face + red arrow"
break

case "description":
result="In this video we explore "+topic
break

case "tags":
result=topic+", viral video, trending"
break

case "trend":
result=topic+" vs reality video idea"
break

case "growthtip":
result="Post daily Shorts about "+topic
break

default:
result="AI tool result for "+topic

}

document.getElementById("result").innerText=result

}
