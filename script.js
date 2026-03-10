let QRtext = document.getElementById("QR-text");
let QRbox = document.getElementById("QR-box");
let QRimg = document.getElementById("QR-img");

function generateQR() {
  if (QRtext.value.length > 0) {
    QRimg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
    QRbox.classList.add("show-img");
  } else {
    QRtext.classList.add("error");
    setTimeout(() => {
      QRtext.classList.add("error");
    }, 1000);
  }
}
