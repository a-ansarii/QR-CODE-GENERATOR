let btn = document.querySelector("button");
const qrCode = document.querySelector("#qr-code")
const btn_clear = document.querySelector(".clear");
let input = document.querySelector("#input_url")

btn.addEventListener("click", createProcess = (evt) => {
    evt.preventDefault(evt);
    const url = document.querySelector("input").value;
    console.log(url);
    //to check whether the url is valid i.e, entered or not
    if (url === "") {
        alert("Please enter the URL");
    }
    else generate_QR(url);
});

const generate_QR = (url) => {
    let qr = new QRCode(document.getElementById("qr-code"), {
        text: url,
        width: 300,
        height: 300,
    });
    btn_clear.style.display = "block";
};
btn_clear.addEventListener("click" , clear_QRCode = (evt) =>{
    evt.preventDefault();
    document.getElementById("input_url").value = "";
    document.getElementById("qr-code").innerHTML = "";
    btn_clear.style.display = "none";
    
});

