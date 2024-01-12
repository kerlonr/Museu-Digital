// Configuração do Owl Carousel
const owlSettings = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // Intervalo de tempo entre os slides (em milissegundos)
    autoplaySpeed: 3000, // Velocidade de transição entre os slides (em milissegundos)
    smartSpeed: 1000, // Velocidade de transição para auto-avançar o carrossel (em milissegundos)
    margin: 10,
    animateOut: 'fadeOut', // Adiciona uma animação de fade out ao trocar de slide
    animateIn: 'fadeIn',
    responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 5 }
    }
};

$('.owl-carousel').owlCarousel(owlSettings);

// Ocultar a tela de loading após um intervalo de tempo
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 2000);
});
