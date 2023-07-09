from rest_framework.views import APIView
from rest_framework.response import Response
import requests
import openai

from .models import Book
from .readserializer import BookSerializer


class BookSummaryView(APIView):
    serializer_class = BookSerializer

    def get(self, request):
        search_terms = request.GET.get('q', "python programming")

        api_url = f"https://www.googleapis.com/books/v1/volumes?q={search_terms}"
        response = requests.get(api_url)
        data = response.json()

        items = data.get('items', [])
        if not items:
            return Response({'message': 'No books found.'}, status=404)

        books = []
        for index, book in enumerate(items):
            volume_info = book.get('volumeInfo', {})
            title = volume_info.get('title', '')
            authors = volume_info.get('authors', [])
            summary = volume_info.get('description', '')
            author = ', '.join(authors)

            books.append({
                'id': index + 1,
                'title': title,
                'author': author,
                'summary': summary
            })

        return Response({'books': books})

    def post(self, request):
        book_id = int(request.data.get('book_id'))
        search_terms = request.GET.get('q', None)
        if search_terms:
            api_url = f"https://www.googleapis.com/books/v1/volumes?q={search_terms}"
            response = requests.get(api_url)
            data = response.json()
            items = data.get('items', [])
            if items and book_id > 0 and book_id <= len(items):
                book_data = items[book_id - 1]
                volume_info = book_data.get('volumeInfo', {})
                title = volume_info.get('title', '')
                authors = volume_info.get('authors', [])
                summary = volume_info.get('description', '')
                author = ', '.join(authors)

                selected_book = {
                    'title': title,
                    'author': author,
                    'summary': summary
                }
            else:
                return Response({'message': 'Invalid book ID or book not found.'}, status=400)
        else:
            return Response({'message': 'Search term not provided.'}, status=400)

        openai.api_key = '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'

        max_summary_length = 300

        if len(selected_book['summary']) <= max_summary_length:
            book = Book(title=selected_book['title'], author=selected_book['author'], summary=selected_book['summary'])
        else:
            prompt = f"Book Title: {selected_book['title']}\nAuthor: {selected_book['author']}\n\nBook Summary:\n{selected_book['summary']}\n\nSummary:"
            response = openai.Completion.create(
                engine='davinci',
                prompt=prompt,
                max_tokens=500,
                n=1,
                stop=None,
                temperature=0.4,
                top_p=1.0,
                frequency_penalty=0.0,
                presence_penalty=0.0
            )
            generated_summary = response.choices[0].text.strip()
            book = Book(title=selected_book['title'], author=selected_book['author'], summary=generated_summary)

        book.save()

        download_link = self.fetch_download_link(book.title)
        book.download_link = download_link

        serializer = self.serializer_class(book)

        return Response(serializer.data)

    def fetch_download_link(self, book_title):
        api_url = f"https://gutenberg.org/ebooks/search/?query={book_title}&format=json"
        response = requests.get(api_url)
        data = response.json()

        if "results" in data and data["results"]:
            result = data["results"][0]
            if "formats" in result and result["formats"]:
                for format_key, format_value in result["formats"].items():
                    if format_value.get("contentType", "") == "application/epub+zip":
                        return format_value.get("url", "")

        return None
