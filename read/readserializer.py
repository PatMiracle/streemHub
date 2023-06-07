from rest_framework import serializers
from .models import Scrape, Book, Article

class ScrapeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Scrape
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'