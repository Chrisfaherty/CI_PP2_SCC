const sendFormButton = document.getElementById("submit-button");

document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.init("user_ar8nvoepKsy2RQrM8");
});