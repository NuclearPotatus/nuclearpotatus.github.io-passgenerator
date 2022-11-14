///the arrays

const character= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_",".",",","#","1","2","3","4","5","6","7","8","9","0"];

///the randomization
document.getElementById('st').addEventListener("click",() => {
    var char1 = character[Math.floor(Math.random() * character.length)]
    var char2 = character[Math.floor(Math.random() * character.length)]
    var char3 = character[Math.floor(Math.random() * character.length)]
    var char4 = character[Math.floor(Math.random() * character.length)]
    var char5 = character[Math.floor(Math.random() * character.length)]
    var char6 = character[Math.floor(Math.random() * character.length)]
    var char7 = character[Math.floor(Math.random() * character.length)]
    var char8 = character[Math.floor(Math.random() * character.length)]
    var char9 = character[Math.floor(Math.random() * character.length)]
    var char10 = character[Math.floor(Math.random() * character.length)]
    var result = (char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8 + char9 + char10)
    document.getElementById("result").innerHTML = result
});

document.getElementById('ab').addEventListener("click",() => {
    window.location.replace("youtube.com");
});
