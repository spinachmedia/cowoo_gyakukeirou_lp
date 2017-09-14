var loopAnimationVertical = function(element,valueStart,valueEnd){
    var top = $(element).offset().top; 
    if(top > valueStart - 5 && top < valueStart + 5){
        $(element).animate({
            top: valueEnd + "px"
        },800,"swing");
    } else {
        $(element).animate({
            top: valueStart + "px"
        },800,"swing");
    }
}

var viveAnimation = function(element){
//    $(element).removeClass("animated shake");
    $(element).addClass("animated shake");
    setTimeout(function(){
        $(element).removeClass("animated shake");
    },1000);
}


$(function(){
    
    var listenEvents = [
        'webkitTransitionEnd', // webkit(Chrome1.0, Safari3.2)
        'oTransitionEnd',      // Opera10.5
        'otransitionend',      // Opera12
        'transitionend'        // IE10, Fx4以降, 12.10以降
    ];
    
    if ((navigator.userAgent.indexOf('iPhone') > 0 && 
         navigator.userAgent.indexOf('iPad') == -1) ||
        navigator.userAgent.indexOf('iPod') > 0 || 
        navigator.userAgent.indexOf('Android') > 0) {
        // スマホ用のページにリダイレクトする
        location.href = '/sp/';
    }
    
    //おじいちゃんおばあちゃんのアニメーション
    setTimeout(function(){
        $("#granpa").removeClass("hidden")
        $("#granma").removeClass("hidden")
        $("#granpa").addClass("animated bounceIn");
        $("#granma").addClass("animated bounceIn");
    },600);
    
    //おじいちゃんおばあちゃんのアニメーション
    setTimeout(function(){
        loopAnimationVertical("#granpa",337,360);
        setInterval(function(){loopAnimationVertical("#granpa",337,360)}, 1050);
    },1500);
    
    //おじいちゃんおばあちゃんのアニメーション
    setTimeout(function(){
        loopAnimationVertical("#granma",380,400);
        setInterval(function(){loopAnimationVertical("#granma",380,400)}, 1050);
    },1800);
    
    setTimeout(function(){
        viveAnimation("#entryButton");
        setInterval(function(){viveAnimation("#entryButton")}, 3000);
    },1800);
    
    
    
    
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
        $("#ichinichi").removeClass("hidden")
        $("#ichinichi").css({
            bottom: "729px",
            right: "-2529px",
            width: "10000px",
            height: "2000px"
        });
        $("#ichinichi").animate({
            bottom: "125px",
            right: "305px",
            width: "250px",
            height: "50px"
        },function(){
            console.log("ok");
            $("#entryPriod").removeClass("fadeIn");
            $("#entryPriod").addClass("bounceIn");

        });
    },2000);

    
    
    
    $("#toTop").on("click",function(){
        $("html,body").animate({scrollTop:$('body').offset().top});
    });
    
    
})