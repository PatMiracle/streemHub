from django.contrib import admin
from .models import User, Chat, Message, GroupChat, Video

admin.site.register(User)
admin.site.register(Chat)
admin.site.register(Message)
admin.site.register(GroupChat)
admin.site.register(Video)