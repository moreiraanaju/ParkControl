function salvarReserva(reserva) {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
  }

const formulario = document.querySelector("form");
const mensagem = document.getElementById("mensagem");


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
  
    mensagem.textContent = "";
    mensagem.style.color = "";
  
    if (!formulario.checkValidity()) {
      mensagem.textContent = "Por favor, preencha todos os campos obrigatórios corretamente.";
      mensagem.style.color = "red";
      return;
    }
  
    const dataInicio = formulario.data_inicio.value;
    const dataFim = formulario.data_fim.value;
  
    if (dataInicio > dataFim) {
      mensagem.textContent = "Erro: A data de término não pode ser anterior à data de início.";
      mensagem.style.color = "red";
      return;
    }
  
    // Carrega as reservas atuais antes de checar conflitos
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  
    const reserva = {
      nome: formulario.nome.value,
      numero_celular: formulario.numero_celular.value,
      numero_ap: formulario.numero_ap.value,
      bloco_ap: formulario.bloco_ap.value,
      placa_veiculo: formulario.placa_veiculo.value,
      modelo_veiculo: formulario.modelo_veiculo.value,
      cor_veiculo: formulario.cor_veiculo.value,
      numero_vaga: formulario.numero_vaga.value,
      data_inicio: dataInicio,
      data_fim: dataFim
    };
  
    const conflito = reservas.find(r => {
      return r.numero_vaga === formulario.numero_vaga.value &&
             !(formulario.data_fim.value < r.data_inicio || formulario.data_inicio.value > r.data_fim);
    });
    
    if (conflito) {
      mensagem.textContent = "Erro: Essa vaga já está reservada nesse período!";
      mensagem.style.color = "red";
      return;
    }
    
    salvarReserva(reserva);
  
    mensagem.textContent = "Reserva efetuada com sucesso!";
    mensagem.style.color = "green";
  
    formulario.reset();
  
    setTimeout(function() {
      window.location.href = "listagem.html";
    }, 2000);
  });
  