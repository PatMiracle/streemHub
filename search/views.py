from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Search
# from searchserializer import SearchSerializers
from search.get_files.scrape  import scrape
from django.http import FileResponse
from rest_framework import status
from pathlib import Path
import os
from rest_framework.permissions import IsAuthenticated



class Scrape(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, url=None):
        url = url
        try:
            x = scrape(str(url))
        except Exception as e:
            return Response({"RESULT":str(e)}, status=status.HTTP_204_NO_CONTENT)
        file_path = Path(__file__).resolve().parent.absolute() / f'get_files/zipped_files/{(url).split("/")[2]}.zip'
        
        file_name = f'{str(url).split("/")[2]}.zip'
        try:
            response = FileResponse(open(file_path, 'rb'), status=status.HTTP_200_OK)
            response['Content-Disposition'] = f'attachment; filename="{file_name}"'
            return response
        except FileNotFoundError:
            content = {'RESULT': 'files cannot be found'}
            return Response(content, status=status.HTTP_404_NOT_FOUND)
        

class Scrape_File_Path(APIView):   
    permission_classes = [IsAuthenticated]   
    def get(self, request, url=None):
        url = url
        try:
            x = scrape(str(url))
        except Exception as e:
            return Response({"RESULT":str(e)}, status=status.HTTP_204_NO_CONTENT)
        file_path = Path(__file__).resolve().parent.absolute() / f'get_files/scraped_files/{(url).split("/")[2]}'
        
        file_name = f'{str(url).split("/")[2]}.zip'
        
        return Response({"Webpage_Path":str(file_path)}, status=status.HTTP_302_FOUND)
    

        

# Create your views here.
