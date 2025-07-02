// Destacar link ativo do menu
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".opcoes");
  const sections = Array.from(links).map(link => {
    const id = link.getAttribute("href").substring(1);
    return document.getElementById(id);
  });

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 3; // ponto de referência

    sections.forEach((section, index) => {
      if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        links.forEach(link => link.classList.remove("ativo"));
        links[index].classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // ativa no carregamento

  // Abrir link do card ao clicar nele
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const link = card.querySelector('a');
      if (link) {
        window.open(link.href, '_blank', 'noopener');
      }
    });
  });

  // Previne dupla ação ao clicar no link dentro do card
  document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', e => e.stopPropagation());
  });
});

// function tocarSom() {
//   const som = new Audio('coin-insert.mp3'); // som estilo arcade
//   som.play();
// }
