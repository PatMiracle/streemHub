from rest_framework import serializers
from .models import Post, Comment, Subcomment

class PostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class CommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class SubcommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Subcomment
        fields = '__all__'