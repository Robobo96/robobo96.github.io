$(document).ready(function() {
            var $productsGrid = $('.products_grid');
            var $newProductItem = $('<div class="products_item"></div>');

            // Select and insert the new item at the specified indexes: 2, 10, and 12
            $productsGrid.children().eq(2).before($newProductItem.clone()); // Index 2
            $productsGrid.children().eq(10).before($newProductItem.clone()); // Index 10
            $productsGrid.children().eq(12).before($newProductItem); // Index 12
        });
