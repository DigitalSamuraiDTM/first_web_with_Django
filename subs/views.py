from django.shortcuts import render
from django.http import HttpResponse
from .models import Quest



def detail(request,a):
    html = 'subs/html_test/'+str(a)+'_quest.html'
    return render(request,html)


def index(request):

    baton = 10
    out = {'baton': baton}
    a = 'subs/index.html'
    return render(request,a,out)

def start_quest(request):
    return render(request,'subs/test_filips/start.html')

def rezults(request):
    return render(request,'subs/test_filips/rezults.html')

def FilipsTest(request):
    return render(request,'subs/test_filips/test.html')

