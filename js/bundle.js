function handleTyping(){
    $(".element").typed({
        strings:["a Full-Stack Software Engineer","an endurance athlete","a resourceful Problem Solver"],
        typeSpeed:100,
        starDelay:200,
        backDelay:800,
        loop:!0,
        showCursor:!0,
        cursorChar:"|"
    })
}
    
$("document").ready(function(){
    handleTyping()
});