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
        }, 100);
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




    $("#Episode01").on("click",function(){

        $(".ImgEpisode1").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".ImgEpisode1").css("display","none")
    
    });

    $("#Episode02").on("click",function(){

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

    $(".map-pointer").click(function(){
        var id = $(this).attr("id");
        $(".imgEpisode").hide();
        $(".Img"+ id).show();
    })

    // episodes hover Juli

    $("#Episode03").on("click",function(){

        $(".ImgEpisode3").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".ImgEpisode3").css("display","none")
    
    });

    $("#Episode04").on("click",function(){

        $(".ImgEpisode4").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".ImgEpisode4").css("display","none")
    
    });

    $("#Episode05").on("click",function(){

        $(".ImgEpisode5").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".ImgEpisode5").css("display","none")
    
    });

    $("#Episode06").on("click",function(){

        $(".ImgEpisode6").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".ImgEpisode6").css("display","none")
    
    });

    $(".LienEpisode7").on("click",function(){

        $(".ImgEpisode7").css("display","block")
    
    });

    $(".closeButton").on("click",function(){

        $(".ImgEpisode7").css("display","none")
    
    });

    $("#Episode001").on("click",function(){

        $(".ImgEpisode1").css("display","block")
    
    });

    $("#Episode002").on("click",function(){

        $(".ImgEpisode2").css("display","block")
    
    });

    $("#Episode003").on("click",function(){

        $(".ImgEpisode3").css("display","block")
    
    });

    $("#Episode004").on("click",function(){

        $(".ImgEpisode4").css("display","block")
    
    });

    $("#Episode005").on("click",function(){

        $(".ImgEpisode5").css("display","block")
    
    });

    $("#Episode006").on("click",function(){

        $(".ImgEpisode6").css("display","block")
    
    });

});