document.getElementById("botao-copiar").addEventListener("click", function () {
  var textoCopiado = document.getElementById("texto-copiado");
  var areaDeTransferencia = document.createElement("textarea");
  areaDeTransferencia.value = textoCopiado.textContent;
  document.body.appendChild(areaDeTransferencia);
  areaDeTransferencia.select();
  document.execCommand("copy");
  document.body.removeChild(areaDeTransferencia);
});
