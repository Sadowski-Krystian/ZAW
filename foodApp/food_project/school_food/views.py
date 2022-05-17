from contextvars import Context
import imp
from django.utils import timezone
from unittest import loader
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader, Context
from school_food.models import users, Dania
from django.shortcuts import redirect
from .forms import PostForm
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


def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return render(request, 'post_edit.html', {'form': form})
    else:
        form = PostForm()
    return render(request, 'post_edit.html', {'form': form})
    
