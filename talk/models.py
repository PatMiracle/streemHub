from django.db import models
from engage.models import Post, Comment

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
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
    comment_ids = models.ManyToManyField(Comment)
    foreign_post_ids = models.ManyToManyField(Post)
    group_belong_to = models.ManyToManyField(Group)
    no_of_groups = models.PositiveIntegerField()
    group_is_admin = models.BooleanField()
    no_of_group_is_admin = models.PositiveIntegerField()

    def __str__(self):
        return f'self.user_id - self.username'

class Chat(models.Model):
    chat_id = models.AutoField(primary_key=True)
    user_ids = models.ManyToManyField('User', related_name='chats')
    no_of_users = models.PositiveIntegerField()
    message_id = models.ForeignKey('Message', on_delete=models.SET_NULL, null=True)
    date = models.DateTimeField()
    TYPE_CHOICES = [
        ('Direct Chat', 'Direct Chat'),
        ('Group Chat', 'Group Chat'),
    ]
    type = models.CharField(max_length=12, choices=TYPE_CHOICES)

class Message(models.Model):
    message_id = models.AutoField(primary_key=True)
    date = models.DateTimeField()
    content = models.TextField()
    user_from = models.ForeignKey('User', on_delete=models.CASCADE)
    user_to = models.ForeignKey('User', on_delete=models.CASCADE)
    chat_id = models.ForeignKey(Chat, on_delete=models.CASCADE)

class Group(models.Model):
    admin = models.ForeignKey('User', on_delete=models.CASCADE)
    no_of_admins = models.PositiveIntegerField()
    no_of_users = models.PositiveIntegerField()
    user_ids = models.ManyToManyField('User', related_name='group_chats')
    group_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    media_files = models.ManyToManyField('MediaFile')
    chat = models.OneToOneField(Chat, on_delete=models.CASCADE)

class Video(models.Model):
    time_started = models.DateTimeField()
    time_end = models.DateTimeField()
    duration = models.DurationField()
    user_ids = models.ManyToManyField('User')


