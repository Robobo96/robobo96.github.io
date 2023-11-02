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

    // Function to handle the animation of elements
    function animateElements() {
        $(".products_item-img").each(function(index) {
            var el = this;
            if (isElementInViewport(el)) {
                $(el).css({
                    "margin-left": 0,
                    "width": "100%"
                }).delay(100 * index).animate({
                    "margin-left": 0,
                    "width": "100%"
                }, 500); // You can adjust the delay and animation duration as needed
            } else {
                $(el).css({
                    "margin-left": "-50%",
                    "width": "0"
                });
            }
        });
    }

    // Trigger the animation when the page loads and on scroll
    $(window).on("load scroll", function() {
        animateElements();
    });
});
