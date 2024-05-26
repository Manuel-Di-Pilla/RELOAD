 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });
 
jQuery(document).ready(function($) {

    setTimeout(function() { 
        $("#background").addClass("background-image puff-in-center");
        setTimeout(() => {
            setTimeout(function(){
                $("#filigrana").addClass("filigrana-image slide-in-fwd-center");
            }, 500)
            $("#container-logo").addClass("move-up");
            $("#home-desc").addClass("move-up-2");
            $("#expanded-menu").removeClass("visibility-hidden").addClass("visibility-visible slide-in-top");
            $('#small-menu').removeClass('display-none');
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