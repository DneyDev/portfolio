// script de internacionalização

const DEFAULT_LANG = "pt";

async function loadLanguage(lang) {
  const response = await fetch(`assets/i18n/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
loadLanguage(savedLang);
