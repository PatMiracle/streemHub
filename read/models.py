from django.db import models
from UserModel.models import User
from UserModel.utils import generate_id

# Create your models here.
class Scrape(models.Model):
    html = models.TextField()
    css = models.TextField()
    js = models.TextField()
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.id
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)

class Book(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    summary = models.TextField(max_length=255)
    audio_file = models.FileField(blank=True, upload_to='audio_files/')
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.id
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)

class Article(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    user_uploaded = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    summary = models.TextField(max_length=255)
    date_uploaded = models.DateField(auto_now_add=True)
    no_of_likes = models.PositiveIntegerField()

    def __str__(self):
        return f"User: {self.user_uploaded} - Article ID:  {self.id}"
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)
