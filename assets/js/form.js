function sendMail(params){
    var tempParams = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    list_radio: document.getElementById('list_radio').value,
    game_radio: document.getElementById('game_radio').value,
};
emailjs.send('service_3tbvdmq','template_psbp8aj',tempParams)
.then(function(res){
    console.log('success', res.status);
})
};