from django.contrib import admin
from .models import Quest, User


admin.site.register(Quest) #регистрация модели Quest в админке

admin.site.register(User)
