
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const mensagem = document.getElementById ("mensagem");
    mensagem.textContent = "Reserva efetuada com sucesso!";

});
 