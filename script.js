function generateQR() {
    const input = document.getElementById("inputText").value.trim();
    const qrImage = document.getElementById("qrImage");
    const imgBox = document.getElementById("imgBox");
    const downloadButton = document.getElementById("downloadButton");

    if (input === "") {
        qrImage.src = "";
        imgBox.style.display = "none";
        downloadButton.style.display = "none";
        return;
    }

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(input)}`;


    imgBox.style.display = "none";
    void imgBox.offsetWidth;
    imgBox.style.display = "block";


    downloadButton.style.display = "block";
}

function downloadQR() {
    const qrImage = document.getElementById("qrImage");

    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qr_code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
