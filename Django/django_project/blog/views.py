from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse('<h1> Hello this is blog home.We are writing other things in templete now.</h1>')

def about(request):
    return HttpResponse('<h1>This is blog about page.</h1>')
