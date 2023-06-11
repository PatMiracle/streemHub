from django.db import models
from UserModel.models import User
from UserModel.utils import generate_id

# Create your models here.
class Search(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    params = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"Search ID: {self.id} - User: {self.user_id} - Search Params: {self.params}"
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)