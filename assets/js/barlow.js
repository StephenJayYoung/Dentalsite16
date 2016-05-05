// document is ready
jQuery(document).ready(function($){

      var team = $("#team-carousel");
        team.owlCarousel({
        items: 1,
        nav: true,
        navText : ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
        dots:false,
        loop: true,
        center: true,
//         responsive : {
//     0 : {
//         nav: false,
//         items:1,
//         margin: 50
//     },
//     // breakpoint from 480 up
//     480 : {
//         nav: false,
//         items:1,
//         stagePadding: true,
//         margin: 40,
//     },
//     // breakpoint from 768 up
//     768 : {

//     }
// }
    });



    // setup revolution slider
    $('.tp-banner').show().revolution({
        sliderType: "standard",
        jsFileLocation: "assets/include/rs-plugin/js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 6000,
        startwidth: 2000,
        startheight: 650,
        hideThumbs: 200,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        fullScreenAlignForce: "on",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            touch:{
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style: "hermes",
                enable: false,
                hide_onmobile: true,
                hide_onleave: true,
                tmp: '<div class="tp-arr-allwrapper">   <div class="tp-arr-imgholder"></div>    <div class="tp-arr-titleholder">{{title}}</div> </div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 10,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 10,
                    v_offset: 0
                }
            }
        },
        touchenabled: "on",
        onHoverStop: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7,4,3,2,5,4,3,2,1,0],
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",
        spinner: "spinner4",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "on",
        hideTimerBar: "on",
        hideThumbsOnMobile: "on",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "on",
        hideArrowsOnMobile: "on",
        hideThumbsUnderResolution: 0,
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
    });

    //OC Slider Scripts

                var ocSlider = $("#oc-slider");

                ocSlider.owlCarousel({
                    items: 1,
                    nav: true,
                    navText : ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    smartSpeed: 1750,
                    autoplay: true,
                    loop: true
                });


    // google maps script
    $('#google-map').gMap({

        address: '101 Broad Street, Suite 203, Lake Geneva, WI 53147',
        maptype: 'ROADMAP',
        zoom: 16,
        markers: [
            {
                address: "101 Broad Street, Suite 203, Lake Geneva, WI 53147",
                icon: {
                    image: "assets/images/icons/map-icon-red.png",
                    iconsize: [32, 39],
                    iconanchor: [32,39]
                }
            }
        ],
        doubleclickzoom: false,
        controls: {
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            draggable: false
        }

    });
});