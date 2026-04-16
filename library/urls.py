from django.urls import path
from . import views

urlpatterns = [
    path('', views.choose, name='library'),
    path('cll_2x2', views.cll_2x2, name='cll_2x2'),
    path('def_2x2', views.def_2x2, name='def_2x2'),
]