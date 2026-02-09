"""
URL configuration for MCubes project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView
from django.http import HttpResponse

def healthz(_request):
    return HttpResponse("ok", content_type="text/plain")
urlpatterns = [
    path('admin/', admin.site.urls),
    path('i18n/', include('django.conf.urls.i18n')),
    path('healthz/', healthz, name='healthz'),
    path('', include('home.urls')),
    path('education/', include('education.urls')), 
    path('account/', include('account.urls')), 
    path('timer/', include('rubik_timer.urls')),
    path('stats/', include('stats.urls')),
    path('favicon.ico', RedirectView.as_view(url=static('favicon.ico'))),
    path('comingsoon/', include('comingsoon.urls')),
    path('aboutus/', include('aboutus.urls')),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
