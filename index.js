var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for mouse events
for(var i = 0 ; i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){
        // this--> this refers to particular button selected each i selected.
        var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);
        ButtonAnimation(buttonInnerHtml);
        


    });
   
}
// for keyboard events
document.addEventListener("keydown" , function(event){
    //event is a object whose property is key. We pass in whatever event has happened.
    makesound(event.key);
    ButtonAnimation(event.key);
});

function makesound(key){
    switch(key){
        case "w":
            var snd = new Audio("sounds/tom-1.mp3");
            snd.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHtml);
    }

}

function ButtonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    // we add the class which picturizes that the button is pressed.
    activeButton.classList.add("pressed");

    // after some delay we remove that class , because we dont need it anymore and want button to look normal
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}


