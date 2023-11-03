$(document).ready(function() {
            var $productsGrid = $('.products_grid');
            var $newProductItem = $('<div class="products_item"></div>');

            $productsGrid.children().eq(2).before($newProductItem.clone()); // Index 2
            $productsGrid.children().eq(10).before($newProductItem.clone()); // Index 10
            $productsGrid.children().eq(12).before($newProductItem); // Index 12

            // Apply CSS directly to the 8th and 9th child elements to make them span 2 columns and 2 rows
            $productsGrid.children().eq(7).css({
                'grid-column': 'auto / span 2',
                'grid-row': 'auto / span 2'
            });
            $productsGrid.children().eq(8).css({
                'grid-column': 'auto / span 2',
                'grid-row': 'auto / span 2'
            });
        });
