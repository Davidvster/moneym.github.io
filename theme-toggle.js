(function(){
  const root = document.documentElement;
  const themeRoot = document.querySelector('.mm-theme');
  const autoBtn = document.querySelector('[data-theme-auto]');
  const lightBtn = document.querySelector('[data-theme-light]');
  const darkBtn = document.querySelector('[data-theme-dark]');

  function applyTheme(mode){
    root.removeAttribute('data-theme');
    themeRoot.classList.remove('mm-light','mm-dark');
    autoBtn.setAttribute('aria-pressed', mode === 'auto');
    lightBtn.setAttribute('aria-pressed', mode === 'light');
    darkBtn.setAttribute('aria-pressed', mode === 'dark');

    if(mode === 'auto'){
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      themeRoot.classList.add(prefersDark ? 'mm-dark' : 'mm-light');
    } else if(mode === 'light'){
      themeRoot.classList.add('mm-light');
    } else if(mode === 'dark'){
      themeRoot.classList.add('mm-dark');
    }
  }

  autoBtn.addEventListener('click', function(){ applyTheme('auto'); });
  lightBtn.addEventListener('click', function(){ applyTheme('light'); });
  darkBtn.addEventListener('click', function(){ applyTheme('dark'); });

  applyTheme('auto');
})();
