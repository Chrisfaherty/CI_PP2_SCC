
/* This function is to connect the form with EmailJS */
function sendMail(params){
    var tempParams = {
    name: document.getElementById('to_name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    
};
emailjs.send('service_3tbvdmq','template_psbp8aj',tempParams)
.then(function(res){
    console.log('success', res.status);
}
);
}
(function(){emailjs.init("ar8nvoepKsy2RQrM8");})();