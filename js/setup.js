// CONFIGURACOES CARROSSEL

const owlSettings = {
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
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

// CONFIGURACOES TELA DE LOADING

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 2000);
});

// CONFIGURACOES NAV BAR

function scrollToTarget(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const targetElement = document.querySelector(href);

    if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

const links = document.querySelectorAll('header nav a[href^="#"]');
links.forEach(function(link) {
    link.addEventListener('click', scrollToTarget);
});


// REDIRECIONAMENTO DE HTML'S

document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "projetos/tv_aquario/tv.html";
});