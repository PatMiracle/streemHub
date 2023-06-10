from django.db import models
from UserModel.models import User

# Create your models here.
class Search(models.Model):
    search_id = models.AutoField(primary_key=True)
    params = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"Search ID: {self.search_id} - User: {self.user_id} - Search Params: {self.params}"