import imp
from django.urls import path
from . import views

urlpatterns = [
    path('users-list/', views.userList, name='users'),
    path('dishes-list/', views.dishesList, name='dishes'),
    path('post/new/', views.post_new, name='post_new'),
]