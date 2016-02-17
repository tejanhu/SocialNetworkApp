from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = [
    url(r'^social/', include('social.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
