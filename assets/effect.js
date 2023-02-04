$(window).add($('body')).scroll(function(){
  $('.fadein').each(function(){
    var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});