function obtemPacientedoForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function validaPaciente (paciente) {

  var erros = [];

  if (!validaPeso(paciente.peso)) {
      erros.push('Peso é inválido');
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('Altura é inválida');
  }

  if (paciente.nome.length == 0) {
    erros.push('O campo nome não pode ficar vazio');
  }

  if (paciente.gordura.length == 0) {
    erros.push('O campo gordura não pode ficar vazio');
  }

  if (paciente.peso.length == 0) {
    erros.push('O campo peso não pode ficar vazio');
  }

  if (paciente.altura.length == 0) {
    erros.push('O campo altura não pode ficar vazio');
  }
  return erros
}

function exibeMsgErro(erros) {
  var ul = document.querySelector('#listaErros');
  ul.innerHTML = ""

  erros.forEach(function (erro) {
    var li = document.createElement('li');
    li.textContent = erro;
    li.classList.add('msgErro');
    ul.appendChild(li);
  });
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function montaTr (paciente) {
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
  
  return pacienteTr;
}

function adicionaPaciente(paciente) {
  var pacienteTr = montaTr(paciente);
  tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);
}

var botaoAdicionarP = document.querySelector("#adicionar-paciente");
botaoAdicionarP.addEventListener("click", function(event){
  event.preventDefault();

  form = document.querySelector("#form-adicionarP");
  var paciente = obtemPacientedoForm(form);
  
  var erros = validaPaciente(paciente);
  
  if (erros.length > 0) {
      exibeMsgErro(erros);
      return;
  }

  adicionaPaciente(paciente)
  
  var ul = document.querySelector('#listaErros');
  ul.innerHTML = ""
  
  form.reset();
});