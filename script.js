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


//Musica
document.getElementById('logo-som').addEventListener('click', () => {
  const iframe = document.getElementById('bg-music');
  let src = iframe.src;

  if (src.includes('mute=1')) {
    // desmutar
    src = src.replace('mute=1', 'mute=0');
    iframe.src = src;
    iframe.style.display = 'block'; // mostra iframe pra garantir som
  } else {
    // mutar
    src = src.replace('mute=0', 'mute=1');
    iframe.src = src;
    // se quiser, esconde depois
    // iframe.style.display = 'none';
  }
});
