from django.db import models

# Create your models here.
class Scrape(models.Model):
    html = models.TextField()
    css = models.TextField()
    js = models.TextField()
    scrape_id = models.AutoField(primary_key=True)
    date = models.DateField(auto_now_add=True)

class Book(models.Model):
    book_id = models.AutoField(primary_key=True)
    summary = models.TextField(max_length=255)
    audio_file = models.FileField(blank=True, upload_to='audio_files/')
    date_created = models.DateField(auto_now_add=True)

class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    summary = models.TextField(max_length=255)
    date_uploaded = models.DateField(auto_now_add=True)
    no_of_likes = models.PositiveIntegerField()