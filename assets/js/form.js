
/* This function is to connect the form with EmailJS */
const sendFormButton = document.getElementById("submit-button");

            document.getElementById('subscribe-form').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.init('ar8nvoepKsy2RQrM8');
                sendFormButton.value = "Sending...";

                emailjs.sendForm('service_3tbvdmq','template_psbp8aj', this)
                    .then(function() {
                        sendFormButton.value = "Send";
                        alert('Email Sent Sucessfully')
                    }, function(error) {
                        console.log(JSON.stringify(error));
                    });
            });