$(document).ready(function() {
    var animated = false;

    $(window).on('scroll', function() {
        if (!animated) {
            $('.products_item-img').each(function(index) {
                var elementTop = $(this).offset().top;
                var viewportBottom = $(window).scrollTop() + $(window).height();

                if (elementTop < viewportBottom) {
                    $(this).css('transition-delay', index * 0.2 + 's');
                    $(this).css('margin-left', '0');
                    $(this).css('width', '100%');
                }
            });
            animated = true; // to ensure the animation only happens once
        }
    });
});
