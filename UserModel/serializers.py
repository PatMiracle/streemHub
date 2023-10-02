from rest_framework import serializers
from .models import User, UserImages
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError



class UserImageSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = User
        fields =["id", "image"]

class UserSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    images = UserImageSerializer(many=True, required=False)
    is_staff = serializers.ReadOnlyField()
    is_active = serializers.ReadOnlyField()

    
    class Meta:
        model = User
        fields = ['id', 'images','first_name', 'last_name','email', 'password', 'username', 'phone_no', 'github', 'linkedin', 'twitter', 'image', 'customlink', 'is_verified', 'rank', 'no_of_groups', 'no_of_group_is_admin', 'is_staff', 'is_active']


    def create(self, validated_data):
        request = self.context.get('request')
        images_data = request.request.FILES
        user = User.objects.create(**validated_data)
        for image_data in images_data.values():
            UserImages.objects.create(user=user, image=image_data)
        return user
    


class UserNullSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = []

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.CharField(max_length=255, min_length=3)
    username = serializers.CharField(max_length=64, read_only=True)
    password = serializers.CharField(max_length=68, min_length=6,write_only=True)
    
    tokens = serializers.SerializerMethodField()
    def get_tokens(self, obj):
        user = User.objects.get(email=obj['email'])
        return {
            'refresh': user.tokens()['refresh'],
            'access': user.tokens()['access']
        }
    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'tokens']
    def validate(self, attrs):
        email = attrs.get('email','')
        password = attrs.get('password','')
        user = auth.authenticate(email=email,password=password)
        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens
        }


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs
    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError as e:
            raise serializers.ValidationError(e)
