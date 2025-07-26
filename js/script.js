/**
 * Fashion Forward - Main JavaScript
 * Version 1.0
 * May 2025
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Product Data (Simulated database)
    const products = [
        {            id: 1,
            name: "Men's Casual T-Shirt",
            price: 29.99,
            category: "men",
            image: "images/product-1.jpeg",
            rating: 4.5,
            description: "Classic fit short sleeve t-shirt with crew neck. Made from 100% premium cotton for superior comfort and durability. Perfect for everyday casual wear.",
            sizes: ["S", "M", "L", "XL"]
        },
        {            id: 2,
            name: "Women's Summer Dress",
            price: 49.99,
            category: "women",
            image: "images/product-2.jpeg",
            rating: 4.8,
            description: "Floral print summer dress with adjustable straps and flowy design. Lightweight fabric perfect for warm weather. Easy to dress up or down for any occasion.",
            sizes: ["XS", "S", "M", "L"]
        },
        {            id: 3,
            name: "Kids Denim Jeans",
            price: 24.99,
            category: "kids",
            image: "images/product-3.jpeg",
            rating: 4.2,
            description: "Classic denim jeans for children with adjustable waistband for perfect fit. Durable fabric with stretch for comfort and freedom of movement.",
            sizes: ["3T", "4T", "5T", "6T"]
        },
        {            id: 4,
            name: "Men's Slim Fit Jeans",
            price: 59.99,
            category: "men",
            image: "images/product-4.jpeg",
            rating: 4.6,
            description: "Slim fit jeans with stretch denim for comfort and mobility. Features classic five-pocket styling and a modern silhouette that looks great dressed up or down.",
            sizes: ["30", "32", "34", "36"]
        },        {
            id: 5,
            name: "Women's Blouse",
            price: 34.99,
            category: "women",
            image: "images/product-5.jpeg",
            rating: 4.4,
            description: "Elegant blouse with feminine details and flattering silhouette. Light and breathable fabric makes it perfect for office wear or casual outings.",
            sizes: ["XS", "S", "M", "L", "XL"]
        },
        {
            id: 6,
            name: "Kids Graphic T-Shirt",
            price: 19.99,
            category: "kids",
            image: "images/product-6.jpeg",
            rating: 4.7,
            description: "Fun graphic t-shirt for kids made from soft 100% cotton. Features vibrant, long-lasting prints that children will love. Machine washable and durable.",
            sizes: ["S", "M", "L"]
        },
        {
            id: 7,
            name: "Men's Formal Shirt",
            price: 45.99,
            category: "men",
            image: "images/product-7.jpeg",
            rating: 4.3,
            description: "Classic fit formal shirt with wrinkle-resistant fabric. Perfect for business meetings or formal events. Features a modern cut and premium buttons.",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 8,
            name: "Women's Jeans",
            price: 54.99,
            category: "women",
            image: "images/product-8.jpeg",
            rating: 4.9,
            description: "High-waisted jeans with flattering fit and stretch for comfort. Versatile style that works with any outfit. Available in multiple washes and sizes.",
            sizes: ["26", "28", "30", "32"]
        },
        {
            id: 9,
            name: "Kids Hoodie",
            price: 29.99,
            category: "kids",
            image: "images/product-9.jpeg",            rating: 4.5,
            description: "Cozy hoodie with kangaroo pocket and adjustable hood. Made from soft fleece material to keep children warm during colder days. Easy to layer.",
            sizes: ["S", "M", "L"]
        },
        {
            id: 10,
            name: "Women's Cardigan",
            price: 39.99,
            category: "women",
            image: "images/product-10.jpeg",
            rating: 4.6,
            description: "Soft knit cardigan perfect for layering in any season. Features a relaxed fit and premium yarn that resists pilling. Available in multiple colors.",
            sizes: ["S", "M", "L"]
        },
        {
            id: 11,
            name: "Men's Polo Shirt",
            price: 32.99,
            category: "men",
            image: "images/product-11.jpeg",
            rating: 4.7,
            description: "Classic polo shirt with three-button placket and ribbed collar. Made from breathable piqué cotton that's comfortable for all-day wear.",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 12,
            name: "Kids Summer Shorts",
            price: 22.99,
            category: "kids",
            image: "images/product-12.jpeg",
            rating: 4.4,
            description: "Lightweight shorts perfect for summer activities. Features an adjustable waistband and quick-dry fabric. Available in fun, bright colors.",
            sizes: ["4T", "5T", "6T", "7T"]
        }
    ];

    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count in the navigation
    function updateCartCount() {
        const cartCountElements = document.querySelectorAll('#cart-count');
        cartCountElements.forEach(element => {
            element.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        });
    }
    
    // Format currency
    function formatCurrency(price) {
        return '$' + price.toFixed(2);
    }
    
    // Generate star ratings
    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    // Display featured products on homepage
    function displayFeaturedProducts() {
        const featuredProductsContainer = document.getElementById('featured-products');
        if (!featuredProductsContainer) return;
        
        // Select random products to feature (e.g., 4 products)
        const featuredProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        let html = '';
        featuredProducts.forEach(product => {
            html += `
                <div class="col-md-6 col-lg-3">
                    <div class="card product-card h-100">
                        <div class="product-img" style="background-image: url('${product.image}')"></div>
                        <div class="card-body">
                            <div class="product-category mb-1">${product.category}</div>
                            <h5 class="product-title">${product.name}</h5>
                            <div class="product-rating mb-2">
                                ${generateStarRating(product.rating)}
                            </div>
                            <h6 class="product-price mb-3">${formatCurrency(product.price)}</h6>
                            <button class="btn btn-primary btn-add-to-cart w-100" data-id="${product.id}">
                                Add to Cart
                            </button>
                        </div>
                        <div class="position-absolute top-0 end-0 m-2">
                            <button class="btn btn-sm btn-light rounded-circle view-product" data-id="${product.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        featuredProductsContainer.innerHTML = html;
        
        // Add event listeners for Add to Cart buttons
        attachAddToCartListeners();
        
        // Add event listeners for View Product buttons
        attachViewProductListeners();
    }
    
    // Display all products on shop page
    function displayProducts(filteredProducts = products) {
        const productsContainer = document.getElementById('products-container');
        if (!productsContainer) return;
        
        let html = '';
        
        if (filteredProducts.length === 0) {
            html = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-search fa-3x text-muted mb-3"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search term</p>
                </div>
            `;
        } else {
            filteredProducts.forEach(product => {
                html += `
                    <div class="col-md-6 col-lg-4">
                        <div class="card product-card h-100">
                            <div class="product-img" style="background-image: url('${product.image}')"></div>
                            <div class="card-body">
                                <div class="product-category mb-1">${product.category}</div>
                                <h5 class="product-title">${product.name}</h5>
                                <div class="product-rating mb-2">
                                    ${generateStarRating(product.rating)}
                                </div>
                                <h6 class="product-price mb-3">${formatCurrency(product.price)}</h6>
                                <button class="btn btn-primary btn-add-to-cart w-100" data-id="${product.id}">
                                    Add to Cart
                                </button>
                            </div>
                            <div class="position-absolute top-0 end-0 m-2">
                                <button class="btn btn-sm btn-light rounded-circle view-product" data-id="${product.id}">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        productsContainer.innerHTML = html;
        
        // Add event listeners for Add to Cart buttons
        attachAddToCartListeners();
        
        // Add event listeners for View Product buttons
        attachViewProductListeners();
    }
      // Filter products based on category, price, rating, size and search input
    function filterProducts() {
        // Get selected categories
        const selectedCategories = [];
        document.querySelectorAll('.category-filter:checked').forEach(checkbox => {
            if (checkbox.value !== 'all') {
                selectedCategories.push(checkbox.value);
            }
        });
        
        // Get price range
        const maxPrice = parseFloat(document.getElementById('priceRange')?.value || 200);
        
        // Get minimum rating
        const minRating = parseFloat(document.querySelector('.rating-filter:checked')?.value || 0);
        
        // Get selected sizes
        const selectedSizes = [];
        document.querySelectorAll('.size-filter.active').forEach(button => {
            selectedSizes.push(button.dataset.size);
        });
        
        // Get search input
        const searchInput = document.getElementById('searchInput')?.value.toLowerCase() || '';
        
        // Filter products
        let filteredProducts = products.filter(product => {
            // Filter by category if any selected
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            
            // Filter by price
            const priceMatch = product.price <= maxPrice;
            
            // Filter by rating
            const ratingMatch = product.rating >= minRating;
            
            // Filter by size if any selected
            const sizeMatch = selectedSizes.length === 0 || 
                product.sizes.some(size => selectedSizes.includes(size));
            
            // Filter by search
            const searchMatch = product.name.toLowerCase().includes(searchInput) || 
                              product.category.toLowerCase().includes(searchInput) ||
                              product.description.toLowerCase().includes(searchInput);
            
            return categoryMatch && priceMatch && ratingMatch && sizeMatch && searchMatch;
        });
        
        // Sort products if sort option is selected
        const sortBy = document.getElementById('sortBy')?.value || 'default';
        
        switch (sortBy) {
            case 'price-low-high':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating-high-low':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id); // Assuming newer products have higher IDs
                break;
            case 'name-a-z':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-z-a':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                // Default sorting (by id)
                filteredProducts.sort((a, b) => a.id - b.id);
        }
        
        displayProducts(filteredProducts);
    }
    
    // Shop page filter event listeners
    function setupShopFilters() {
        const applyFiltersBtn = document.getElementById('applyFilters');
        if (!applyFiltersBtn) return;
        
        // Category filter
        document.querySelectorAll('.category-filter').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.value === 'all' && this.checked) {
                    // If "All Items" is checked, uncheck others
                    document.querySelectorAll('.category-filter:not(#allCategory)').forEach(cb => {
                        cb.checked = false;
                    });
                } else if (this.checked) {
                    // If any other category is checked, uncheck "All Items"
                    document.getElementById('allCategory').checked = false;
                }
                
                // If no category is checked, check "All Items"
                const anyChecked = Array.from(document.querySelectorAll('.category-filter')).some(cb => cb.checked);
                if (!anyChecked) {
                    document.getElementById('allCategory').checked = true;
                }
            });
        });
        
        // Price range
        const priceRange = document.getElementById('priceRange');
        const priceValue = document.getElementById('priceValue');
        
        if (priceRange && priceValue) {
            priceRange.addEventListener('input', function() {
                priceValue.textContent = this.value;
            });
        }
        
        // Apply filters button
        applyFiltersBtn.addEventListener('click', filterProducts);
        
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', filterProducts);
        }
          // Sort by
        const sortBy = document.getElementById('sortBy');
        if (sortBy) {
            sortBy.addEventListener('change', filterProducts);
        }
        
        // Rating filter
        document.querySelectorAll('.rating-filter').forEach(radio => {
            radio.addEventListener('change', filterProducts);
        });
        
        // Size filter buttons
        document.querySelectorAll('.size-filter').forEach(button => {
            button.addEventListener('click', function() {
                this.classList.toggle('active');
                filterProducts();
            });
        });
        
        // URL parameter handling for category filtering
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        
        if (categoryParam) {
            document.getElementById('allCategory').checked = false;
            
            const categoryCheckbox = document.getElementById(`${categoryParam}Category`);
            if (categoryCheckbox) {
                categoryCheckbox.checked = true;
                filterProducts();
            }
        }
    }
    
    // Add to cart functionality
    function addToCart(productId, quantity = 1, size = null) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        // Check if product already exists in cart
        const existingItemIndex = cart.findIndex(item => item.id === productId && (!size || item.size === size));
        
        if (existingItemIndex !== -1) {
            // Update quantity if product already in cart
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item to cart
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                size: size
            });
        }
        
        // Save cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count
        updateCartCount();
        
        // Show success message
        showToast(`${product.name} added to cart!`);
    }
    
    // Attach event listeners to Add to Cart buttons
    function attachAddToCartListeners() {
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }
    
    // Display product details in modal
    function displayProductDetails(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const modalBody = document.getElementById('productModalBody');
        if (!modalBody) return;
        
        let sizesHtml = '';
        product.sizes.forEach((size, index) => {
            sizesHtml += `
                <input type="radio" class="btn-check" name="size" id="size${size}" value="${size}" ${index === 0 ? 'checked' : ''}>
                <label class="btn btn-outline-secondary" for="size${size}">${size}</label>
            `;
        });
        
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <img src="${product.image}" alt="${product.name}" class="modal-product-img">
                </div>
                <div class="col-md-6">
                    <h3>${product.name}</h3>
                    <div class="product-rating mb-2">
                        ${generateStarRating(product.rating)}
                    </div>
                    <h4 class="text-primary mb-3">${formatCurrency(product.price)}</h4>
                    <p>${product.description}</p>
                    
                    <div class="mb-3">
                        <h6>Select Size:</h6>
                        <div class="size-options">
                            ${sizesHtml}
                        </div>
                    </div>
                    
                    <div class="d-flex mb-3">
                        <div class="input-group me-3" style="width: 130px;">
                            <button class="btn btn-outline-secondary quantity-decrement" type="button">-</button>
                            <input type="number" class="form-control text-center product-quantity" value="1" min="1" max="10">
                            <button class="btn btn-outline-secondary quantity-increment" type="button">+</button>
                        </div>
                        <button class="btn btn-primary modal-add-to-cart flex-grow-1" data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize Bootstrap modal
        const productModal = new bootstrap.Modal(document.getElementById('productModal'));
        productModal.show();
        
        // Add event listeners for quantity buttons
        modalBody.querySelector('.quantity-decrement').addEventListener('click', function() {
            const input = this.nextElementSibling;
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });
        
        modalBody.querySelector('.quantity-increment').addEventListener('click', function() {
            const input = this.previousElementSibling;
            const currentValue = parseInt(input.value);
            if (currentValue < 10) {
                input.value = currentValue + 1;
            }
        });
        
        // Add event listener for Add to Cart button in modal
        modalBody.querySelector('.modal-add-to-cart').addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const quantity = parseInt(modalBody.querySelector('.product-quantity').value);
            const selectedSize = modalBody.querySelector('input[name="size"]:checked').value;
            
            addToCart(productId, quantity, selectedSize);
            
            // Close modal
            productModal.hide();
        });
    }
    
    // Attach event listeners to View Product buttons
    function attachViewProductListeners() {
        document.querySelectorAll('.view-product').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                displayProductDetails(productId);
            });
        });
    }
    
    // Cart page functionality
    function displayCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyCartMessage = document.getElementById('empty-cart');
        const cartItemsTable = document.getElementById('cart-items-container');
        
        if (!cartItemsContainer || !emptyCartMessage || !cartItemsTable) return;
        
        if (cart.length === 0) {
            emptyCartMessage.classList.remove('d-none');
            cartItemsTable.classList.add('d-none');
            updateCartSummary(0, 0, 0);
            return;
        }
        
        emptyCartMessage.classList.add('d-none');
        cartItemsTable.classList.remove('d-none');
        
        let html = '';
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            html += `
                <tr>
                    <td>
                        <img src="${item.image}" alt="${item.name}" class="cart-product-img">
                    </td>
                    <td>
                        <h6>${item.name}</h6>
                        ${item.size ? `<small>Size: ${item.size}</small>` : ''}
                    </td>
                    <td>${formatCurrency(item.price)}</td>
                    <td>
                        <div class="quantity-control">
                            <button class="update-quantity" data-index="${index}" data-action="decrement">-</button>
                            <input type="text" value="${item.quantity}" readonly>
                            <button class="update-quantity" data-index="${index}" data-action="increment">+</button>
                        </div>
                    </td>
                    <td>${formatCurrency(itemTotal)}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        
        cartItemsContainer.innerHTML = html;
        
        // Calculate shipping, tax, and total
        const shipping = subtotal > 0 ? 10 : 0;
        const tax = subtotal * 0.1;
        const total = subtotal + shipping + tax;
        
        updateCartSummary(subtotal, shipping, tax, total);
        
        // Add event listeners for quantity buttons and remove buttons
        attachCartEventListeners();
        
        // Display recommended products
        displayRecommendedProducts();
    }
    
    // Update cart summary values
    function updateCartSummary(subtotal, shipping, tax, total) {
        const subtotalElement = document.getElementById('cart-subtotal');
        const shippingElement = document.getElementById('cart-shipping');
        const taxElement = document.getElementById('cart-tax');
        const totalElement = document.getElementById('cart-total');
        
        if (subtotalElement) subtotalElement.textContent = formatCurrency(subtotal);
        if (shippingElement) shippingElement.textContent = formatCurrency(shipping);
        if (taxElement) taxElement.textContent = formatCurrency(tax);
        if (totalElement) totalElement.textContent = formatCurrency(total);
    }
    
    // Attach event listeners to cart elements
    function attachCartEventListeners() {
        // Update quantity buttons
        document.querySelectorAll('.update-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const action = this.getAttribute('data-action');
                
                if (action === 'increment') {
                    if (cart[index].quantity < 10) {
                        cart[index].quantity++;
                    }
                } else if (action === 'decrement') {
                    if (cart[index].quantity > 1) {
                        cart[index].quantity--;
                    }
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                displayCart();
                updateCartCount();
            });
        });
        
        // Remove item buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                displayCart();
                updateCartCount();
                showToast('Item removed from cart');
            });
        });
        
        // Clear cart button
        const clearCartBtn = document.getElementById('clear-cart');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to clear your cart?')) {
                    cart = [];
                    localStorage.setItem('cart', JSON.stringify(cart));
                    displayCart();
                    updateCartCount();
                    showToast('Cart cleared');
                }
            });
        }
        
        // Coupon code button
        const applyCouponBtn = document.getElementById('applyCoupon');
        if (applyCouponBtn) {
            applyCouponBtn.addEventListener('click', function() {
                const couponCode = document.getElementById('couponCode').value.trim();
                
                if (couponCode === 'DISCOUNT10') {
                    showToast('Coupon applied! 10% discount');
                } else if (couponCode === 'FREESHIP') {
                    showToast('Coupon applied! Free shipping');
                } else if (couponCode) {
                    showToast('Invalid coupon code', 'danger');
                } else {
                    showToast('Please enter a coupon code', 'warning');
                }
            });
        }
        
        // Checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', function() {
                if (cart.length > 0) {
                    showToast('This is a demo website. No actual checkout functionality is implemented.', 'info');
                } else {
                    showToast('Your cart is empty', 'warning');
                }
            });
        }
    }
    
    // Display recommended products in cart page
    function displayRecommendedProducts() {
        const recommendedContainer = document.getElementById('recommended-products');
        if (!recommendedContainer) return;
        
        // Get categories of items in cart
        const cartCategories = [...new Set(cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return product ? product.category : null;
        }).filter(Boolean))];
        
        // Find products from the same categories but not in cart
        let recommendedProducts = products.filter(product => 
            !cart.some(item => item.id === product.id) &&
            cartCategories.includes(product.category)
        );
        
        // If not enough products, add random products
        if (recommendedProducts.length < 4) {
            const remainingProducts = products.filter(product => 
                !cart.some(item => item.id === product.id) &&
                !recommendedProducts.some(p => p.id === product.id)
            );
            
            recommendedProducts = [
                ...recommendedProducts,
                ...remainingProducts.sort(() => 0.5 - Math.random())
            ].slice(0, 4);
        } else {
            // Randomize and limit to 4
            recommendedProducts = recommendedProducts
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);
        }
        
        let html = '';
        recommendedProducts.forEach(product => {
            html += `
                <div class="col-md-6 col-lg-3">
                    <div class="card product-card h-100">
                        <div class="product-img" style="background-image: url('${product.image}')"></div>
                        <div class="card-body">
                            <div class="product-category mb-1">${product.category}</div>
                            <h5 class="product-title">${product.name}</h5>
                            <div class="product-rating mb-2">
                                ${generateStarRating(product.rating)}
                            </div>
                            <h6 class="product-price mb-3">${formatCurrency(product.price)}</h6>
                            <button class="btn btn-primary btn-add-to-cart w-100" data-id="${product.id}">
                                Add to Cart
                            </button>
                        </div>
                        <div class="position-absolute top-0 end-0 m-2">
                            <button class="btn btn-sm btn-light rounded-circle view-product" data-id="${product.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        recommendedContainer.innerHTML = html;
        
        // Add event listeners
        attachAddToCartListeners();
        attachViewProductListeners();
    }
    
    // Contact form validation
    function setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        input.classList.add('is-invalid');
                        isValid = false;
                    }
                }
            });
            
            if (isValid) {
                // In a real application, you would send the form data to a server
                showToast('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            }
        });
    }
    
    // Toast notification system
    function showToast(message, type = 'success') {
        // Create toast container if it doesn't exist
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
            document.body.appendChild(toastContainer);
        }
        
        // Create toast element
        const toastEl = document.createElement('div');
        toastEl.className = `toast align-items-center text-white bg-${type} border-0`;
        toastEl.setAttribute('role', 'alert');
        toastEl.setAttribute('aria-live', 'assertive');
        toastEl.setAttribute('aria-atomic', 'true');
        
        toastEl.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;
        
        toastContainer.appendChild(toastEl);
        
        // Initialize Bootstrap toast
        const toast = new bootstrap.Toast(toastEl, {
            autohide: true,
            delay: 3000
        });
        
        toast.show();
        
        // Remove toast element after it's hidden
        toastEl.addEventListener('hidden.bs.toast', function() {
            this.remove();
        });
    }
    
    // Initialize the application
    function initApp() {
        updateCartCount();
        
        // Initialize page-specific functionality
        displayFeaturedProducts();
        setupShopFilters();
        displayProducts();
        displayCart();
        setupContactForm();
        
        // Check for URL parameters to determine which category to show
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category && document.getElementById('products-container')) {
            filterProducts();
        }
    }
    
    // Initialize the application when DOM is loaded
    initApp();
});
