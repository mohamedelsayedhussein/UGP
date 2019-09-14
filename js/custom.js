
$(document).ready(function(){

  // goTop_btn script

  var btnToTop = $('.goTop_btn');

  btnToTop.click(function(){
    $('html, body').animate({
      scrollTop: 0,
    },1000)
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      btnToTop.fadeIn();
    }else {
      btnToTop.fadeOut();
    }
  });

  // menu plugin

  var $header = $('header');

  $header.find('.bars').click(function(e) {
    e.stopPropagation();
    $header.toggleClass('toggle');
  });
  
  $(document).click(function(){
    $header.removeClass('toggle');
  });

  $header.find('.links').click(function(e){
    e.stopPropagation();
  });
  
  $(document).keydown(function(e){
    if (e.keyCode == 27) {
      $header.removeClass('toggle');
    }
  });

  });

//  init aos animation library
  AOS.init();

  // select to plugin
  // $('#mselected').select2({
  //   placeholder: ""
  // });
