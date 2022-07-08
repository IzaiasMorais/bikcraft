const form = document.querySelector(".form-box");

function formularioEnviado(resposta) {
  if(resposta.ok) {
    form.innerHTML = '<p>Mensagem enviada, em breve entraremos em contato</p>'
  } else {
    form.innerHTML = '<p>Erro no envio, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>'
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const button = document.querySelector(".form-box button");

  button.disable = true;
  button.innerText = "ENVIANDO...";

  const data = new FormData(form);

  fetch('./enviar.php', {
    method: 'POST',
    body: data,
  }).then(formularioEnviado);
}

form.addEventListener("submit", enviarFormulario);
