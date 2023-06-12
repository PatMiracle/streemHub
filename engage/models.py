from django.db import models
from UserModel.models import User
<<<<<<< HEAD

class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
=======
from UserModel.utils import generate_id

class Post(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
>>>>>>> origin/feat-000/post-feature
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    no_of_likes = models.PositiveIntegerField()
    no_of_comments = models.PositiveIntegerField()
    # comment_ids = models.ManyToManyField(Comment)
    date = models.DateTimeField()
    text_content = models.TextField()
    video_or_image_content = models.FileField(upload_to='post_media/')

    def __str__(self):
        return f'Post title: {self.title} - User: {self.user}'
<<<<<<< HEAD

class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
=======
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)

class Comment(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
>>>>>>> origin/feat-000/post-feature
    post_detail = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()
    date = models.DateTimeField()
    no_of_likes = models.PositiveIntegerField()
    # user = models.ManyToManyField(User)
    no_of_subcomments = models.PositiveIntegerField()
    # subcomment_ids = models.ManyToManyField(Subcomment)
    image_content = models.FileField(upload_to='comment_media/')

    def __str__(self):
        return f'Post ID: {self.post_detail} - Content: {self.content}'
<<<<<<< HEAD

class Subcomment(models.Model):
    subcomment_id = models.AutoField(primary_key=True)
=======
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)

class Subcomment(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
>>>>>>> origin/feat-000/post-feature
    comment = models.ManyToManyField(Comment)
    content = models.TextField()
    no_of_likes = models.PositiveIntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    date = models.DateTimeField()

    def __str__(self):
<<<<<<< HEAD
        return f'Comment Detail: {self.content} - User: {self.user}'
=======
        return f'Comment Detail: {self.content} - User: {self.user}'
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)
>>>>>>> origin/feat-000/post-feature
