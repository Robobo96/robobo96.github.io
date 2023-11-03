// Wait for the HTML document to be fully loaded and ready
$(document).ready(function() {

    // Define the grid cells with the class name 'products_grid'
    var gridCells = $('.products_grid');

    // Loop through each 'products_grid' element found on the page
    gridCells.each(function(index, element) {

        // Find all the children cells of the current 'products_grid' element
        var children = $(element).children();

        // Loop through each child cell of the grid
        children.each(function(childIndex) {

            // Check if the current child cell is the 3rd, 11th, or 13th (0-indexed)
            if ((childIndex + 1) % 3 === 0 && (childIndex + 1) !== 12) {
                // Create a new empty div element
                var newDiv = $('<div></div>');

                // Add the class 'products_item' to the new div
                newDiv.addClass('products_item');

                // Append the new div to the current child cell
                $(this).append(newDiv);
            }
        });
    });
});
