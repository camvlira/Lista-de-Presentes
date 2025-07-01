// Função para destacar o link ativo do menu conforme a seção visível
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
  onScroll(); // roda no carregamento para ativar o link correto
});
