let QRtext = document.getElementById("QR-text");
let QRbox = document.getElementById("QR-box");
let QRimg = document.getElementById("QR-img");

let downloadBtn = document.getElementById("download-btn");

function generateQR() {
  if (QRtext.value.length > 0) {
    QRimg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      QRtext.value;
    QRbox.classList.add("show-img");
    downloadBtn.style.display = "block";
  } else {
    QRtext.classList.add("error");
    setTimeout(() => {
      QRtext.classList.remove("error");
    }, 1000);
  }
}

function downloadQR() {
  const link = document.createElement("a");
  link.href = QRimg.src;
  link.download = "qr-code.png";
  link.click();
}