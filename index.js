//redirect

function Redirect() {
    location.assign("https://www.youtube.com");
};

document.getElementById('ab').addEventListener("click",() => {
    Redirect();
});

//slider

var passSlider = document.getElementById("slider");
var output = document.getElementById("passch");

output.innerHTML = passSlider.value;
passSlider.oninput = function() {
    output.innerHTML = this.value;
} 

console.log(passSlider.value)

///the arrays

const character= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_",".",",","#","1","2","3","4","5","6","7","8","9","0"];

///the randomization part

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
    var char11 = character[Math.floor(Math.random() * character.length)]
    var char12 = character[Math.floor(Math.random() * character.length)]

    //amount of chars in password

    switch(passSlider.value) {
        case "8":
            var result = (char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8)
            break;
        case "9":
            var result = (char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8 + char9)
            break;
        case "10":
            var result = (char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8 + char9 + char10)
            break;
        case "11":
            var result = (char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8 + char9 + char10 + char11)
            break;
        case "12":
            var result = (char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8 + char9 + char10 + char11 + char12)
            break;
        default:
            alert("Somehow, it broke.")
            break;
    }
    document.getElementById("result").innerHTML = result
});
 
