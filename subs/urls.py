from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='subs'),

    path('start/', views.start_quest, name='start'),

    path('register/', views.register, name='register'),

    # path('<int:a>/', views.detail, name='detail'), #принимает значение int и отрисовывает страницу по значению. СТРОГИЙ СИНТАКСИС!

    path('FilipsTest/results/', views.rezults, name='results'),

    path('FilipsTest/test/', views.FilipsTest, name='FilipsTest'),

    path('signup', views.signup, name='signup'),  # имя создано для того, чтобы форма могла по нему обращаться!

    path('register/check_login/', views.check_login, name='check_login'),

    path('register/check_mail/', views.check_mail, name='check_mail'),

    path('login/', views.login, name='login_html'),

    path('login_user/', views.login_user, name='login'),

    path('logout', views.logout, name='logout'),

    path('work', views.work, name='work'),

    path('save_additional_data',views.save_additional_data, name='save_additional_data'),

    path('profile', views.profile, name='profile'),

    path('change_data', views.change_data, name='change_data'),

    path('old_results', views.old_results, name='old_results'),

    path('rechange',views.rechange, name='rechange'),

    path('develop', views.develop, name='develop')

]
