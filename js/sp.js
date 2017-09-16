$(function(){

    if ((navigator.userAgent.indexOf('iPhone') > 0 && 
         navigator.userAgent.indexOf('iPad') == -1) ||
        navigator.userAgent.indexOf('iPod') > 0 || 
        navigator.userAgent.indexOf('Android') > 0) {
        // スマホ用のページにリダイレクトする
        
    } else {
        location.href = '/';
    }

    //おじいちゃんおばあちゃんのアニメーション
    setTimeout(function(){
        $("#granpa").removeClass("hidden")
        $("#granma").removeClass("hidden")
        $("#granpa").addClass("animated bounceIn");
        $("#granma").addClass("animated bounceIn");
    },600);

    setTimeout(function(){
        $("#titleTop").removeClass("hidden")
        $("#titleBottom").removeClass("hidden")
        $("#titleTop").addClass("animated bounceInDown");
        $("#titleBottom").addClass("animated bounceInDown");


        $("#girl").removeClass("hidden")
        $("#boy").removeClass("hidden")
        $("#girl").addClass("animated fadeIn");
        $("#boy").addClass("animated fadeIn");
    },800);

    setTimeout(function(){
        $("#leftTop").removeClass("hidden")
        $("#leftBottom").removeClass("hidden")
        $("#rightTop").removeClass("hidden")
        $("#rightBottom").removeClass("hidden")

        $("#leftTop").addClass("animated bounceInLeft");
        $("#leftBottom").addClass("animated bounceInLeft");
        $("#rightTop").addClass("animated bounceInRight");
        $("#rightBottom").addClass("animated bounceInRight");
    },1000);

    setTimeout(function(){
        $("#entryPriod").removeClass("hidden")
        $("#entryPriod").addClass("animated fadeIn");
    },1300);
    
    setTimeout(function(){
        $("#submit").removeClass("hidden")
        $("#submit").addClass("animated fadeInUp");
    },1500);

    
//    setTimeout(function(){
//        var bottom = $("#ichinichi").css("bottom");
//        var right = $("#ichinichi").css("right");
//        var width = $("#ichinichi").css("width");
//        $("#ichinichi").removeClass("hidden")
//        $("#ichinichi").css({
//            bottom: "729px",
//            right: "-2529px",
//            width: "10000px",
//            height: "2000px"
//        });
//        $("#ichinichi").animate({
//            bottom: bottom,
//            right: right,
//            width: width,
//            height: "50px"
//        },function(){
//            console.log("ok");
//            $("#entryPriod").removeClass("fadeIn");
//            $("#entryPriod").addClass("bounceIn");
//
//        });
//    },2000);

    
    
    
    $("#toTop").on("click",function(){
        $("html,body").animate({scrollTop:$('body').offset().top});
    });
    
    
})