from django.db import models
import datetime

class Quest(models.Model):
    data_quest = models.DateTimeField('Дата публикации')
    quest_text = models.CharField(max_length=100)

    def __str__(self):
        return self.quest_text

    def was_published(self):
        return self.data_quest >= datetime.timezone.now() - datetime.timedelta(days=1)

class Choice(models.Model):
    question = models.ForeignKey(Quest, on_delete=models.CASCADE) #привязка с классом Quest
    choice_text = models.CharField(max_length=100)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text