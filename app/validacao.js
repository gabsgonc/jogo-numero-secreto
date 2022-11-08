function verificaSeOChutePossuiUmValorValido(chute){
  const numero = +chute

  if(chuteForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor inválido</div>';
    return
  }

  if(numeroForMaiorOuMenorQueValorPermitido(numero)){
    elementoChute.innerHTML += `
      <div>
        Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}
      </div>
    `;
    return
  }

  if(numero === numeroSecreto){
    document.body.innerHTML = `
      <h1>Você acertou!</h1>
      <h3>O número secreto era ${numeroSecreto}</h3>

      <input type="button" value="Jogar Novamente" onClick="window.location.reload()">
    `
  }else if(numero > numeroSecreto){
    elementoChute.innerHTML += `
      <div>
        O número secreto é menor <i class="fa-solid fa-down-long"></i>
      </div>
    `
  }else{
    elementoChute.innerHTML += `
      <div>
        O número secreto é maior <i class="fa-solid fa-up-long"></i>
      </div>
    `
  }

}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero){
  return numero > maiorValor || numero < menorValor
}