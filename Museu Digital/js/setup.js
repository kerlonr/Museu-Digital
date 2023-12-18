// Configuração do Owl Carousel
const owlSettings = {
    loop: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    margin: 10,
    nav: true,
    responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 5 }
    }
};

$('.owl-carousel').owlCarousel(owlSettings);

// Esconder/mostrar o header ao rolar a página
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector("header");

    if (currentScroll > lastScrollTop) {
        header.style.top = "-100px"; // Esconde o header ao rolar para baixo
    } else {
        header.style.top = "0"; // Mostra o header ao rolar para cima
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Atualiza a posição do scroll
}, false);

// Ocultar a tela de loading após um intervalo de tempo
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 2000);
});

// Função para rolar suavemente para a âncora clicada
function scrollToTarget(event) {
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
}

// Event listeners para links no header
const headerLinks = document.querySelectorAll('header nav a');
headerLinks.forEach(function(link) {
    link.addEventListener('click', scrollToTarget);
});

// Event listener para links de eventos no header
const eventosLinks = document.querySelectorAll('header nav a[href="#eventos"]');
eventosLinks.forEach(function(link) {
    link.addEventListener('click', scrollToTarget);
});
// Desativar o carrossel na seção da equipe
const equipeSection = document.querySelector('.equipe-section .owl-carousel');
if (equipeSection) {
    equipeSection.classList.remove('owl-carousel');
}

// Inicializar o Owl Carousel para os outros elementos com a classe .owl-carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    // ... Outras configurações do Owl Carousel ...
});
