from .views import Scrape, Scrape_File_Path
from django.urls import path


urlpatterns = [
    path('search_url/', Scrape.as_view(), name= 'scrape'),
    path('search_url_path/', Scrape_File_Path.as_view(), name='scrape')
]