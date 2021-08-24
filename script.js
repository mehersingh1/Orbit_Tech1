/* js for images sliding-in as you scroll */

$(window).scroll(function(){
  
  var wScroll = $(this).scrollTop();
  
  if(wScroll > $('.img1').offset().top - $(window).height()) {
    
    var offset = wScroll - $('.img1').offset().top + $(window).height()
    
    $('.img1').css({'transform': 'translate(-' +offset+ 'px, 20px)'});
  }
});


