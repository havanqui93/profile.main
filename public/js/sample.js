(function($) {
    "use strict";
    Typed.new('#typed', {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 100,
        loop: !0,
        startDelay: 1000,
        backDelay: 1000
    });
    jQuery(".preloader-area").fadeOut(500);
    var $chart = $('.chart');
    var index = 0;
    $(document).on('scroll', function() {
        var top = $('.skills').height() - $(window).scrollTop();
        console.log(top)
        if (top < -600) {
            if (index === 0) {
                $chart.easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent))
                    }
                })
            }
            index++
        }
    })
    var chart = window.chart = $chart.data('easyPieChart');
    $('.js_update').on('click', function() {
        chart.update(Math.random() * 100)
    });
    $('a.page-scroll').on("click", function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault()
    });
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide')
        }
    });
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });
    new WOW().init();
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $(".client-logo").owlCarousel({
        autoPlay: 3000,
        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: !1
    })
})(jQuery)