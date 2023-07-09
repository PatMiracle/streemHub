from rest_framework import serializers
from .models import Scrape, Book, Article

class ScrapeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Scrape
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    summary = serializers.SerializerMethodField()
    
    def get_summary(self, obj):
        summary = obj.summary

        paragraphs = summary.split("\n\n")

        formatted_summary = "\n".join(paragraphs)

        return formatted_summary

    class Meta:
        model = Book
        fields = ['title', 'author', 'summary', 'download_link', 'date_created']

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'