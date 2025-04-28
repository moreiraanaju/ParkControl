const corpoTabela = document.getElementById("corpo-tabela");
const totalDeVagas = 15;

// Formata datas no padrão brasileiro
function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

// Lista as reservas na tabela
function listarReservas() {
  corpoTabela.innerHTML = ""; // Limpa a tabela antes de adicionar as linhas novas

  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

  for (let vaga = 1; vaga <= totalDeVagas; vaga++) {
    const linha = document.createElement("tr");

    const reserva = reservas.find(r => parseInt(r.numero_vaga) === vaga);

    if (reserva) {
      linha.innerHTML = `
        <td>${vaga}</td>
        <td>Ocupada</td>
        <td>${formatarData(reserva.data_inicio)}</td>
        <td>${formatarData(reserva.data_fim)}</td>
        <td>${reserva.placa_veiculo}</td>
        <td>${reserva.nome}</td>
        <td>${reserva.numero_celular}</td>
      `;
    } else {
      linha.innerHTML = `
        <td>${vaga}</td>
        <td class="disponivel">Disponível</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      `;
    }

    corpoTabela.appendChild(linha); 
  }
}

// Remove uma reserva de acordo com o número da vaga
function removerReserva(numeroVaga) {
  let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  reservas = reservas.filter(r => r.numero_vaga !== numeroVaga);
  localStorage.setItem("reservas", JSON.stringify(reservas));
  listarReservas(); // Reatualiza a tabela depois de excluir
}

// Gera a listagem ao carregar a página
listarReservas();
