jQuery(document).ready(function($) {
    
    var event = new Event('change');
    window.addEventListener(
        "change",
        (e) => {
            if (window.innerHeight < 500) {
                $('.turnDeviceNotification').css('display', 'flex').css('flex-direction', 'column').css('align-items', 'center').css('justify-content', 'center');
                $('#main-content').addClass('display-none');
            } else {
                $('#main-content').removeClass('display-none');
                $('.turnDeviceNotification').css('display', 'none');
            }
        },
        false,
    );
    window.dispatchEvent(event);

    screen.orientation.addEventListener('change', function (e) {
        if (e.currentTarget.type === 'landscape-primary' && window.innerWidth <= 576) {
            $('.turnDeviceNotification').css('display', 'flex').css('flex-direction', 'column').css('align-items', 'center').css('justify-content', 'center');
            $('#main-content').addClass('display-none');
        } else {
            $('#main-content').removeClass('display-none');
            $('.turnDeviceNotification').css('display', 'none');
        }
    })

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

    $('#hidden-menu li a').click(() => {
        setTimeout(() => {
            $('#hidden-menu').addClass('slide-out-top');
            $('#small-menu').removeClass('display-none');
        }, 200);
    })

 })