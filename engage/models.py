from django.db import models
from engage.models import User

# Create your models here.

class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    no_of_likes = models.PositiveIntegerField()
    no_of_comments = models.PositiveIntegerField()
    comment_ids = models.ManyToManyField('Comment')
    date = models.DateTimeField()
    text_content = models.TextField()
    video_or_image_content = models.FileField(upload_to='post_media/')

    def __str__(self):
        return f'self.title - self.user'

class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()
    date = models.DateTimeField()
    no_of_likes = models.PositiveIntegerField()
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    no_of_subcomments = models.PositiveIntegerField()
    subcomment_ids = models.ManyToManyField('Subcomment')
    image_content = models.FileField(upload_to='comment_media/')

    def __str__(self):
        return f'self.post - self.content'

class Subcomment(models.Model):
    subcomment_id = models.AutoField(primary_key=True)
    content = models.TextField()
    no_of_likes = models.PositiveIntegerField()
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    date = models.DateTimeField()

    def __str__(self):
        return f'self.content - self.user'