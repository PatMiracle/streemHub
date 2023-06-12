from django.db import models
from UserModel.models import User
<<<<<<< HEAD
=======
from UserModel.utils import generate_id
>>>>>>> origin/feat-000/post-feature

# Create your models here.
class Search(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    params = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, null=True, on_delete=models.CASCADE)

    def __str__(self):
<<<<<<< HEAD
        return f"Search ID: {self.search_id} - User: {self.user_id} - Search Params: {self.params}"
=======
        return f"Search ID: {self.id} - User: {self.user_id} - Search Params: {self.params}"
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)
>>>>>>> origin/feat-000/post-feature
