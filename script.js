$(document).ready(function() {
    // Select all elements with the class 'products_item-img'
    $('.products_item-img').each(function(index) {
        // Apply initial CSS styles to set the start state of each element
        $(this).css({
            'margin-left': '-50%',
            'width': '0%'
        });

        // Animate each element with a delay using the index to create a staggered effect
        $(this).delay(300 * index).animate({
            'margin-left': '0%',
            'width': '100%'
        }, 1000); // Adjust duration as needed (in milliseconds)
    });
});
