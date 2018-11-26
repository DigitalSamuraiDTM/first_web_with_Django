from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import children
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
    school = request.POST.get("school", False)
    mail = request.POST.get("mail", False)
    password = request.POST.get("password", False)
    repeat_password = request.POST.get("repeat_password", False)

    if password == repeat_password:
        registr = User.objects.create_children(childrenname='Vasya', email='Vasya@list.ru', password='qwerty1234')
        registr.save()
        reg = children(school_name=school, children_name=login, e_mail=mail, password=password)
        reg.save()
        return HttpResponseRedirect('/main')
    elif password != repeat_password:
        return HttpResponseRedirect('/')


def check_login(request):
    login = request.GET.get('login', False)
    user = children.objects.values_list('children_name', flat=True)  # выборка значений столбца из базы данных
    if login not in user:
        return HttpResponse('good', content_type='text/html')
    else:
        return HttpResponse('bad', content_type='text/html')


def check_mail(request):
    mail = request.GET.get('mail', False)
    children_mail = children.objects.values_list('e_mail', flat=True)
    if mail not in children_mail:
        return HttpResponse('good', content_type='text/html')
    else:
        return HttpResponse('bad', content_type='text/html')


def login_user(request):
    mail = request.POST.get('e_mail_log', False)
    password = request.POST.get('password_log', False)
    mass = (children.objects.filter(e_mail=mail).value())
    pas = (list((mass[0]).values()))[4]
    login = (list((mass[0]).values()))[2]
    if pas == password:
        print(login,pas)
        user = auth.authenticate(username=login, password=pas)
        print(user)
        if user is not None:
            print('Авторизация прошла')
            auth.login(request,user)
            return HttpResponseRedirect('/main/')
        else:
            print('сработало иначе')
            return HttpResponseRedirect('/main/login/')
    else:
        return HttpResponseRedirect('/main/login/')