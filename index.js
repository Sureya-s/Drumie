for(var i= 0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    var a = this.innerHTML;
    Sound(a);
    animation(a);
    
});
}
document.addEventListener("keydown", function(event){
    Sound(event.key);
    animation(event.key);
})
function Sound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play()
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play()
            break;
        case "s":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play()
            break;
        case "d":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play()
            break; 
        case "j":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play()
            break;
        case "k":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play()
            break;  
        case "l":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play()
            break;             
    
        default: console.log(val);
            break;
    }

}
function animation(value){
    var anime = document.querySelector("." + value);
    anime.classList.add("pressed");
    setTimeout(function(){
        anime.classList.remove("pressed");

    }, 50);
}

