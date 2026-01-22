const form = document.querySelector('form');

const cards = document.querySelectorAll('.card-category');
const catalog = document.querySelector('#catalogo');
const campoMensagem = document.querySelector('textarea[name="message"]');

catalog.addEventListener('click', () => {
    campoMensagem.value = `Olá! Fiquei interessado em itens de escritório. Gostaria de mais informações.`;

    window.location.href = "#contato";
    document.querySelector('input[name="name"]')?.focus();
})

cards.forEach(card => {
    card.addEventListener('click', () => {
        const categoria = card.getAttribute('data-categoria');

        if (campoMensagem) {
            campoMensagem.value = `Olá! Fiquei interessado em ${categoria}. Gostaria de mais informações.`;
        }

        window.location.href = "#contato";
        document.querySelector('input[name="name"]')?.focus();
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());

    const name = value.name;
    const message = value.message;

    const textWhatsapp = `Oi, eu sou ${name}. ${message}`

    const textCode = encodeURIComponent(textWhatsapp);

    const urlWhatsapp = `https://wa.me/5512981184504?text=${textCode}`;
    window.open(urlWhatsapp, "_blank");
});