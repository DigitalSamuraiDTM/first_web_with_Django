from django.urls import path
from . import views

urlpatterns =  [
        path('', views.index, name='subs'),

        path('FilipsTest/start/', views.start_quest, name='start'),

        #path('<int:a>/', views.detail, name='detail'), #принимает значение int и отрисовывает страницу по значению. СТРОГИЙ СИНТАКСИС!

        path('FilipsTest/results/', views.rezults, name='results'),

        path('FilipsTest/test/', views.FilipsTest, name='FilipsTest')







    ]
