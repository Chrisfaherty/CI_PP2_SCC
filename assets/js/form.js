function sendMail(params){
    var tempParams = {
    name: document.getElementById('to_name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
};
emailjs.send('service_3tbvdmq','template_psbp8aj',tempParams)
.then(function(res){
    console.log('success', res.status);
})
};