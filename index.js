
//yha 7 nahi likha kyuki what if i would like to add a new button baad me
// query selector me  element "button" k jagha ".drum"(class) use kiya kyuki agar footer me ek button element hota 
// to wo bhi add ho jaata couting me aur uss par bhi hc call hota
//addEventListener k baare me aur padho ... click ko chor kar aur bhi types hai
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",hc);
}
// for loop me dekho querySelectorAll use kiya hai -- IMP
function hc()
{  
    //this.style.color="black"
     var buttonInnerHTML=this.innerHTML;
     makesound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);

    
   
}
// Detecting the key pressed
/* parameter event allows us to see the key(event) that triggered the eventlistener and this event contains the property called key which tells us which keyboard was pressed                                    */
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key)
{
    switch (key) {
        case "w":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        
        case "j":
            var audio=new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
        
        case "k":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
                    
        
        
        default:
            alert("press right button");
            break;
    }
    
}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    //activeButton.classList.add("game-over");
    //activeButton.classList.add("red");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },200);
}











// there is another way to call function hc inside EventListener
// anonymously call kar sakte hai..function jiska koi naam nahi
// ex
//function (){.......}
// document.querySelectorAll("button")[i].addEventListener("click",function(){
// alert("It works");}
//});









//var audio=new Audio('sounds/tom-1.mp3');
//audio.play();
