jQuery(document).ready(function () {

    jQuery(".section-title-holder").stick_in_parent({offset_top: 64}).on("sticky_kit:stick", function (e) {
        jQuery('.menu-wrapper, .menu-wrapper .sub-menu').css('backgroundColor', jQuery(this).css("backgroundColor"));
        jQuery('.menu-wrapper a, .mob-menu').css('color', jQuery(this).find('.section-num span').css("color"));
    });

    jQuery(".section-title-holder").stick_in_parent({offset_top: 64}).on("sticky_kit:unbottom", function (e) {
        jQuery('.menu-wrapper, .menu-wrapper .sub-menu').css('backgroundColor', jQuery(this).css("backgroundColor"));
        jQuery('.menu-wrapper a, .mob-menu').css('color', jQuery(this).find('.section-num span').css("color"));
    });


    //Placeholder show/hide
    jQuery('input, textarea').focus(function () {
        jQuery(this).data('placeholder', jQuery(this).attr('placeholder'));
        jQuery(this).attr('placeholder', '');
    });
    jQuery('input, textarea').blur(function () {
        jQuery(this).attr('placeholder', jQuery(this).data('placeholder'));
    });

});


jQuery(window).load(function () {

    //Show-Hide Mobile Menu
    jQuery('.mob-menu').on("click", showHideMobMenu);
    if (jQuery("body").width() <= 925)
    {
        jQuery('.main-menu a').on("click", hideMobMenuItemClick);
    }

    //Set each image slider
    jQuery(".image-slider").each(function () {
        var id = jQuery(this).attr('id');
        var auto_value = window[id + '_auto'];
        if (auto_value == 'false')
        {
            auto_value = false;
        } else {
            auto_value = true;
        }

        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true')
        {
            hover_pause = 'resume';
        } else {
            hover_pause = false;
        }

        var speed_value = window[id + '_speed'];
        jQuery('#' + id).carouFredSel({
            responsive: true,
            width: 'variable',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            next: '#' + id + '_next',
            scroll: {
                fx: 'crossfade',
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: true,
                onTouch: true
            },
            items: {
                visible: 1,
                height: 'variable'
            }
        });
    });
    jQuery('.image-slider-wrapper').each(function () {
        var slider_width = jQuery(this).width();
        var pagination_width = jQuery(this).find('.carousel_pagination').width();
        jQuery(this).find('.carousel_pagination').css("margin-left", (slider_width - pagination_width) / 2);
    });


    //Set each testimonial slider
    jQuery(".testimonial").each(function () {
        var id = jQuery(this).attr('id');
        var auto_value = window[id + '_auto'];
        if (auto_value == 'false')
        {
            auto_value = false;
        } else {
            auto_value = true;
        }

        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true')
        {
            hover_pause = 'resume';
        } else {
            hover_pause = false;
        }

        var speed_value = window[id + '_speed'];
        jQuery('#' + id).carouFredSel({
            responsive: true,
            width: 'variable',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            next: '#' + id + '_next',
            scroll: {
                fx: 'crossfade',
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: true,
                onTouch: true
            },
            items: {
                height: 'variable'
            }
        });
    });

    jQuery('.carousel_pagination').each(function () {
        var pagination_width = jQuery(this).width();
        var windw_width = jQuery('.testimonial-slider-holder').width();
        jQuery(this).css("margin-left", (windw_width - pagination_width) / 2);
    });

    //Set each FW image slider
    jQuery(".fw-image-slider").each(function () {
        var id = jQuery(this).attr('id');

        var auto_value = window[id + '_auto'];
        if (auto_value == 'false')
        {
            auto_value = false;
        } else {
            auto_value = true;
        }

        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true')
        {
            hover_pause = 'resume';
        } else {
            hover_pause = false;
        }

        var speed_value = window[id + '_speed'];
        var start_value = window[id + '_start'];
        var width_value = window[id + '_width'];
        var num_value = window[id + '_num'];

        jQuery('#' + id).carouFredSel({
            responsive: true,
            width: '100%',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            pagination: '#' + id + '_fw_image_slide_pager',
            next: '#' + id + '_fw_next',
            scroll: {
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: true,
                onTouch: true
            },
            items: {
                width: parseFloat(width_value),
                height: 'auto', //	optionally resize item-height
                visible: {
                    min: 1,
                    max: parseFloat(num_value)
                },
                start: parseFloat(start_value)
            }
        });
    });


    //PrettyPhoto initial
    jQuery('a[data-rel]').each(function () {
        jQuery(this).attr('rel', jQuery(this).data('rel'));
    });

    //Set menu
    jQuery('.main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentItem: true
    });
    var $mainMenu = jQuery('.main-menu').on('click', 'span.sub-arrow', function (e) {
        var obj = $mainMenu.data('smartmenus');
        if (obj.isCollapsible()) {
            var $item = jQuery(this).parent(),
                    $sub = $item.parent().dataSM('sub');
            $sub.dataSM('arrowClicked', true);
        }
    }).bind({
        'beforeshow.smapi': function (e, menu) {
            var obj = $mainMenu.data('smartmenus');
            if (obj.isCollapsible()) {
                var $menu = jQuery(menu);
                if (!$menu.dataSM('arrowClicked')) {
                    return false;
                }
                $menu.removeDataSM('arrowClicked');
            }
        }
    });


    jQuery('.section-title-holder').trigger("sticky_kit:recalc");

    jQuery('.doc-loader').fadeOut('fast');
});


jQuery(window).resize(function () {

    //Show-Hide Mobile Menu        
    if (jQuery("body").width() <= 925)
    {
        jQuery('.main-menu a').on("click", hideMobMenuItemClick);
    }

    var $videoDefaultWidth = Math.ceil(jQuery('body').width() * 0.7);
    var $videoDefaultHeight = Math.ceil($videoDefaultWidth * 0.5625);
    jQuery("a[rel^='prettyPhoto']").each(function () {

        var str = jQuery(this).attr('href');
        str = str.split('&width');
        if ((str[0].indexOf("youtube") >= 0 || (str[0].indexOf("vimeo")) >= 0))
        {
            jQuery(this).attr("href", str[0] + "&width=" + $videoDefaultWidth + "&height=" + $videoDefaultHeight);
        }
    });
    jQuery('.image-slider-wrapper').each(function () {
        var slider_width = jQuery(this).width();
        var pagination_width = jQuery(this).find('.carousel_pagination').width();
        jQuery(this).find('.carousel_pagination').css("margin-left", (slider_width - pagination_width) / 2);
    });


    //Fix for portfolio item text
    jQuery('.portfolio-text-holder').each(function () {
        jQuery(this).find('.portfolio-text-wrapper').css('margin-top', (jQuery(this).height() - jQuery(this).find('.portfolio-text-wrapper').height()) / 2 - 70);
    });
});
//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------


var showHideMobMenu = function (e) {
    jQuery('.main-menu').slideToggle();
};

var hideMobMenuItemClick = function (e) {
    if (jQuery('.mob-menu').is(':visible'))
    {
        jQuery('.main-menu').slideUp();
    }
};

function is_touch_device() {
    return !!('ontouchstart' in window);
}

var SendMail = function () {
    alert('It\'s just a test');
};
