(function () {
  const locale = "pt-BR";
  let time = document.querySelector('[data-js="time"]');

  function inicializaRelogio() {
    setInterval(() => {
      const date = new Date();
      time.innerHTML = date.toLocaleTimeString(locale);
    }, 1000);
  }

  inicializaRelogio();
})();
