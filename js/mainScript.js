
//  $(document).ready(function () {
//     $('#page_wrapper').append('<div id="top">Back to Top</div>');
//     $(window).scroll(function () {
//         if ($(window).scrollTop() != 0) {
//             $('#top').fadeIn();
//         } else {
//             $('#top').fadeOut();
//         }
//     });
//     $('#top').click(function () {
//         $('html, body').animate({ scrollTop: 0 }, 500);
//     });
// });

var slide = $(".bxslider  li");
    var sliderimg, lsfullpage;
    var sections= $("#fullpage .section");
    function loadscrollfullpage() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if ($(window).width() > 1290 ){
        if ( msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        
            lsfullpage = $('#fullpage').fullpage({
                anchors: ['slidehome', 'overview', 'location', 'modelhouse', 'video', 'utilities', 'news','footer'],
                menu: '#fullpage_nav ul',
                verticalCentered:false,
                scrollOverflow: false,
                scrollOverflowOptions: {
                    scrollbars: true,
                    mouseWheel: true,
                    hideScrollbars: false,
                    fadeScrollbars: false,
                    disableMouse: false
                },
                afterLoad: function(anchorLink, index){
                    if(index == 1){
                        $(".hotline-sticky").removeClass("sticky");
                        $(".top-head").removeClass("sticky");
                        $("#gotop").addClass("hidden");
                    }
                    else{
                        $(".hotline-sticky").addClass("sticky");
                        $(".top-head").addClass("sticky");
                        $("#gotop").removeClass("hidden");
                    }
                },
                onLeave: function(index, nextIndex, direction){
                    var leavingSection = $(this);
                    if(sections[nextIndex-1]){
                       $( ".animated" ,sections[nextIndex-1]).addClass('go');
                    }
                },
                responsiveWidth: 991,
            }); 
        }
        else {      
        
            lsfullpage = $('#fullpage').fullpage({
                anchors: ['slidehome', 'overview', 'location', 'modelhouse', 'video', 'utilities', 'news','footer'],
                menu: '#fullpage_nav ul',
                verticalCentered:false,
                scrollOverflow: true,
                scrollOverflowOptions: {
                    scrollbars: true,
                    mouseWheel: true,
                    hideScrollbars: false,
                    fadeScrollbars: false,
                    disableMouse: false
                },
                afterLoad: function(anchorLink, index){
                    if(index == 1){
                        $(".hotline-sticky").removeClass("sticky");
                        $(".top-head").removeClass("sticky");
                        $("#gotop").addClass("hidden");
                    }
                    else{
                        $(".hotline-sticky").addClass("sticky");
                        $(".top-head").addClass("sticky");
                        $("#gotop").removeClass("hidden");
                    }
                },
                onLeave: function(index, nextIndex, direction){
                    var leavingSection = $(this);
                    if(sections[nextIndex-1]){
                       $( ".animated" ,sections[nextIndex-1]).addClass('go');
                    }
                },
                responsiveWidth: 991,
            }); 
        }
    }
}
    $(window).resize(function () {
        if(lsfullpage != null)
            $.fn.fullpage.destroy('all');
        loadscrollfullpage();
        if($(window).width() > 1200 ){
            $(".mainslide .bxslider li span.item").height($(window).height() - 95);
            $("#fullpage .auto-height").height($(window).height() - 60);
        }
        else if($(window).width() > 992 ){
            $(".mainslide .bxslider li span.item").height($(window).height() - 60);
            $("#fullpage .auto-height").height($(window).height() - 60);
        }
        else{
            $(".mainslide .bxslider li span.item").css('height', '');
            $("#fullpage .auto-height").css('height', '');
        }
    });
    
    $(document).ready(function () {
        $('.page-header .nav li.home').addClass('active');
        loadscrollfullpage();
        if($(window).width() > 1200 ){
            $(".mainslide .bxslider li span.item").height($(window).height() - 95);
            $("#fullpage .auto-height").height($(window).height() - 60);
        }
        else if($(window).width() > 992 ){
            $(".mainslide .bxslider li span.item").height($(window).height() - 60);
            $("#fullpage .auto-height").height($(window).height() - 60);
        }
        else{
            $(".mainslide .bxslider li span.item").css('height', '');
            $("#fullpage .auto-height").css('height', '');
        }
       sliderimg = $('.mainslide .bxslider').bxSlider({
            auto: true,
            mode: 'fade',
            speed: 1500,
            pause: 5000,
            captions: false,
            pager: false,
            controls: true,
            onSliderLoad: function (currentIndex) {
                var src = "";
                if (currentIndex < $(slide).length - 1) {
                    src = $(slide[currentIndex + 1]).data("src");
                }
                else {
                    src = $(slide[0]).data("src");
                }
                $(".bx-controls-direction").append("<div class='next-thumb'><img src='" + src + "' alt='' /></div>");
                
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                if (newIndex < $(slide).length - 1) {

                    src = $(slide[newIndex + 1]).data("src");
                }
                else {
                    src = $(slide[0]).data("src");
                }
                $(".bx-controls-direction .next-thumb img").attr("src", src);
                title = $(slide[newIndex]).data("title");
                $(".home-gallery .slide-content").html(title);
                $(".home-gallery .slide-content .doanimation").addClass("animated go");
            }
        });
    });
    $(document).ready(function () {
        $('.bxslideradv').bxSlider({
            auto: true,
            mode: 'fade',
            captions: false,
            pager: false,
            controls: false
        });
});