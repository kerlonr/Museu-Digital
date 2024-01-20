//ROLAR PARA BAIXO SUAVEMENTE
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
      link.addEventListener("click", function (e) {
          e.preventDefault();

          var targetId = this.hash.substring(1);
          var targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});

history.pushState({}, null, "/Estufa-Inteligente");