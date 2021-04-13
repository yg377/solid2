// -----------------------------

//   JS INDEX
/* =================== */
/*  
   
    ## Preloader
    ## Sticky Header
    ## Scroll-up
    ## Counter Up
    ## Smooth Scroll
    ## Countdown
    ## owl carousel
    ## Portfolio JS
    ## Ajax Contact Form
*/
// -----------------------------


(function($) {
    "use strict";



    /*---------------------
    Preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });



    /*-----------------
    Sticky Header
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 85) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });

    /*-----------------
    Scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });

    /*------------------------------
         Counter Up
    ------------------------------ */
    $('.counter-up').counterUp();


    /*---------------------
     Smooth Scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });


    /*---------------------
    countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });




    /*---------------------
       Client's Says Carousel
    --------------------- */
    function clientsSays_carousel(){
        var owl = $(".clientSays-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 4,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    clientsSays_carousel();
    /*---------------------
    Team carousel
    --------------------- */
    function team_carousel() {
        var owl = $(".team-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 4
                }
            }
        });
    }
    team_carousel();


    $('#st-next-slide').on('click', function(e) {
        $('.team-carousel').trigger('next.owl.carousel');
    });
    $('#st-prev-slide').on('click', function(e) {
        $('.team-carousel').trigger('prev.owl.carousel');
    });

    /*---------------------
    User Reaction carousel
    --------------------- */
    function urs_carousel() {
        var owl = $(".urs-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 3
                }
            }
        });
    }
    urs_carousel();

    /*---------------------
    Recent Blog carousel
    --------------------- */
    function recentBlog2_carousel() {
        var owl = $(".recentBlog2-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 2
                }
            }
        });
    }
    recentBlog2_carousel();
    $('#rp-next-slide').on('click', function(e) {
        $('.recentBlog2-carousel').trigger('next.owl.carousel');
    });
    $('#rp-prev-slide').on('click', function(e) {
        $('.recentBlog2-carousel').trigger('prev.owl.carousel');
    });



    /*---------------------
    Team Dark carousel
    --------------------- */
    function teamDark_carousel() {
        var owl = $(".team-carousel-dark");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 5
                }
            }
        });
    }
    teamDark_carousel();



    /*---------------------
    Team carousel 10
    --------------------- */
    function team10_carousel() {
        var owl = $(".team-carousel10");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 3
                }
            }
        });
    }
    team10_carousel();




}(jQuery));




$(".p2c-single").hover(function(){
    $('.p2c-single').removeClass('active');
    $(this).addClass('active');
    
});






/*---------------------
     Testimonial
    --------------------- */



    $(window).on('load', function() {


        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        var slidesPerPage = 4; //globaly define number of elements per page
        var syncedSecondary = true;
      
        sync1.owlCarousel({
          items : 1,
          slideSpeed : 2000,
          nav: true,
          autoplay: true,
          dots: true,
          loop: true,
          responsiveRefreshRate : 200,
          navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }).on('changed.owl.carousel', syncPosition);
      
        sync2
          .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
          })
          .owlCarousel({
          items : slidesPerPage,
          dots: true,
          nav: true,
          smartSpeed: 200,
          slideSpeed : 500,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate : 100
        }).on('changed.owl.carousel', syncPosition2);
      
        function syncPosition(el) {
          //if you set loop to false, you have to restore this next line
          //var current = el.item.index;
          
          //if you disable loop you have to comment this block
          var count = el.item.count-1;
          var current = Math.round(el.item.index - (el.item.count/2) - .5);
          
          if(current < 0) {
            current = count;
          }
          if(current > count) {
            current = 0;
          }
          
          //end block
      
          sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
          var onscreen = sync2.find('.owl-item.active').length - 1;
          var start = sync2.find('.owl-item.active').first().index();
          var end = sync2.find('.owl-item.active').last().index();
          
          if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
          }
          if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
          }
        }
        
        function syncPosition2(el) {
          if(syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
          }
        }
        
        sync2.on("click", ".owl-item", function(e){
          e.preventDefault();
          var number = $(this).index();
          sync1.data('owl.carousel').to(number, 300, true);
        });
      });
    
    
/*-------- Chris 1 Testimonial JS END ----------- */




// Portfolio JS

$(window).on('load', function() {
    $('.p-filter-btn').on('click', function(e) {
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
        if ($(".p-filter-btn").hasClass("active")) {
            $(".p-filter-btn").removeClass("active");
            $(this).addClass("active");
        }
    });
        
});










/*---------------------
    // Ajax Contact Form
    --------------------- */


    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function() {
    
        var firstName = $('#firstName').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }
    
        firstName = $.trim(firstName);
        email = $.trim(email);
        msg = $.trim(msg);
    
        if (firstName != '' && email != '' && msg != '') {
            var values = "firstName=" + firstName + "&lastName=" + "&email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "yabsiraget@gmail.com",
                data: values,
                success: function() {
                    $('#firstName').val('');
                    $('#email').val('');
                    $('#msg').val('');
    
                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });
    
    
    // Ajax Contact Form JS END