function iNeedToDo() {
  const meuInput = document.getElementById("tarefa");
  const diasSemanas = document.getElementById("dias-semana");
  if (!meuInput.value) {
    alert("Não foi possível adicionar, o campo está vazio! :( ");
  } else {
    switch (diasSemanas.value) {
      case "domingo":
        domingo.innerHTML += `<li>${tarefa.value}</li>`;
        
        break;
      case "segunda":
        segunda.innerHTML += `<li>${tarefa.value}</li>`;
        break;
      case "terca":
        terca.innerHTML += `<li>${tarefa.value}</li>`;
        break;
      case "quarta":
        quarta.innerHTML += `<li>${tarefa.value}</li>`;
        break;
      case "quinta":
        quinta.innerHTML += `<li>${tarefa.value}</li>`;
        break;
      case "sexta":
        sexta.innerHTML += `<li>${tarefa.value}</li>`;
        break;
      case "sabado":
        sabado.innerHTML += `<li>${tarefa.value}</li>`;
        break;
        default:
        break
    }
    meuInput.value = ""
  }
}
