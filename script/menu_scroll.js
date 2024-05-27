jQuery(document).ready(function ($) {

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.navbar-style').addClass('manu-black');
        } else {
            $('.navbar-style').removeClass('manu-black');
        }
    });

    var header = document.querySelector("header");
    var links = document.querySelectorAll(".link");
    var sections = document.querySelectorAll('.sections');
    window.onscroll = function () {

        var current = 'home';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        })
        links.forEach((item) => {
            item.classList.remove('active');
            if (item.href.includes(current)) {
                item.classList.add("active")
            } else {
                item.classList.remove("active")

            }


        })
    }

})