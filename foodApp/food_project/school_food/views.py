from contextvars import Context
import imp
from unittest import loader
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader, Context
from school_food.models import users, Dania

# Create your views here.

def userList(request):
    allUsers = users.objects.all()
    tpl = loader.get_template("lista_users.html")
    ctx = {'users': allUsers}
    return HttpResponse(tpl.render(ctx, request))

def dishesList(request):
    allDishes = Dania.objects.all()
    tpl = loader.get_template("lista_dishes.html")
    ctx = {'dishes': allDishes}
    return HttpResponse(tpl.render(ctx, request))
