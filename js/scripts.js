
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// skill 
// $(".tool-chart").each(function () {
//     let progress = $(this).attr("data-progress");
//     $(this).children(".tag").text(progress + "%")
//         .animate({
//             left: progress + "%",
//         }, 2500, "easeOutBounce");
//     $(this).children(".bar").children("span").animate({
//         width: progress + "%",
//     }, 1000)
// })



// skill 畫面進入時  進度條
$(window).on('scroll', function () {
    let windowHeight = window.innerHeight;
    $(".tool-chart").each(function () {
        let card = $('.in_show_cards');
        let hiddenBlock = $(this);
        let hiddenBlockTop = hiddenBlock.offset().top;
        let progress = $(this).attr("data-progress");
        if (hiddenBlockTop <= ($(window).scrollTop() + windowHeight)) {
            $(this).children(".tag").text(progress + "%").animate({
                    left: progress + "%",
                }, 2500, "easeOutBounce");
            $(this).children(".bar").children("span").animate({
                width: progress + "%",
            }, 1000)
        }else{
            $(this).children(".tag").stop().css({left: 0});
            $(this).children(".bar").children("span").stop().css({width: 0});
        }
    });
});

// card 
$(window).on('scroll', function () {

    let windowHeight = window.innerHeight;

    $('.in_card').each(function () {
        let card = $('.in_show_cards');
        let hiddenBlock = $(this);
        let hiddenBlockTop = hiddenBlock.offset().top;
        if (hiddenBlockTop <= ($(window).scrollTop() + windowHeight - 80)) {
            hiddenBlock.css({
                'transform': 'translateX(0%)',
                'opacity': '1'
            }, function () { });
            card.fadeIn(1800);
        } else {
            hiddenBlock.css({
                'transform': 'translateX(-100%)',
                'opacity': '0'
            })
        }
    });
});
// skill fadeIn
$(window).on('scroll', function () {
    $('.in_show').each(function () {
        let card = $('.in_show_card');
        let hiddenBlock = $(this);
        let hiddenBlockTop = hiddenBlock.offset().top;
        let hiddenBlockHeight = hiddenBlock.outerHeight();
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop();

        if (hiddenBlockTop + hiddenBlockHeight >= scrollTop && hiddenBlockTop <= scrollTop + windowHeight) {
            hiddenBlock.css({
                'opacity': '1'
            }, function () {
            });
            card.fadeIn(1800)
        } else {
            hiddenBlock.css({
                // 'transform': 'translateX(-100%)',
                'opacity': '0'
            });
            card.fadeOut(1800);
        }
    });
});
//bootatrap RWD
if ($(window).width() < 540) {
    let $li_sh = $('.skill').find('.li_sh');
    $li_sh.find('.col-2').removeClass('col-2').addClass('col-4');
    $li_sh.find('.col-10').removeClass('col-10').addClass('col-8');
}