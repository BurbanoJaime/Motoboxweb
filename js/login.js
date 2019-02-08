var input_mail= document.getElementById('login_mail');
var input_pass = document.getElementById('login_pass');
var login_btn = document.getElementById('login_btn');



login_btn.addEventListener('click', function(){
    if(input_mail.textContent === '' & input_pass.textContent === ''){
   login_btn.setAttribute('disabled',true);
    }else{
        login_btn.setAttribute('disabled',false);

    }
});