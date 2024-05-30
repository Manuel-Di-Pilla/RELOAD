jQuery(document).ready(function($) {
    
    window.screen.orientation.lock("natural");

    setTimeout(function() { 
        $("#background").addClass("background-image puff-in-center");
        setTimeout(() => {

            setTimeout(function(){
                $("#filigrana").addClass("filigrana-image slide-in-fwd-center");
            }, 500)

            $("#container-logo").addClass("move-up");
            $("#home-desc").addClass("move-up-2");
            $("#expanded-menu").removeClass("display-none").addClass("display-block slide-in-top");
            $('#small-menu').removeClass('display-none');

            setTimeout(() => {
                $('#main').removeClass('display-none');
                AOS.init({
                    duration: 800,
                    easing: 'slide',
                    once: false
                });

                var splide = new Splide('.splide', {
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                });

                splide.mount();
            }, 1200);

        }, 200);
    }, 3000);

    $('#small-menu').click(function () {
        $('#small-menu').addClass('display-none');
        $('#hidden-menu').removeClass('display-none slide-out-top').addClass('slide-in-top');
    });

    $('#close').click(function () {
        $('#hidden-menu').addClass('slide-out-top');
        $('#small-menu').removeClass('display-none');
    });

 })
