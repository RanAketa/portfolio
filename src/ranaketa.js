// Link Animation
$(function(){
   $('a[href^="#"]').click(function() {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.get(0).offsetTop;
      $(".mdl-layout__content").animate({scrollTop:position}, 1100, 'swing');
      return false;
   });
});
