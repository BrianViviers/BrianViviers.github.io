$(document).ready(function () {
    var navbarHeight = $(".navbar").position().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > navbarHeight) {
            $('.navbar').addClass('navbar-fixed');
            $('#logo').addClass('logo-fixed');
        }
        if ($(window).scrollTop() < navbarHeight) {
            $('.navbar').removeClass('navbar-fixed');
            $('#logo').removeClass('logo-fixed');
        }
    });

    $("#ants").animatedModal({
        modalTarget: 'antsModal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#39BEB9',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.slideRightIn", { opacity: 1, stagger: 450, defaultDuration: 100 });
                window.setTimeout(addClassNextChild, 100);
            }

            addClassNextChild();

        },
        afterClose: function () {
            $(".thumb").hide();
        }
    });
    $("#moose").animatedModal({
        modalTarget: 'mooseModal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#39BEB9',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.slideRightIn", { opacity: 1, stagger: 450, defaultDuration: 100 });
                window.setTimeout(addClassNextChild, 100);
            }

            addClassNextChild();

        },
        afterClose: function () {
            $(".thumb").hide();
        }
    });

    $("#compass").animatedModal({
        modalTarget: 'compassModal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#39BEB9',
        beforeOpen: function () {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.slideRightIn", { opacity: 1, stagger: 450, defaultDuration: 100 });
                window.setTimeout(addClassNextChild, 100);
            }

            addClassNextChild();

        },
        afterClose: function () {
            $(".thumb").hide();
        }
    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.portfolio-link').hover(
       function () {
           $('.portfolio-item-text-heading', this).addClass('semi-transparent')
           $('.portfolio-item-text', this).addClass('semi-transparent')
           $('.img-responsive', this).addClass('semi-transparent')
           $('.fa-search-plus', this).removeClass('disappear')
       },
       function () {
           $('.portfolio-item-text-heading', this).removeClass('semi-transparent')
           $('.portfolio-item-text', this).removeClass('semi-transparent')
           $('.img-responsive', this).removeClass('semi-transparent')
           $('.fa-search-plus', this).addClass('disappear')
       }
    )

    var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
        (!window.requestAnimationFrame)
			? setTimeout(function () { showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function () { showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset)
            && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset
            && $(this).find('.cd-timeline-img').hasClass('is-hidden'))
            && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }
});