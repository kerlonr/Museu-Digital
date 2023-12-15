$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
let lastScrollTop = 0; // Variável para armazenar a posição do scroll anterior

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Rolando para baixo
        document.querySelector("header").style.top = "-100px"; // Esconde o header ao rolar para baixo
    } else {
        // Rolando para cima
        document.querySelector("header").style.top = "0"; // Mostra o header ao rolar para cima
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Atualiza a posição do scroll
}, false);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 2000);

    const links = document.querySelectorAll('header nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            const targetElement = document.querySelector(href);

            if (targetElement) {
                const topOffset = targetElement.offsetTop;
                window.scrollTo({
                    top: topOffset - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});