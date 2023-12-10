const enviaQr = document.querySelector('.botaoEnviar');
const enderecoInput = document.getElementById('endereco');
const qrImg = document.getElementById('qrCodeImg');

function obterEndereco() {
  return enderecoInput.value.trim();
}

function gerarUrlQRCode(endereco) {
  return "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(endereco);
}

function gerarQRCode() {
  const endereco = obterEndereco();

  if (endereco !== '') {
    qrImg.src = gerarUrlQRCode(endereco);
  } else {
    alert('Por favor, insira um endereço válido.');
  }
}

enviaQr.addEventListener("click", gerarQRCode);
