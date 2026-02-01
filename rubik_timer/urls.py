from django.urls import path
from . import views

app_name = 'rubik_timer'

urlpatterns = [
    path('', views.choose_timer, name='choose_timer'),
    path('timer_2x2', views.timer_2x2, name='timer_2x2'),
]