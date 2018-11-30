from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib import auth


def detail(request, a):
    html = 'subs/html_test/' + str(a) + '_quest.html'
    return render(request, html)


def register(request):
    return render(request, 'subs/register.html')


def login(request):
    return render(request, 'subs/login.html')


def index(request):
    baton = 10
    out = {'baton': baton}
    a = 'subs/index.html'
    return render(request, a, out)


def start_quest(request):
    return render(request, 'subs/test_filips/start.html')


def rezults(request):
    return render(request, 'subs/test_filips/rezults.html')


def FilipsTest(request):
    return render(request, 'subs/test_filips/test.html')


def zero(request):
    return render(request, 'subs/zero.html')


def signup(request):
    login = request.POST.get("login", False)
    Lname = request.POST.get("last_name", False)
    Fname = request.POST.get("first_name", False)
    mail = request.POST.get("mail", False)
    password = request.POST.get("password", False)
    repeat_password = request.POST.get("repeat_password", False)

    if password == repeat_password:
        registr = User.objects.create_user(email=mail, username=login, password=password, first_name=Fname,
                                           last_name=Lname)
        registr.save()
        return HttpResponseRedirect('/main')
    elif password != repeat_password:
        return HttpResponseRedirect('/')


def check_login(request):
    login = request.GET.get('login', False)
    user = User.objects.values_list('username', flat=True)  # выборка значений столбца из базы данных
    if login not in user:
        return HttpResponse('good', content_type='text/html')
    else:
        return HttpResponse('bad', content_type='text/html')


def check_mail(request):
    mail = request.GET.get('mail', False)
    user_mail = User.objects.values_list('email', flat=True)
    if mail not in user_mail:
        return HttpResponse('good', content_type='text/html')
    else:
        return HttpResponse('bad', content_type='text/html')


def login_user(request):
    login = request.POST.get('login_log', False)
    password = request.POST.get('password_log', False)
    user = auth.authenticate(username=login, password=password)
    if user is not None:
        auth.login(request, user)
        print(user)
        return HttpResponseRedirect('/main/')
    else:
        print('сработало иначе')
        return HttpResponseRedirect('/main/login/')
