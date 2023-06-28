from django.db import models
from UserModel.models import User
from UserModel.utils import generate_id

class Chat(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    user_ids = models.ManyToManyField(User, related_name='chats')
    no_of_users = models.PositiveIntegerField()
    # message_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField()
    TYPE_CHOICES = [
        ('Direct Chat', 'Direct Chat'),
        ('Group Chat', 'Group Chat'),
    ]
    type = models.CharField(max_length=12, choices=TYPE_CHOICES, default="Direct Chat")

    def __str__(self):
        return f"Chat ID: {self.id} - Users: {self.no_of_users}"
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)

class Message(models.Model):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    date = models.DateTimeField()
    content = models.TextField()
    user_from = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_send')
    user_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_receive')
    chat_id = models.ForeignKey(Chat, on_delete=models.CASCADE)

    def __str__(self):
        return f"Message ID: {self.id} - from: {self.user_from} - to: {self.user_to}"
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)

class GroupChat(models.Model):
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    no_of_admins = models.PositiveIntegerField()
    no_of_users = models.PositiveIntegerField()
    user_ids = models.ManyToManyField(User, related_name='group_chats')
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    media_files = models.FileField(upload_to='Group_media')
    chat = models.OneToOneField(Chat, on_delete=models.CASCADE)

    def __str__(self):
        return f"Group ID: {self.id} - Chat ID:{self.chat}"
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)
    
class Video(models.Model):
    time_started = models.DateTimeField()
    time_end = models.DateTimeField()
    duration = models.DurationField()
    user_ids = models.ManyToManyField(User)

    def __str__(self):
        return f"Duration: {self.duration}"


