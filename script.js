$(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the animation
    function animateIfVisible() {
        $('.products_item-img').each(function(index) {
            if (isElementInViewport(this) && $(this).css('width') === '0px') {
                $(this).css({
                    'margin-left': '50%',
                    'width': '0%'
                }).delay(300 * index).animate({
                    'margin-left': '0%',
                    'width': '100%'
                }, {
                    duration: 1000, // Adjust duration as needed (in milliseconds)
                    easing: 'easeInOutCubic' // Easing function
                });
            }
        });
    }

    // Call the function initially and on scroll
    animateIfVisible();
    $(window).on('scroll', animateIfVisible);
});
