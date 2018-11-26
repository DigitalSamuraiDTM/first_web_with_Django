from django.contrib import admin
from .models import Quest, children

class childrenAdmin(admin.ModelAdmin):


    list_display = ['user_name', 'e_mail', 'password']
    list_filter = ['user_name',] #добавляет функцию фильтрации данных в базе django
    search_fields = ['user_name','e_mail'] #фильтрация уже по вводимым данным с поля
    #exclude=[] выключение отображения поля
    #fields = [] Включение полей отображение
    #list_display = [field.name for field in User._meta.fields] все поля
    class Meta:
        model = children #берет данные из модели  User. При регистрации будет регаться будет класс созданный на основе модели User




admin.site.register(children, childrenAdmin)#регистрация модели User и ему принадлежащего UserAdmin в админке
