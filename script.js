$(document).ready(function() {
            var $productsGrid = $('.products_grid');
            var $newProductItem = $('<div class="products_item"></div>');

            // Apply CSS directly to the 8th and 9th child elements to make them span 2 columns and 2 rows
            $productsGrid.children().eq(7).css({
                'grid-column': 'auto / span 2',
                'grid-row': 'auto / span 2'
            });
            $productsGrid.children().eq(8).css({
                'grid-column': 'auto / span 2',
                'grid-row': 'auto / span 2'
            });
            
            // Check and insert empty divs at positions 3, 15, 26, etc., if the grid has more than those indices' number of children
            for (var i = 3; i < $productsGrid.children().length; i += 12) {
                        if ($productsGrid.children().length > i) {
                                    $productsGrid.children().eq(i - 1).before($newProductItem.clone());
                        }
            }
            
            // Check and insert empty divs at positions 11, 23, 35, etc., if the grid has more than those indices' number of children
            for (var i = 11; i < $productsGrid.children().length; i += 12) {
                        if ($productsGrid.children().length > i) {
                                    $productsGrid.children().eq(i - 1).before($newProductItem.clone());
                        }
            }

            // Check and insert empty divs at positions 13, 25, 37, etc., if the grid has more than those indices' number of children
            for (var i = 13; i < $productsGrid.children().length; i += 12) {
                        if ($productsGrid.children().length > i) {
                                    $productsGrid.children().eq(i - 1).before($newProductItem.clone());
                        }
            }
        });
