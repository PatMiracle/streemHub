from django.db import models
from talk.models import User

# Create your models here.
class Search(models.Model):
    search_id = models.AutoField(primary_key=True)
    params = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, null=True)
