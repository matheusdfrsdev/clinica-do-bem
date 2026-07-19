// ==========================================================================
// Clínica do Bem — script.js
// Lógica de interação: header com scroll, menu mobile, smooth scroll,
// accordion do FAQ e ano dinâmico no rodapé.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Ícones Lucide ---------- */
  if (window.lucide) {
    lucide.createIcons();
  }

  /* ---------- Movimento reduzido ----------
     Lido uma vez e reaproveitado no scroll suave abaixo (troca só o modo
     do scrollIntoView). O loop da parede de depoimentos usa a media query
     @prefers-reduced-motion diretamente no CSS, sem depender deste valor. */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header: transparente -> flutuante ao rolar a página ----------
     50px (não 20px) porque agora o header nasce transparente, integrado
     ao Hero — o gatilho precisa de uma rolagem perceptível antes de virar
     a navegação flutuante, não só um leve scroll acidental. */
  const header = document.getElementById('header');

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // estado inicial

  /* ---------- Preenchimento circular no hover dos botões ----------
     --btn-x/--btn-y (lidos pelo clip-path em style.css) gravam o ponto
     exato onde o cursor entrou ou saiu do botão, em % relativo à própria
     caixa do botão — não ao viewport. mouseenter grava a origem do
     preenchimento; mouseleave grava pra onde ele deve recolher, então o
     círculo sempre nasce/desaparece embaixo do cursor, nunca do centro
     fixo do botão. mouseenter/mouseleave não borbulham, então cada botão
     precisa do próprio listener (não dá pra delegar num ancestral).

     O CSS não usa :hover pra disparar o crescimento do círculo (usa a
     classe .is-filling, adicionada abaixo) por causa de um bug de timing:
     o navegador já considera :hover ativo no mesmo instante em que o
     mouseenter dispara, então a transição às vezes pegava a variável
     --btn-x/--btn-y ainda com o valor da interação ANTERIOR como ponto de
     partida — o centro do círculo "viajava" da entrada antiga até a nova
     a cada hover, em vez de já nascer no lugar certo. Forçar um reflow
     (a leitura de offsetWidth, que precisa recalcular layout) entre
     atualizar a variável e adicionar a classe garante que o navegador
     "commita" a posição nova num frame renderizado de verdade antes da
     transição começar. */
  function fillButtonFrom(e, isFilling) {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty('--btn-x', `${x}%`);
    btn.style.setProperty('--btn-y', `${y}%`);
    void btn.offsetWidth; // força o reflow — sem isso a linha abaixo corre o risco de disparar a transição antes do navegador commitar a posição nova
    btn.classList.toggle('is-filling', isFilling);
  }

  document.querySelectorAll('.btn-pink, .btn-white, .btn-outline').forEach((btn) => {
    btn.addEventListener('mouseenter', (e) => fillButtonFrom(e, true));
    btn.addEventListener('mouseleave', (e) => fillButtonFrom(e, false));
  });

  /* ---------- Scroll reveal ----------
     Cada elemento .reveal ganha .is-visible (ver style.css) na primeira vez
     que cruza 15% de área visível, e para de ser observado em seguida — a
     revelação acontece uma vez só, não some de novo ao rolar de volta pra
     cima. rootMargin com -5% na base antecipa um pouco menos o disparo do
     que threshold sozinho faria, pra não revelar conteúdo que mal encostou
     no rodapé da viewport. Cards dentro de um grid .reveal-stagger
     (serviços, passos, localização) escalonam via --i no CSS, não aqui.
     Sob prefers-reduced-motion, tudo aparece de uma vez, sem observer. */
  const revealTargets = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  }

  /* ---------- Scrollspy da navegação ----------
     Marca .is-active no link do menu cuja seção está passando pelo centro
     da tela — não só quando ela toca a borda. rootMargin '-45% 0px -45% 0px'
     encolhe a área de interseção observada para uma faixa fina de 10% no
     meio da viewport; só a seção cruzando essa faixa central conta como
     "atual". Mesmo efeito usado no site da Monique. Como cada link do menu
     aponta 1:1 para o id de uma seção (sem casos de vários ids por link),
     o mapa é montado direto a partir do href de cada [data-nav-link]. */
  const navLinks = document.querySelectorAll('.nav-desktop [data-nav-link]');
  const sectionToNavLink = new Map();

  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (!href.startsWith('#')) return;
    const section = document.getElementById(href.slice(1));
    if (section) {
      sectionToNavLink.set(section, link);
    }
  });

  if (sectionToNavLink.size > 0) {
    const scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const activeLink = sectionToNavLink.get(entry.target);
          if (!activeLink) return;
          navLinks.forEach((link) => link.classList.toggle('is-active', link === activeLink));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sectionToNavLink.forEach((_, section) => scrollSpyObserver.observe(section));
  }

  /* ---------- Menu mobile (hamburguer) ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const whatsappFloat = document.getElementById('whatsappFloat');

  function setMenuOpen(isOpen) {
    mobileMenu.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    // O menu mobile é uma lista longa que pode alcançar o canto inferior
    // direito em telas baixas (ex: celular em modo paisagem) — o botão
    // flutuante do WhatsApp fica escondido enquanto o menu está aberto
    // para não sobrepor o próprio CTA do menu nem os links de navegação.
    if (whatsappFloat) {
      whatsappFloat.classList.toggle('is-hidden', isOpen);
    }
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    setMenuOpen(!isOpen);
  });

  /* ---------- Navegação suave e fechamento do menu mobile ---------- */
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          // Sem isso, o foco do teclado fica parado no link clicado enquanto a
          // página rola sozinha — quem navega por teclado/leitor de tela perde
          // a referência de onde está. tabindex é removido ao sair do elemento
          // para não deixar a seção presa permanentemente na ordem de tabulação.
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
      }
    });
  });

  /* ---------- Accordion do FAQ ----------
     O max-height alvo é a altura real do conteúdo (scrollHeight), não um
     valor fixo. Um valor fixo (ex: 300px) faz a transição percorrer uma
     distância maior do que o conteúdo visível: ao abrir, o texto já fica
     inteiramente visível bem antes da transição terminar (parece instantâneo);
     ao fechar, o efeito inverso disfarça o problema (parece suave). Usar a
     altura real deixa abrir e fechar com a mesma duração percebida.

     max-height:0 + overflow:hidden esconde a resposta visualmente, mas não
     a remove da árvore de acessibilidade — um leitor de tela navegando pelo
     DOM linear encontraria o texto da resposta mesmo com aria-expanded já
     dizendo "false". aria-hidden + inert (alternados junto com .open)
     fecham essa lacuna: fora do estado aberto, a resposta some tanto da
     leitura quanto da navegação por teclado, igual ao que já acontece
     visualmente. */
  function setAnswerHidden(answer, hidden) {
    answer.setAttribute('aria-hidden', String(hidden));
    answer.toggleAttribute('inert', hidden);
  }

  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fecha os outros itens abertos (comportamento equivalente ao
      // estado único "openIndex" do componente original em React)
      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          const openAnswer = openItem.querySelector('.faq-answer');
          openAnswer.style.maxHeight = null;
          setAnswerHidden(openAnswer, true);
        }
      });

      item.classList.toggle('open', !isOpen);
      question.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = isOpen ? null : answer.scrollHeight + 'px';
      setAnswerHidden(answer, isOpen);
    });
  });

  /* ---------- Ano atual no rodapé ---------- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
