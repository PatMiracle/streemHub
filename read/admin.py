from django.contrib import admin
from .models import Scrape, Book, Article

admin.site.register(Scrape)
admin.site.register(Book)
admin.site.register(Article)