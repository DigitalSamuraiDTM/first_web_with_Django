from django.urls import path
from . import views
from django.views.defaults import page_not_found

urlpatterns =  [
        path('', views.index, name='subs'),

        path('FilipsTest/start/', views.start_quest, name='start'),

        #path('<int:a>/', views.detail, name='detail'),#принимает значение int и отрисовывает страницу по значению. СТРОГИЙ СИНТАКСИС!

        path('FilipsTest/results/', views.rezults, name='results'),

        path('FilipsTest/test/', views.FilipsTest, name='FilipsTest')








    ]
