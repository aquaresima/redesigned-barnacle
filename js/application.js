$(document).ready(function(){

	$("#en").css("display","block")
	$("#it").css("display","none")

	$("#enButton").on("click", function(){
		$("#en").css("display","block")
		$("#it").css("display","none")
	});

	$("#itButton").on("click", function(){
		$("#en").css("display","none")
		$("#it").css("display","block")
	})
    
});
		function openNav() {
			document.getElementById("mySidepanel").style.width = "250px";
		}
		
		function closeNav() {
			document.getElementById("mySidepanel").style.width = "0";
		} 