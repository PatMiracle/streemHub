from django.db import models
from .utils import generate_id

class User(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    first_name = models.CharField(max_length=255)
    email = models.EmailField()
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    phone_no = models.CharField(max_length=20)
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    image = models.ImageField(upload_to='user_images/')
    customlink = models.URLField(blank=True)
    date_created = models.DateField()
    is_verified = models.BooleanField()
    rank = models.IntegerField()
    # group_belong_to = models.ManyToManyField(Group)
    no_of_groups = models.PositiveIntegerField()
    group_is_admin = models.BooleanField()
    no_of_group_is_admin = models.PositiveIntegerField()

    def __str__(self):
        return f'User ID: {self.id} - Username: {self.username}'
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)