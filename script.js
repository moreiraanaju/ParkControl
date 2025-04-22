
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const reserva = {
        nome: formulario.nome.value,
        numero_celular: formulario.numero_celular.value,
        numero_ap: formulario.numero_ap.value,
        bloco_ap: formulario.bloco_ap.value,
        placa_veiculo: formulario.placa_veiculo.value,
        modelo_veiculo: formulario.modelo_veiculo.value,
        cor_veiculo: formulario.cor_veiculo.value,
        numero_vaga: formulario.numero_vaga.value,
        data_inicio: formulario.data_inicio.value,
        data_fim: formulario.data_fim.value
      };

    // Busca reservas anteriores salvas
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    // Adiciona nova reserva
    reservas.push(reserva);

    // Salva a nova lista no localStorage
    localStorage.setItem("reservas", JSON.stringify(reservas));

    //mostra mensagem de sucesso
    const mensagem = document.getElementById ("mensagem");
    mensagem.textContent = "Reserva efetuada com sucesso!";

    //limpa o formulário
    formulario.reset();

});
 