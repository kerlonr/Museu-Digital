$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
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