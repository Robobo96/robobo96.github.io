$(document).ready(function() {
    var $productsGrid = $('.products_grid');
    var $newProductItem = $('<div class="products_item"></div>');

    // Define positions to insert CSS for larger images
    var largerimgs = [7, 8]; // Positions to insert CSS
    
    // Apply CSS directly to the 8th and 9th child elements and subsequent ones in the same pattern
    largerimgs.forEach(function(largerimg) {
        for (var i = largerimg; i < $productsGrid.children().length; i += 11) {
            $productsGrid.children().eq(i).add($productsGrid.children().eq(i)).css({
                'grid-column': 'auto / span 2',
                'grid-row': 'auto / span 2'
            });
        }
    });

    // Define positions to insert empty divs
    var emptydivs = [2, 10, 12]; // Positions to insert empty divs

    // Loop through each position and insert an empty div if the grid has more children
    emptydivs.forEach(function(emptydiv) {
        for (var i = emptydiv; i < $productsGrid.children().length; i += 11) {
            $productsGrid.children().eq(i).before($newProductItem.clone());
        }
    });
});
