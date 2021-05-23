$(document).ready(function(){
    
    $(".object").draggable({
        start: function(){
            $(".object").css({"z-index": 0});
            $(this).css({"z-index": 100});
        }
    });

    $(".thoughtsWindows").draggable({
        start: function(){
            $(".thoughtsWindows").css({"z-index": 0});
            $(this).css({"z-index": 100});
        }
    });

    function nombre(value){
        return  Math.floor(Math.random() * value);
    }
    
    $(".object").each(function(){
        $(this).css({"top": nombre(80) + "%", "left": nombre(90) + "%"}); 
    });

    $(".buttonEnter").click(function(){
        $(".landingPage").fadeOut(600);
    })
});