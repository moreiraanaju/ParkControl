
const formulario = document.querySelector("form");
const mensagem = document.getElementById("mensagem");


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Limpa mensagem anterior
    mensagem.textContent = "";
    mensagem.style.color = "";

    // Checar se todos os campos obrigatórios foram preenchidos corretamente
    if (!formulario.checkValidity()) {
      mensagem.textContent = "Por favor, preencha todos os campos obrigatórios corretamente.";
      mensagem.style.color = "red";
      return;
    }

    //valida datas
    const dataInicio = formulario.data_inicio.value;
    const dataFim = formulario.data_fim.value;

   
    if (dataInicio > dataFim) {
      mensagem.textContent = "Erro: A data de término não pode ser anterior à data de início.";
      mensagem.style.color = "red";
      return;
    }

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
    mensagem.textContent = "Reserva efetuada com sucesso!";
    mensagem.style.color = "green";

    //limpa o formulário
    formulario.reset();

});
 