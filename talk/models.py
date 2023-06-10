from django.db import models
from UserModel.models import User

class Chat(models.Model):
    chat_id = models.AutoField(primary_key=True)
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
        return f"Chat ID: {self.chat_id} - Users: {self.no_of_users}"

class Message(models.Model):
    message_id = models.AutoField(primary_key=True)
    date = models.DateTimeField()
    content = models.TextField()
    user_from = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_send')
    user_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_receive')
    chat_id = models.ForeignKey(Chat, on_delete=models.CASCADE)

    def __str__(self):
        return f"Message ID: {self.message_id} - from: {self.user_from} - to: {self.user_to}"

class GroupChat(models.Model):
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    no_of_admins = models.PositiveIntegerField()
    no_of_users = models.PositiveIntegerField()
    user_ids = models.ManyToManyField(User, related_name='group_chats')
    group_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    media_files = models.FileField(upload_to='Group_media')
    chat = models.OneToOneField(Chat, on_delete=models.CASCADE)

    def __str__(self):
        return f"Group ID: {self.group_id} - Chat ID:{self.chat}"
    
class Video(models.Model):
    time_started = models.DateTimeField()
    time_end = models.DateTimeField()
    duration = models.DurationField()
    user_ids = models.ManyToManyField(User)

    def __str__(self):
        return f"Duration: {self.duration}"


