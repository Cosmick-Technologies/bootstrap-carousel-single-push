jQuery(document).ready(function($) {
  if ($('.carousel.single-push .item').length > 0) {
    $('.carousel.single-push .item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    });
  }
});