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


var ultimoScroll = 0;
window.addEventListener("scroll", function () {
  var atualScroll = window.scrollY;

  if (atualScroll > ultimoScroll) {
    // Rolando para baixo
    document.getElementById("header").classList.add("invisivel");
  } else {
    // Rolando para cima
    document.getElementById("header").classList.remove("invisivel");
  }

  ultimoScroll = atualScroll;
});