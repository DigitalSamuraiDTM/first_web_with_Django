var par = Number(sessionStorage.getItem('par'));
var yes = false;
var no = false;
var number_quest = 0,fear_not_waiting_social = 0, low_resistance_stress = 0, problems_and_fears_with_teachers = 0 ;
var  main_choice_quest = 0, anxiety_in_school = 0, social_fear = 0,  frustration = 0, fear_self_expressions = 0, fear_situation_to_check = 0 ;
//on load




//Test Filips
function give_results_filips() {
    main_choice_quest = sessionStorage.getItem('main_choice_quest');
    anxiety_in_school= sessionStorage.getItem('anxiety_in_school');
    social_fear= sessionStorage.getItem('social_fear');
    frustration= sessionStorage.getItem('frustration');
    fear_self_expressions= sessionStorage.getItem('fear_self_expressions');
    fear_situation_to_check= sessionStorage.getItem('fear_situation_to_check');
    fear_not_waiting_social= sessionStorage.getItem('fear_not_waiting_social');
    low_resistance_stress= sessionStorage.getItem('low_resistance_stress');
    problems_and_fears_with_teachers= sessionStorage.getItem('problems_and_fears_with_teachers');
    document.getElementById('main_result_filips').innerText='Основное прохождение: '+main_choice_quest;
    document.getElementById('anxiety_in_school').innerText='Общая тревожность в школе: '+anxiety_in_school;
    document.getElementById('social_fear').innerText='Переживание социального стресса: '+social_fear;
    document.getElementById('frustration').innerText='Фрустрация потребности в достижении успеха: '+frustration;
    document.getElementById('fear_self_expressions').innerText='Страх самовыражения: '+fear_self_expressions;
    document.getElementById('fear_situation_to_check').innerText='Страх ситуации проверки знаний: ' +fear_situation_to_check;
    document.getElementById('fear_not_waiting_social').innerText='Страх несоответствовать ожиданиям окружающих: '+fear_not_waiting_social;
    document.getElementById('low_resistance_stress').innerText='Низкая физиологическая сопротивляемость стрессу: '+low_resistance_stress;
    document.getElementById('problems_and_fears_with_teachers').innerText='Проблемы и страхи в отношениях с учителями: '+problems_and_fears_with_teachers;

    // Main









//Others functions

function param_ready() {
    if (sessionStorage.getItem('par') !== 0) {
        document.getElementById('key').innerText="Переменная есть";
        par = sessionStorage.getItem('par');
        document.getElementById('rez2').innerText=par;
    }
}
function back_to_main() {

    location.href='/main/';
}


}

function to_start_filips() {
    location.href='/main/FilipsTest/start/';
}
function to_test_filips() {
    location.href='/main/FilipsTest/test/';
}
function on_yes_button() {
        yes = true;
        test_filips();

}
function on_no_button() {

        no = true;
        test_filips();

}
function test_filips() {
    number_quest+=1;

    switch (number_quest){
        case 1: {
            document.getElementById('filip_number_test').innerText='Вопрос 2/58';
            document.getElementById('filip_text_test').innerText=' Волнуешься ли ты, когда учитель говорит, что собирается проверить, насколько ты знаешь материал?';

            if (yes==true) { //1
                yes = false;
                frustration+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            }
            break;
        case 2:
            document.getElementById('filip_number_test').innerText='Вопрос 3/58';
            document.getElementById('filip_text_test').innerText='Трудно ли тебе работать в классе так, как этого хочет учитель?';

            if (yes==true) {//2
                yes = false;
                anxiety_in_school+=1;
                problems_and_fears_with_teachers+=1;
                fear_situation_to_check+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 3:
            document.getElementById('filip_number_test').innerText='Вопрос 4/58';
            document.getElementById('filip_text_test').innerText='Снится ли тебе временами, что учитель в ярости оттого, что ты не знаешь урок?';
            if (yes==true) {//3
                yes = false;
                frustration+=1;
                fear_not_waiting_social+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 4:
            document.getElementById('filip_number_test').innerText='Вопрос 5/58';
            document.getElementById('filip_text_test').innerText='Случалось ли, что кто-нибудь из твоего класса бил или ударял тебя?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                social_fear+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 5:
            document.getElementById('filip_number_test').innerText='Вопрос 6/58';
            document.getElementById('filip_text_test').innerText='Часто ли тебе хочется, чтобы учитель не торопился при объяснении нового материала, пока ты не поймешь, что он говорит?';
            if (yes==true) {
                yes = false;

            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 6:
            document.getElementById('filip_number_test').innerText='Вопрос 7/58';
            document.getElementById('filip_text_test').innerText='Сильно ли ты волнуешься при ответе или выполнении задания?';
            if (yes==true) {
                yes = false;
                frustration+=1;
                problems_and_fears_with_teachers+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 7:
            document.getElementById('filip_number_test').innerText='Вопрос 8/58';
            document.getElementById('filip_text_test').innerText='Случается ли с тобой, что ты боишься высказываться на уроке, потому что боишься сделать глупую ошибку?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                fear_situation_to_check+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 8:
            document.getElementById('filip_number_test').innerText='Вопрос 9/58';
            document.getElementById('filip_text_test').innerText='Дрожат ли у тебя колени, когда тебя вызывают отвечать?';
            if (yes==true) {
                yes = false;
                fear_not_waiting_social+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 9:
            document.getElementById('filip_number_test').innerText='Вопрос 10/58';
            document.getElementById('filip_text_test').innerText='Часто ли твои одноклассники смеются над тобой, когда вы играете в разные игры?';
            if (yes==true) {
                yes = false;
                low_resistance_stress+=1;
            }
            else if (no==true){
                main_choice_quest+=1;
                no = false;
                }
            break;
        case 10:
            document.getElementById('filip_number_test').innerText='Вопрос 11/58';
            document.getElementById('filip_text_test').innerText='Случается ли, что тебе ставят более низкую оценку, чем ты ожидал?';
            if (yes==true) {
                yes = false;
                social_fear+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 11:
            document.getElementById('filip_number_test').innerText='Вопрос 12/58';
            document.getElementById('filip_text_test').innerText='Волнует ли тебя вопрос о том, не оставят ли тебя на второй год?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                frustration+=1;
                problems_and_fears_with_teachers+=1;
                }
            break;
        case 12:
            document.getElementById('filip_number_test').innerText='Вопрос 13/58';
            document.getElementById('filip_text_test').innerText='Стараешься ли ты избегать игр, в которых делается выбор, потому что тебя, как правило, не выбирают?';
            if (yes==true) {
                yes = false;
                fear_situation_to_check+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 13:
            document.getElementById('filip_number_test').innerText='Вопрос 14/58';
            document.getElementById('filip_text_test').innerText='Бывает ли временами, что весь дрожишь, когда тебя вызывают отвечать?';
            if (yes==true) {
                yes = false;
                fear_not_waiting_social+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 14:
            document.getElementById('filip_number_test').innerText='Вопрос 15/58';
            document.getElementById('filip_text_test').innerText='Часто ли у тебя возникает ощущение, что никто из твоих одноклассников не хочет делать то, что хочешь ты?';
            if (yes==true) {
                yes = false;
                low_resistance_stress+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 15:
            document.getElementById('filip_number_test').innerText='Вопрос 16/58';
            document.getElementById('filip_text_test').innerText='Сильно ли ты волнуешься перед тем, как начать выполнять задание?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                social_fear+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 16:
            document.getElementById('filip_number_test').innerText='Вопрос 17/58';
            document.getElementById('filip_text_test').innerText='Трудно ли тебе получать такие отметки, каких ждут от тебя родители?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                fear_situation_to_check+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 17:
            document.getElementById('filip_number_test').innerText='Вопрос 18/58';
            document.getElementById('filip_text_test').innerText=' Боишься ли ты временами, что тебе станет дурно в классе?';
            if (yes==true) {
                yes = false;
                frustration+=1;
                fear_not_waiting_social+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 18:
            document.getElementById('filip_number_test').innerText='Вопрос 19/58';
            document.getElementById('filip_text_test').innerText=' Будут ли твои одноклассники смеяться над тобой, если ты сделаешь ошибку при ответе?';
            if (yes==true) {
                yes = false;
                low_resistance_stress+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 19:
            document.getElementById('filip_number_test').innerText='Вопрос 20/58';
            document.getElementById('filip_text_test').innerText='Похож ли ты на своих одноклассников?';
            if (yes==true) {
                yes = false;
                frustration+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 20:
            document.getElementById('filip_number_test').innerText='Вопрос 21/58';
            document.getElementById('filip_text_test').innerText='Выполнив задание, беспокоишься ли ты о том, хорошо ли с ним справился?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                social_fear+=1;
                }
            break;
        case 21:
            document.getElementById('filip_number_test').innerText='Вопрос 22/58';
            document.getElementById('filip_text_test').innerText='Когда ты работаешь в классе, уверен ли ты в том, что все хорошо запомнишь?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                fear_situation_to_check+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 22:
            document.getElementById('filip_number_test').innerText='Вопрос 23/58';
            document.getElementById('filip_text_test').innerText='Снится ли тебе иногда, что ты в школе не можешь ответить на вопрос учителя?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                fear_not_waiting_social+=1;
                }
            break;
        case 23:
            document.getElementById('filip_number_test').innerText='Вопрос 24/58';
            document.getElementById('filip_text_test').innerText='Верно ли, что большинство ребят относятся к тебе по–дружески?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                low_resistance_stress+=1;

            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 24:
            document.getElementById('filip_number_test').innerText='Вопрос 25/58';
            document.getElementById('filip_text_test').innerText='Работаешь ли ты более усердно, если знаешь, что результаты твоей работы будут сравниваться в классе с результатами твоих одноклассников?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                social_fear+=1;
                }
            break;
        case 25:
            document.getElementById('filip_number_test').innerText='Вопрос 26/58';
            document.getElementById('filip_text_test').innerText='Часто ли ты мечтаешь о том, чтобы поменьше волноваться, когда тебя спрашивают?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                frustration+=1;
            }
            break;
        case 26:
            document.getElementById('filip_number_test').innerText='Вопрос 27/58';
            document.getElementById('filip_text_test').innerText='Боишься ли ты временами вступать в спор?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                fear_self_expressions+=1;
                fear_situation_to_check+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 27:
            document.getElementById('filip_number_test').innerText='Вопрос 28/58';
            document.getElementById('filip_text_test').innerText='Чувствуешь ли ты, что твое сердце начинает сильно биться, когда учитель говорит, что собирается проверить твою готовность к уроку?';
            if (yes==true) {
                yes = false;
                fear_self_expressions+=1;

            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 28:
            document.getElementById('filip_number_test').innerText='Вопрос 29/58';
            document.getElementById('filip_text_test').innerText='Когда ты получаешь хорошие отметки, думает ли кто-нибудь из твоих друзей, что ты хочешь выслужиться?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                low_resistance_stress+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 29:
            document.getElementById('filip_number_test').innerText='Вопрос 30/58';
            document.getElementById('filip_text_test').innerText='Хорошо ли ты себя чувствуешь с теми из твоих одноклассников, к которым ребята относятся с особым вниманием?';
            if (yes==true) {
                yes = false;
                frustration+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 30:
            document.getElementById('filip_number_test').innerText='Вопрос 31/58';
            document.getElementById('filip_text_test').innerText='Бывает ли, что некоторые ребята в классе говорят что–то, что тебя задевает?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                fear_self_expressions+=1;
                social_fear+=1;
                }
            break;
        case 31:
            document.getElementById('filip_number_test').innerText='Вопрос 32/58';
            document.getElementById('filip_text_test').innerText='Как ты думаешь, теряют ли расположение те из учеников, которые не справляются с учебой?';
            if (yes==true) {
                yes = false;
                fear_self_expressions+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 32:
            document.getElementById('filip_number_test').innerText='Вопрос 33/58';
            document.getElementById('filip_text_test').innerText='Похоже ли на то, что большинство твоих одноклассников не обращают на тебя внимания?';
            if (yes==true) {
                yes = false;
                frustration+=1;
                problems_and_fears_with_teachers+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 33:
            document.getElementById('filip_number_test').innerText='Вопрос 34/58';
            document.getElementById('filip_text_test').innerText='Часто ли ты боишься выглядеть нелепо?';
            if (yes==true) {
                yes = false;
                fear_self_expressions+=1;
                social_fear+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 34:
            document.getElementById('filip_number_test').innerText='Вопрос 35/58';
            document.getElementById('filip_text_test').innerText='Доволен ли ты тем, как к тебе относятся учителя?';
            if (yes==true) {
                yes = false;
                fear_self_expressions+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 35:
            document.getElementById('filip_number_test').innerText='Вопрос 36/58';
            document.getElementById('filip_text_test').innerText='Помогает ли твоя мама в организации вечеров, как другие мамы твоих одноклассников?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                frustration+=1;
                problems_and_fears_with_teachers+=1;
                }
            break;
        case 36:
            document.getElementById('filip_number_test').innerText='Вопрос 37/58';
            document.getElementById('filip_text_test').innerText=' Волновало ли тебя когда-нибудь, что думают о тебе окружающие?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                social_fear+=1;
                fear_self_expressions+=1;
                }
            break;
        case 37:
            document.getElementById('filip_number_test').innerText='Вопрос 38/58';
            document.getElementById('filip_text_test').innerText=' Надеешься ли ты в будущем учиться лучше, чем сейчас?';
            if (yes==true) {
                yes = false;
                fear_self_expressions+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
            }
            break;
        case 38:
            document.getElementById('filip_number_test').innerText='Вопрос 39/58';
            document.getElementById('filip_text_test').innerText='Считаешь ли ты, что одеваешься в школе так же хорошо, как и твои одноклассники?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                frustration+=1;
                }
            break;
        case 39:
            document.getElementById('filip_number_test').innerText='Вопрос 40/58';
            document.getElementById('filip_text_test').innerText='Часто ли ты задумываешься, отвечая на уроке, что думают о тебе в это время другие?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                fear_self_expressions+=1;
                social_fear+=1;
                }
            break;
        case 40:
            document.getElementById('filip_number_test').innerText='Вопрос 41/58';
            document.getElementById('filip_text_test').innerText=' Обладают ли способные ученики какими–то особыми правами, которых нет у других ребят в классе?';
            if (yes==true) {
                yes = false;
                fear_self_expressions+=1;

            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
            }
            break;
        case 41:
            document.getElementById('filip_number_test').innerText='Вопрос 42/58';
            document.getElementById('filip_text_test').innerText=' Злятся ли некоторые из твоих одноклассников, когда тебе удается быть лучше их?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                frustration+=1;
                problems_and_fears_with_teachers+=1;
                }
            break;
        case 42:
            document.getElementById('filip_number_test').innerText='Вопрос 43/58';
            document.getElementById('filip_text_test').innerText='Доволен ли ты тем, как к тебе относятся одноклассники?';
            if (yes==true) {
                yes = false;
                social_fear+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
            }
            break;
        case 43:
            document.getElementById('filip_number_test').innerText='Вопрос 44/58';
            document.getElementById('filip_text_test').innerText=' Хорошо ли ты себя чувствуешь, когда остаешься один на один с учителем?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                frustration+=1;
                }
            break;
        case 44:
            document.getElementById('filip_number_test').innerText='Вопрос 45/58';
            document.getElementById('filip_text_test').innerText='Высмеивают ли временами одноклассники твою внешность и поведение?';
            if (yes==true) {
                yes = false;
                main_choice_quest+=1;
            }
            else if (no==true){
                no = false;
                fear_self_expressions+=1;
                problems_and_fears_with_teachers+=1;
                social_fear+=1;
                }
            break;
        case 45:
            document.getElementById('filip_number_test').innerText='Вопрос 46/58';
            document.getElementById('filip_text_test').innerText=' Думаешь ли ты, что беспокоишься о своих школьных делах больше, чем другие ребята?';
            if (yes==true) {
                yes = false;
                fear_self_expressions+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 46:
            document.getElementById('filip_number_test').innerText='Вопрос 47/58';
            document.getElementById('filip_text_test').innerText=' Если ты не можешь ответить, когда тебя спрашивают, чувствуешь ли ты, что вот–вот расплачешься?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 47:
            document.getElementById('filip_number_test').innerText='Вопрос 48/58';
            document.getElementById('filip_text_test').innerText='Когда вечером ты лежишь в постели, думаешь ли ты временами с беспокойством о том, что будет завтра в школе?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
                problems_and_fears_with_teachers+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 48:
            document.getElementById('filip_number_test').innerText='Вопрос 49/58';
            document.getElementById('filip_text_test').innerText='Работая над трудным заданием, чувствуешь ли ты порой, что совершенно забыл вещи, которые хорошо знал раньше?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 49:
            document.getElementById('filip_number_test').innerText='Вопрос 50/58';
            document.getElementById('filip_text_test').innerText='Дрожит ли слегка твоя рука, когда ты работаешь над заданием?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 50:
            document.getElementById('filip_number_test').innerText='Вопрос 51/58';
            document.getElementById('filip_text_test').innerText='Чувствуешь ли ты, что начинаешь нервничать, когда учитель говорит, что собирается дать классу задание?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 51:
            document.getElementById('filip_number_test').innerText='Вопрос 52/58';
            document.getElementById('filip_text_test').innerText='Пугает ли тебя проверка твоих заданий в школе?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 52:
            document.getElementById('filip_number_test').innerText='Вопрос 53/58';
            document.getElementById('filip_text_test').innerText='Когда учитель говорит, что собирается дать классу задание, чувствуешь ли ты страх, что не справишься с ним?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 53:
            document.getElementById('filip_number_test').innerText='Вопрос 54/58';
            document.getElementById('filip_text_test').innerText='Снилось ли тебе временами, что твои одноклассники могут сделать то, что не можешь ты?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 54:
            document.getElementById('filip_number_test').innerText='Вопрос 55/58';
            document.getElementById('filip_text_test').innerText='Когда учитель объясняет материал, кажется ли тебе, что твои одноклассники понимают его лучше, чем ты?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 55:
            document.getElementById('filip_number_test').innerText='Вопрос 56/58';
            document.getElementById('filip_text_test').innerText='Беспокоишься ли ты по дороге в школу, что учитель может дать классу проверочную работу?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 56:
            document.getElementById('filip_number_test').innerText='Вопрос 57/58';
            document.getElementById('filip_text_test').innerText='Когда ты выполняешь задание, чувствуешь ли ты обычно, что делаешь это плохо?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 57:
            document.getElementById('filip_number_test').innerText='Вопрос 58/58';
            document.getElementById('filip_text_test').innerText='Дрожит ли слегка твоя рука, когда учитель просит сделать задание на доске перед всем классом?';
            if (yes==true) {
                yes = false;
                anxiety_in_school+=1;
            }
            else if (no==true){
                no = false;
                main_choice_quest+=1;
                }
            break;
        case 58:
            if (yes==true){//58
                anxiety_in_school+=1;
            }
            else if(no==true){
                main_choice_quest+=1;
            }
            sessionStorage.setItem('main_choice_quest', main_choice_quest);
            sessionStorage.setItem('fear_not_waiting_social', fear_not_waiting_social);
            sessionStorage.setItem('social_fear',social_fear);
            sessionStorage.setItem('problems_and_fears_with_teachers',problems_and_fears_with_teachers);
            sessionStorage.setItem('frustration',frustration);
            sessionStorage.setItem('low_resistance_stress', low_resistance_stress);
            sessionStorage.setItem('anxiety_in_school', fear_self_expressions);
            sessionStorage.setItem('fear_situation_to_check', fear_situation_to_check);
            sessionStorage.setItem('anxiety_in_school', anxiety_in_school);
            number_quest = 1;
            location.href='/main/FilipsTest/results/';
            break;
    }
    document.getElementById('hate').innerText=main_choice_quest;

}

