from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args,**kwargs): 
    # print(args,kwargs)
    print(request.user)
    return HttpResponse('<h1>Hello World</h1>') #String of html code

def contact_view(request, *args,**kwargs):
    return HttpResponse('<h1>contact view</h1>') #String of html code

def about_view(request, *args,**kwargs):
    return HttpResponse('<h1>About view</h1>') #String of html code