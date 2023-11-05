let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll =() =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.product-slider', {
        slidesPerView: 1, // Default slides per view for small screens
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2, // Display 2 items per slide when screen width is 640px or more
            },
            768: {
                slidesPerView: 3, // Display 3 items per slide when screen width is 768px or more
            },
            1024: {
                slidesPerView: 4, // Display 4 items per slide when screen width is 1024px or more
            },
        },
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.review-slider', {
        slidesPerView: 1, // Default slides per view for small screens
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2, // Display 2 items per slide when screen width is 640px or more
            },
            768: {
                slidesPerView: 3, // Display 3 items per slide when screen width is 768px or more
            },
            1024: {
                slidesPerView: 4, // Display 4 items per slide when screen width is 1024px or more
            },
        },
    });
});



