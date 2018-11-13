from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='subs'),

    path('FilipsTest/start/', views.start_quest, name='start'),

    path('register/', views.register, name='register'),

    # path('<int:a>/', views.detail, name='detail'), #принимает значение int и отрисовывает страницу по значению. СТРОГИЙ СИНТАКСИС!

    path('FilipsTest/results/', views.rezults, name='results'),

    path('FilipsTest/test/', views.FilipsTest, name='FilipsTest'),

    path('signup', views.signup, name='signup'),  # имя создано для того, чтобы форма могла по нему обращаться!

    path('register/check_login/', views.check_login, name='check_login'),

    path('register/check_mail/', views.check_mail, name='check_mail'),

]
