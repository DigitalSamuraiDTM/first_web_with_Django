from django.db import models

class Quest(models.Model):
    data_quest = models.DateTimeField('Дата публикации')
    quest_text = models.CharField(max_length=100)
    def __str__(self):
        return self.quest_text


class children(models.Model):
    school_name = models.CharField(max_length=100)
    user_name = models.CharField(max_length=100)
    e_mail = models.EmailField()
    password = models.CharField(max_length=200)
    def __str__(self):
        return "%s, %s, %s" % (self.user_name, self.e_mail, self.password)

    class Meta:  #класс мета, даёт углубленные настройки
        verbose_name = 'User' #имя пользователя в ед. числе
        verbose_name_plural = 'Users' # во мн. числе

class Users_data_question(models.Model):
    login = models.CharField(max_length=100)
    reiteration_test = models.IntegerField()
    true_choice = models.IntegerField()
    bad_choice = models.IntegerField()

    main_choice_quest = models.IntegerField()
    anxiety_in_school = models.IntegerField()
    social_fear = models.IntegerField()
    frustration = models.IntegerField()
    fear_self_expressions = models.IntegerField()
    fear_situation_to_check = models.IntegerField()
    fear_not_waiting_social = models.IntegerField()
    low_resistance_stress = models.IntegerField()
    problems_and_fears_with_teachers = models.IntegerField()

    def __str__(self):
        return '%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s' % (self.login,self.reiteration_test, self.true_choice, self.bad_choice, self.main_choice_quest,
                                                                       self.anxiety_in_school, self.social_fear, self.frustration, self.fear_self_expressions,
                                                                       self.fear_situation_to_check, self.fear_not_waiting_social, self.low_resistance_stress,
                                                                       self.problems_and_fears_with_teachers)

    class Meta:
        verbose_name = 'Users_data_question'
        verbose_name_plural = 'Users_data_questions'