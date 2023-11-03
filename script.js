$(document).ready(function() {
            var $productsGrid = $('.products_grid');
            var $newProductItem = $('<div class="products_item"></div>');
            
            // Select the third child element (index 2) in the products_grid and insert the new item before it
            $productsGrid.children().eq(2).before($newProductItem);
        });
