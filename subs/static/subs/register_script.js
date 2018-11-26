var good_login = false, good_mail = false, good_school = false, good_password = false, good_repeat_password = false,
 repeat_password_val='', password_val='', username='', school='',
 good_log_mail = false, good_log_password = false,  log_password = '';

function check_name(){
    username = document.getElementById('user_login').value;
    if (username.length==0){
        document.getElementById('true_login').innerText='Заполните поле';
        user_login.style.borderColor='red';
        good_login = false;
        return
    }
    $.ajax({
       type:"GET", //тип запроса
       url:"check_login/", //url запроса
       data:{ //данные, которые принимаются из шаблона
           'login':$("#user_login").val(), //выборка данных по айди
       },
       dataType:"text", //тип данных
        cache: false,
       success: function (data) { //функция выполняющаяся после ответа сервера
           if (data == "good"){
                document.getElementById('true_login').innerText='';
                user_login.style.borderColor='lightgreen';
                good_login = true;
           }
           else if (data == "bad"){
                document.getElementById('true_login').innerText='Этот логин занят';
                user_login.style.borderColor='red';
                good_login = false;
           }
       }
    });

}

$(document).ready(function () {
    $('#e_mail').change(function () {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                check_mail()
            } else {
                $(this).css({'border': '2px solid #ff0000'});
                $('#true_mail').text('Введите корректный mail');
                good_mail = false;
            }
        } else {
            $(this).css({'border': '2px solid #ff0000'});
            $('#true_mail').text('Заполните поле');
            good_mail = false;
        }
    });
});

function check_mail(){
    $.ajax({
        type:"GET",
        url:"check_mail",
        data:{
            'mail':$('#e_mail').val(),
        },
        cache: false,
        success: function (data) {
            if (data=="good"){
                document.getElementById('true_mail').innerText='';
                e_mail.style.borderColor='lightgreen';
                good_mail = true;
            }
            else if (data=="bad"){
                document.getElementById('true_mail').innerText='Этот mail уже зарегистрирован';
                e_mail.style.borderColor='red';
                good_mail = false;
            }
        }
    })
}

function check_repeat_password() {

    repeat_password_val = document.getElementById('repeat_password').value;
    password_val=document.getElementById('password').value;
    if (password_val==repeat_password_val){
        repeat_password.style.borderColor='lightgreen';
        document.getElementById('true_repeat_password').innerText='';
        good_repeat_password = true;
    }
    else {
        repeat_password.style.borderColor='red';
        document.getElementById('true_repeat_password').innerText='Пароли не совпадают';
        good_repeat_password = false;
    }

}

function check_len_password() {
    password_val = document.getElementById('password').value;
    if (password_val.length<4){
        document.getElementById('true_password').innerText='Пароль меньше 4 символов';
        password.style.borderColor='red';
        good_password = false;
    }
    if (password_val.length>=4) {
        document.getElementById('true_password').innerText='';
        password.style.borderColor='lightgreen';
        good_password = true;
        console.log(good_password)
    }
    check_repeat_password()
}

function check_school() {
    school = document.getElementById('input_school').value;
    if (school.length==0){
        document.getElementById('true_school').innerText='Заполните поле';
        input_school.style.borderColor='red';
        good_school = false;
    } else{
        document.getElementById('true_school').innerText='';
        input_school.style.borderColor='lightgreen';
        good_school = true;
    }

}

function check_submit() {
    if (good_school==true && good_password==true && good_repeat_password==true && good_mail==true && good_login==true) {
        return true;
    } else{
        alert('Вы что-то пропустили');
        return false;
    }
}

function submit_login() {
    $(document).find('#e_mail_log').change();
    if (good_log_mail==true && good_log_password==true){
        return true;
    } else{
        alert('Что-то пошло не так. Проверьте вводимые поля');
        return false;
    }

}

$(document).ready(function () {
    $('#e_mail_log').change(function () {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                $(this).css({'border-color':'lightgreen'});
                good_log_mail = true;
            } else {
                $(this).css({'border': '2px solid #ff0000'});
                good_log_mail = false;
            }
        } else {
            $(this).css({'border': '2px solid #ff0000'});
            good_log_mail = false;
        }
    });
});

function check_log_pas() {
    log_password = document.getElementById('password_log').value;
    if (log_password.length == 0) {
        good_log_password = false;
        $('#password_log').css('border-color' , 'red');
    } else{
        $('#password_log').css('border-color' , 'lightgreen');
        good_log_password = true;
    }
}