
$(document).ready(function () {

  // goTop_btn script

  var btnToTop = $('.goTop_btn');

  btnToTop.click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 1000)
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      btnToTop.fadeIn();
    } else {
      btnToTop.fadeOut();
    }
  });

  // menu plugin

  var $header = $('header');

  $header.find('.bars').click(function (e) {
    e.stopPropagation();
    $header.toggleClass('toggle');
  });

  $(document).click(function () {
    $header.removeClass('toggle');
  });

  $header.find('.links').click(function (e) {
    e.stopPropagation();
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $header.removeClass('toggle');
    }
  });

  var arLang = $header.find('.menu .lang .arabic-lang a');

  arLang.on('click', function () {
    $('link[href="vendors/bootstrap.css"]').attr('href', 'vendors/bootstrap-rtl.css');
    $('link[href="css/responsive.css"]').attr('href', 'css/responsive-rtl.css');
    $('link[href="css/style.css"]').attr('href', 'css/style-rtl.css');

  });

  var enLang = $header.find('.menu .lang > a');

  enLang.on('click', function () {
    $('link[href="vendors/bootstrap-rtl.css"]').attr('href', 'vendors/bootstrap.css');
    $('link[href="css/responsive-rtl.css"]').attr('href', 'css/responsive.css');
    $('link[href="css/style-rtl.css"]').attr('href', 'css/style.css');

  });

  var chatBtn = $('.chat-with-us');
  var chatTxt = $('.chat-with-us span');
  var chatBox = $('.chat-with-us .chat-box');
  var chatIcon = $('.chat-with-us .icon i');
  $(chatBtn).on('click', function(e) {
    e.stopPropagation();
    $(chatBox).toggleClass('active');
    $(chatTxt).toggleClass('hide');
    if ( $(chatBox).hasClass('active') ) {
      $(chatIcon).attr('class', 'fas fa-chevron-down');
    } else {
      $(chatIcon).attr('class', 'far fa-comment-dots');
    }
  })

  $(chatBox).click(function(e) {
    e.stopPropagation()
  })
  $(document).click(function() {
    $(chatBox).removeClass('active');
    $(chatIcon).attr('class', 'far fa-comment-dots');
  })



});

  // select to plugin
  // $('#mselected').select2({
  //   placeholder: ""
  // });
