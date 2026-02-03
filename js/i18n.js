// script de internacionalização

let currentLang = "pt";

async function loadLanguage(lang) {
  try {
    const response = await fetch(`assets/i18n/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    renderStacks(translations);
    renderProjects(translations);


    currentLang = lang;
  } catch (error) {
    console.error("Erro ao carregar idioma:", error);
  }
}

// idioma padrão ao carregar
document.addEventListener("DOMContentLoaded", () => {
  loadLanguage("pt");
});

function renderStacks(translations) {
  const container = document.getElementById("stack-container");
  if (!container) return;

  container.innerHTML = "";

  // função para criar um card para cada stack que existir 
  STACKS.forEach(stack => {
    const card = document.createElement("div");
    card.className = "stack-card";

    card.innerHTML = `
      <h4>${stack.name}</h4>
      <p>${translations[`stack.descriptions.${stack.id}`]}</p>
    `;

    container.appendChild(card);
  });
}

function renderProjects(translations) {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = "";

  PROJECTS.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const techList = project.techs
      .map(tech => `<span class="tech-badge">${tech}</span>`)
      .join("");

    card.innerHTML = `
      <h4>${project.title}</h4>
      <p>${translations[`projects.descriptions.${project.id}`]}</p>

      <div class="project-techs">
        ${techList}
      </div>

      <a href="${project.github}" target="_blank" class="project-link">
        GitHub
      </a>
    `;

    container.appendChild(card);
  });
}

