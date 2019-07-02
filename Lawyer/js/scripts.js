jQuery(document).ready(function(){

    jQuery("form.popup").submit(function() { 
        var th = jQuery(this);
        $.ajax({
          type: "POST",
          url: "./mail.php", 
          data: th.serialize()
        }).done(function() {
          jQuery('.modal-header.main').addClass('hidden');
          jQuery('.modal-header.success').addClass('show');
          setTimeout(function() {
            th.trigger("reset");
            jQuery('.modal-header.main').removeClass('hidden');
            jQuery('.modal-header.success').removeClass('show');
            jQuery('.close').click();
          }, 5000);
        });
        return false;
    });

    jQuery("form.main-form").submit(function() { 
        var th = jQuery(this);
        $.ajax({
          type: "POST",
          url: "./mail.php", 
          data: th.serialize()
        }).done(function() {
          $('button.t-1').click();
          setTimeout(function() {
            th.trigger("reset");
            jQuery('.close').click();
          }, 5000);
        });
        return false;
    });



    var count1 = $(".certificate .owl-carousel").children('.item').length;
    var element1 = '<u>/ </u>' + count1;
    $('.certificate .number').children('sup').html(element1);

    var count2 = $(".top .owl-carousel").children('.item').length;
    var element2 = '<u>/ </u>' + count2;
    $('.top .number').children('sup').html(element2);

    var count3 = $(".sub .owl-carousel").children('.item').length;
    var element3 = '<u>/ </u>' + count3;
    $('.sub .number').children('sup').html(element3);


    $('.services-list').dcAccordion({
        speed : 200,
    });

    $('.btn-menu').on('click',function(){
    	$('.xs-menu').toggleClass('active');
    });
    $('.close-btn').on('click',function(){
		  $('.xs-menu').removeClass('active');
    });

    $(".certificate .owl-carousel").owlCarousel({
       items: 1,
       margin: 30,
       loop: true,
       dots: true,
       autoplay: false,
       nav: true,
       navText: [
         '<button><i class="fa fa-angle-left"></i></button>',
         '<button><i class="fa fa-angle-right"></i></button>',
       ],
       responsive: {
          0:{
             items:1
          },
           767:{
             items: 2
          },
          991:{
             items: 3
          },
       }
    });

   $(".review .owl-carousel").owlCarousel({
       items: 1,
       margin: 10,
       loop: true,
       dots: true,
       autoplay: true,
       nav: true,
       navText: [
         '<button><i class="fa fa-angle-left"></i></button>',
         '<button><i class="fa fa-angle-right"></i></button>',
       ],
    });

    $('[data-fancybox="images"]').fancybox({
        thumbs : {
          autoStart : false
        },
        buttons : [
          'zoom',
          'close'
        ]
    });


   jQuery("a.a-menu").click(function () {
     elementClick = jQuery(this).attr("href")
     destination = jQuery(elementClick).offset().top;
     jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
     return false;
   });


   $('button.no-send').click(function(){
      $('.close').click();
   });



});