// Add to Cart functionality
function addToCart(productId) {
    alert('Product added to cart!');
    // In a real application, this would add the product to a cart system
}

// Buy Now functionality
function buyNow(productId) {
    alert('Proceeding to checkout...');
    // In a real application, this would redirect to a checkout page
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Sticky header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.backgroundColor = 'white';
            }
        });
    }
}); 