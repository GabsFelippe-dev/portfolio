
/* =========================
   ALTERNAR TEMA
========================= */

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

        themeButton.setAttribute(
            "aria-label",
            "Ativar tema claro"
        );

    } else {

        themeButton.textContent = "🌙";

        themeButton.setAttribute(
            "aria-label",
            "Ativar tema escuro"
        );

    }

});


/* =========================
   FORMULÁRIO DE CONTATO
========================= */

const contactForm = document.getElementById("contact-form");

const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Mostra uma confirmação
    feedback.textContent =
        "Mensagem preenchida com sucesso! Esta é uma demonstração.";

    // Limpa os campos do formulário
    contactForm.reset();

});


/* =========================
   LIMPAR CONFIRMAÇÃO
========================= */

contactForm.addEventListener("input", function () {

    feedback.textContent = "";

});
