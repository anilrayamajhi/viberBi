(function() {
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
          margin: 20,
        }
      }
    })

    $('.tab-action1').on('click', function(){
      $('.tab-action1').addClass('active-nav');
      $('.nav-comp1').addClass('active-comp');
      $('.tab-react2').addClass('tab-hide');
      $('.tab-react1').removeClass('tab-hide');
      $('.tab-action2').removeClass('active-nav');
      $('.nav-comp2').removeClass('active-comp');
    })

    $('.tab-action2').on('click', function(){
      $('.tab-react1').addClass('tab-hide');
      $('.tab-react2').removeClass('tab-hide');
      $('.tab-action1').removeClass('active-nav')
      $('.tab-action2').addClass('active-nav');
      $('.nav-comp2').addClass('active-comp');
      $('.nav-comp1').removeClass('active-comp');
    })

    if($(window).width()<=480){
      $('.layer-nav').data('offset-top', 740);
      console.log($('.layer-nav').data('offset-top'));
    }
  });
})();
