import imp
from django.urls import path
from . import views

urlpatterns = [
    path('users-list/', views.userList, name='users'),
    path('dishes-list/', views.dishesList, name='dishes'),
]