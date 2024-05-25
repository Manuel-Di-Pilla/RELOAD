 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });
 
jQuery(document).ready(function($) {

    setTimeout(function() { 
        $("#background").addClass("background-image puff-in-center");
        setTimeout(function(){
            $("#filigrana").addClass("filigrana-image slide-in-fwd-center");
        }, 700)
        $("#container-logo").addClass("move-up");
        $("#home-desc").addClass("move-up-2");
    }, 3000);

    $('#small-menu').click(function () {
        $('#hidden-menu').removeClass('display-none');
        $('#small-menu').addClass('display-none');
    });

    $('#close').click(function () {
        $('#hidden-menu').addClass('display-none');
        $('#small-menu').removeClass('display-none');
    });

 })