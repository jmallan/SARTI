$(document).ready(function() {
    $("#slider div:gt(0)").hide();
    setInterval(function(){
        $("#slider div:first-child").fadeOut(0)
            .next("div").fadeIn(1000)
            .end().appendTo("#slider");
        var options ={};
        $("p").effect("slide", options, 500, callback);


        function callback(){
            setTimeout(function(){
                $("p").fadeIn();
            }, 300);
        }
    }, 3000);
});