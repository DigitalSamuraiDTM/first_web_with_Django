from django.db import models
import datetime

class Quest(models.Model):
    data_quest = models.DateTimeField('Дата публикации')
    quest_text = models.CharField(max_length=100)
    def __str__(self):
        return self.quest_text


class User(models.Model):
    school_name = models.CharField(max_length=100)
    user_name = models.CharField(max_length=100)
    e_mail = models.EmailField()
    password = models.CharField(max_length=200)
    def __str__(self):
        return self.user_name