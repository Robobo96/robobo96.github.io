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
            if (isElementInViewport(el) && !$(el).hasClass("is-visible")) {
                $(el).addClass("is-visible").delay(150 * index).animate({
                    "margin-left": 0,
                    "width": "100%"
                }, 1000); // Adjust the animation speed (1000ms for 1 second)
            }
        });
    }

    // Trigger the animation when the page loads and on scroll
    $(window).on("load scroll", function() {
        animateElements();
    });
});
