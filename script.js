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

    // Check and insert empty divs at positions 3, 15, 26, etc., if the grid has more than those indices' number of children
    /*for (var i = 3; i < $productsGrid.children().length; i += 12) {
                if ($productsGrid.children().length > i) {
                            $productsGrid.children().eq(i - 1).before($newProductItem.clone());
                }
    }
    
    // Check and insert empty divs at positions 11, 23, 35, etc., if the grid has more than those indices' number of children
    /*for (var i = 11; i < $productsGrid.children().length; i += 14) {
                if ($productsGrid.children().length > i) {
                            $productsGrid.children().eq(i - 1).before($newProductItem.clone());
                }
    }

    // Check and insert empty divs at positions 13, 25, 37, etc., if the grid has more than those indices' number of children
    for (var i = 12; i < $productsGrid.children().length; i += 12) {
                if ($productsGrid.children().length > i) {
                            $productsGrid.children().eq(i - 1).before($newProductItem.clone());
                }
    }*/

    for (var i = 3; i < $productsGrid.children().length; i += 12) {
        $productsGrid.children().eq(i - 1).before($newProductItem.clone());
    }

    for (var i = 11; i < $productsGrid.children().length; i += 12) {
        $productsGrid.children().eq(i - 1).before($newProductItem.clone());
    }

    for (var i = 13; i < $productsGrid.children().length; i += 12) {
        $productsGrid.children().eq(i - 1).before($newProductItem.clone());
    }

});
