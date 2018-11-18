$(document).ready(function () {
    $('#e_mail').keyup(function () {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                $(this).css({'border': '2px solid #569b44'});
                $('#true_mail').text('Верно');
            } else {
                $(this).css({'border': '2px solid #ff0000'});
                $('#true_mail').text('Не верно');
            }
        } else {
            $(this).css({'border': '2px solid #ff0000'});
            $('#true_mail').text('Поле email не должно быть пустым');
        }
    });
});