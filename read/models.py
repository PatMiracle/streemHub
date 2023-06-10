from django.db import models
from UserModel.models import User

# Create your models here.
class Scrape(models.Model):
    html = models.TextField()
    css = models.TextField()
    js = models.TextField()
    scrape_id = models.AutoField(primary_key=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.scrape_id

class Book(models.Model):
    book_id = models.AutoField(primary_key=True)
    summary = models.TextField(max_length=255)
    audio_file = models.FileField(blank=True, upload_to='audio_files/')
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.book_id

class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    user_uploaded = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    summary = models.TextField(max_length=255)
    date_uploaded = models.DateField(auto_now_add=True)
    no_of_likes = models.PositiveIntegerField()

    def __str__(self):
        return f"User: {self.user_uploaded} - Article ID:  {self.article_id}"