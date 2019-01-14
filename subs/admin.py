from django.contrib import admin
from .models import Users_data_question, children

class childrenAdmin(admin.ModelAdmin):


    list_display = ['user_name', 'e_mail', 'password']
    list_filter = ['user_name',] #добавляет функцию фильтрации данных в базе django
    search_fields = ['user_name','e_mail'] #фильтрация уже по вводимым данным с поля
    #exclude=[] выключение отображения поля
    #fields = [] Включение полей отображение
    #list_display = [field.name for field in User._meta.fields] все поля
    class Meta:
        model = children #берет данные из модели  User. При регистрации будет регаться будет класс созданный на основе модели User

class UserData(admin.ModelAdmin):
    list_display = ['login','reiteration_test','true_choice', 'bad_choice']
    list_filter = ['login']
    search_fields = ['login']
    class Meta:
        model = Users_data_question


admin.site.register(children, childrenAdmin)
admin.site.register(Users_data_question, UserData)#регистрация модели User и ему принадлежащего UserAdmin в админке
