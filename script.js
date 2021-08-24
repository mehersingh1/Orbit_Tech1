/* js for images sliding-in as you scroll */

// $(window).scroll(function(){

//   var wScroll = $(this).scrollTop();

// if(wScroll > $('.homeimages').offset().top - $(window).height()) {

//     var offset = wScroll - $('.homeimages').offset().top + $(window).height()

//     $('.homeimages').css({'transform': 'translate(-' + offset + 'px, 20px);'});
//   }
// });

// const options = {};

// const faders = document.querySelectorAll(".fade-in");

// const appearOnScroll = new IntersectionObserver(function(
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isInterescting) {
//       return;
//     } else {
//       entry.target.classList.add('appear');
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// options);
