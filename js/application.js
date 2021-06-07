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

    $(".quotes, #images, .objectTestIndex, #trigger, #trigger2").draggable({
        start: function(){
            $(".quotes, #images, .objectTestIndex, #trigger").css({"z-index": 0});
            $(this).css({"z-index": 100});
        }
    });

    $(".wholeBoxEditable").draggable();

    // $(".personnalText").draggable({
    //     start: function(){
    //         $(".personnalText").css({"z-index": 0});
    //         $(this).css({"z-index": 100});
    //     }
    // });

        $(".personnalText").draggable()
    .click(function() {
        $(this).draggable( {disabled: false});
    }).dblclick(function() {
        $(this).draggable({ disabled: true });
    });

    function nombre(value){
        return  Math.floor(Math.random() * value);
    }
    
    $(".object").each(function(){
        $(this).css({"top": nombre(80) + "%", "left": nombre(90) + "%"}); 
    });

    function positionFloating(id){
        $(id).css({"top": nombre(70) + "%", "left": nombre(70) + "%"}); 
    }

    function floating(id){
        setTimeout(function(){
            positionFloating(id);
        }, 10);
        setInterval(function(){
            positionFloating(id);
        }, 10000);
        
    }

    $(".objectCamille").each(function(){
        floating($(this));
    }); 



    $("#trigger").each(function(){
        $(this).css({"top": nombre(80) + "%", "left": nombre(90) + "%"}); 
    });
    $("#trigger2").each(function(){
        $(this).css({"top": nombre(80) + "%", "left": nombre(90) + "%"}); 
    });

    $(".buttonEnter").click(function(){
        $(".landingPage").fadeOut(600);
    })


    $(".objectCamille").each(function(){
        $(this).css({"top": nombre(70) + "%", "left": nombre(70) + "%"}); 
    });




    $(".LienEpisode1").on("click",function(){

        $(".ImgEpisode1").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".ImgEpisode1").css("display","none")
    
    });

    $(".LienEpisode2").on("click",function(){

        $(".ImgEpisode2").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".ImgEpisode2").css("display","none")
    
    });

    $("#aboutUs").on("click",function(){

        $(".hoverAboutUs").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".hoverAboutUs").css("display","none")
    
    });

});