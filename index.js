var buttons = document.querySelectorAll(".drum");
var audioTom1 = new Audio('sounds/tom-1.mp3');

buttons.forEach( drum =>
    drum.addEventListener("click", function () { 
        handleClick(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
);


document.addEventListener("keypress", function (Event) {
    handleClick(Event.key);
    buttonAnimation(Event.key);

})

function handleClick(key) {
    
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(key) {
    var activeKey = document.querySelector("." + key);
    activeKey.classList.add("pressed");
    setTimeout(() => {
        activeKey.classList.remove("pressed");
    }, 100);
}