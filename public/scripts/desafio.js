(function () {
    const localeBR = "pt-BR";
    const localeEUA = "en-US";

    let timeBR = document.querySelector('[data-js="time-br"]');
    let timeEUA = document.querySelector('[data-js="time-eua"]');
  
    function inicializaRelogio() {
      setInterval(() => {
        const date = new Date();
        timeBR.innerHTML = date.toLocaleTimeString(localeBR);
        timeEUA.innerHTML = date.toLocaleTimeString(localeEUA);
      }, 1000);
    }
  
    inicializaRelogio();
  })();
  