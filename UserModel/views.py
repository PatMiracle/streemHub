from django.shortcuts import render
from .models import User
from .serializers import UserSerializer, UserNullSerializer, LoginSerializer, LogoutSerializer
from .utils import hash_password

from rest_framework.generics import GenericAPIView, CreateAPIView, UpdateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework import status
from drf_spectacular.utils import extend_schema

class CreateUser(GenericAPIView):
    """
    Create's a normal new user
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={"request", request})
        if serializer.is_valid(raise_exception=True):
            user = User.objects.create_superuser(**serializer.validated_data)
            user.save()
        return Response({
            # "user_id": username.id,
            "data": f"User with {user.email} successfully created"
        })
    
def check(id):
    try:
        blog = User.objects.get(id=id)
        return blog
    except User.DoesNotExist:
        return Response(status=404)
    
class User_Update(UpdateAPIView):
    #permission_classes = [IsAdminUser]   
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    lookup_field = 'id'


    # @extend_schema(request=UserSerializer, responses=UserSerializer)   
    # def patch(self, request, id, format=None):
    #     data = JSONParser().parse(request)
    #     blog = check(id)
    #     serializer = UserSerializer(blog, data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class User_Retrieve(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    lookup_field = 'id'

class AddAdminUser(GenericAPIView):
    """
    Gives user admin permission
    """
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserNullSerializer

    def patch(self, request, pk, format=None): # Give specific user admin privilege
        instance = self.get_object()
        if instance is None:
            return Response({"detail": "User with 'ID' does not exist"})
        else:
            instance.is_staff = True
            instance.save()
        return Response({
            "User": instance.email,
            "is_admin": instance.is_staff
        })

class RemoveAdminUser(GenericAPIView):
    """
    Remove user admin permission
    """
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserNullSerializer

    def delete(self, request, pk, format=None): # Remove admin privilege from selected user
        instance = self.get_object()
        if instance is None:
            return Response({"detail": "User with 'ID' does not exist"})
        else:
            instance.is_staff = False
            instance.save()
        return Response({
            "User": instance.email,
            "is_admin": instance.is_staff
        })

# Get all admin user
class AdminUsers(GenericAPIView):
    """
    Returns all admin users in the database
    """
    queryset = User.objects.all()
    serializer_class = UserNullSerializer

    def get(self, request, *args, **kwargs):
        global series # set the global series
        admin_list = list()
        series = 1

        for admin in self.queryset.all():
            if admin.is_staff == True:
                sery = str(series)
                admin_list.append({
                    "user" + sery + "--user_id": admin.id,
                    "user" + sery + "--username": admin.email,
                    "user" + sery + "--is_admin": admin.is_staff,
                })
                int(series)
                series += 1
        return Response({"detail": admin_list})
    
class Login(GenericAPIView):
    serializer_class = LoginSerializer

    @extend_schema(request=serializer_class, responses=serializer_class)
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

class Logout(GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = [IsAuthenticated]

    @extend_schema(request=serializer_class, responses=serializer_class)
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"Response": "Successfully Logged out"}, status=status.HTTP_200_OK)