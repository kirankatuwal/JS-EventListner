var numberOfDrum  = document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrum;i++){


    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonValue = this.textContent;
        makeSound(buttonValue);
        buttonAnimation(buttonValue);
    }); 
}

document.addEventListener("keypress",function(event){
    makeSound(event.key); 
    buttonAnimation(event.key);
})

function makeSound (key){
    switch(key){
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "j":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "k":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "l":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
    }
}

function buttonAnimation(currentKey){
    var activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    setTimeout (function(){
        activeBtn.classList.remove("pressed");
    },100);
}