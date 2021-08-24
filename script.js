/* js for images sliding-in as you scroll */

$(window).scroll(function(){
  
  var wScroll = $(this).scrollTop();
  
  if(wScroll > $('.homeimages').offset().top - $(window).height()) {
    
    $('.homeimages').css('transofrm')
  }
});


