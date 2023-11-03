$(document).ready(function() {
    var $productsGrid = $('.products_grid');
    var $newProductItem = $('<div class="products_item"></div>');

    // Apply CSS directly to the 8th and 9th child elements and subsequent ones in the same pattern
    for (var i = 7; i < $productsGrid.children().length; i += 12) {
        $productsGrid.children().eq(i).add($productsGrid.children().eq(i + 1)).css({
            'grid-column': 'auto / span 2',
            'grid-row': 'auto / span 2'
        });
    }

    // Define positions to insert empty divs
    var positions = [3, 11, 13]; // Positions to insert empty divs

    // Loop through each position and insert an empty div if the grid has more children
    positions.forEach(function(position) {
        for (var i = position; i < $productsGrid.children().length; i += 12) {
            if ($productsGrid.children().length > i) {
                $productsGrid.children().eq(i - 1).before($newProductItem.clone());
            }
        }
    });
});
