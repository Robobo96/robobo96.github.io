// Wait for the document (HTML) to be ready before executing any JavaScript/jQuery code
        $(document).ready(function() {
            // Select the products_grid element using its class name and store it in a variable
            var $productsGrid = $('.products_grid');
            
            // Create an empty div element using jQuery
            var $newProductItem = $('<div class="products_item"></div>');
            
            // Append the newly created empty div to the products_grid element
            $productsGrid.append($newProductItem);
        });
