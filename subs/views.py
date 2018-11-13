from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import User


def detail(request, a):
    html = 'subs/html_test/' + str(a) + '_quest.html'
    return render(request, html)


def register(request):
    return render(request, 'subs/register.html')


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
    print(login, mail, school, password, repeat_password)
    if password == repeat_password:
        reg = User(school_name=school, user_name=login, e_mail=mail, password=password)
        reg.save()
        return HttpResponseRedirect('/main')
    elif password != repeat_password:
        return HttpResponseRedirect('/')


def check_login(request):
    login = request.GET.get('login', False)
    user = User.objects.values_list('user_name', flat=True)  # выборка значений столбца из базы данных
    if login not in user:
        return HttpResponse('good', content_type='text/html')
    else:
        return HttpResponse('bad', content_type='text/html')

def check_mail(request):
    mail = request.GET.get('mail', False)
    user_mail = User.objects.values_list('e_mail', flat=True)
    if mail not in user_mail:
        return HttpResponse('good', content_type='text/html')
    else:
        return HttpResponse('bad', content_type='text/html')