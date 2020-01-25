var titulo = document.querySelector('h1');
titulo.textContent = 'Nutrição';

var pacientes = document.querySelectorAll ('.paciente');

function calculaImc (peso, altura) {
  var imc = 0;
  imc = peso / Math.pow(altura, 2);
  return imc.toFixed(2);
}

function validaPeso(peso){
  if (peso > 0 && peso <= 1000) {
    return true;
  }
  else {
    return false;
  }
}

function validaAltura (altura){
  if (altura > 0 && altura <= 4.0) {
    return true;
  }
  else {
    return false;
  }
}

for (var i = 0; i <=pacientes.length; i++){

  var tdPeso = pacientes[i].querySelector('.info-peso');
  var tdAltura = pacientes[i].querySelector('.info-altura'); 
  var tdImc = pacientes[i].querySelector('.info-imc');
  
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura (altura);
  
  
  if (!pesoValido) {
    tdImc.textContent  = 'Peso inválido';
    pacientes[i].classList.add("paciente-invalido");
  }
  
  if (!alturaValida) {
    tdImc.textContent  = 'Altura inválida';
    pacientes[i].classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } 
}



