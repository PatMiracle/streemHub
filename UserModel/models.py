from django.db import models
from .utils import generate_id
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .utils import generate_id
from .managers import CustomUserManager
from rest_framework_simplejwt.tokens import RefreshToken



class User(AbstractBaseUser, PermissionsMixin):
    id = models.CharField(primary_key=True, max_length=128, unique=True)
    first_name = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(_("email address"), unique=True, blank=False, null=False)
    last_name = models.CharField(max_length=255, blank=False, null=False)
    username = models.CharField(max_length=255, unique=True, blank=False, null=False)
    phone_no = models.CharField(max_length=20, unique=True, blank=False, null=False)
    github = models.URLField(blank=True, unique=True, null=True)
    linkedin = models.URLField(blank=True, unique=True, null=True)
    twitter = models.URLField(blank=True, unique=True, null=True)
    image = models.ImageField(upload_to='user_images/', blank=True, null=True)
    customlink = models.URLField(blank=True, unique=True, null=True)
    date_created = models.DateField(default=timezone.now)
    is_verified = models.BooleanField()
    rank = models.IntegerField()
    # group_belong_to = models.ManyToManyField(Group)
    no_of_groups = models.PositiveIntegerField(default= 0, blank=True, null=False)
    # group_is_admin = models.BooleanField(blank=True, null=True)
    no_of_group_is_admin = models.PositiveIntegerField(default= 0, blank=True, null=False)

    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return f'User ID: {self.id} - Username: {self.username}'
    
    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return{
            'refresh':str(refresh),
            'access':str(refresh.access_token)
        }
    
    def save(self, *args, **kwargs):
        while not self.id:
            self.id = generate_id()
        return super().save(*args, **kwargs)
    

class UserImages(models.Model):
    id = models.CharField(max_length=64, default=generate_id, primary_key=True)
    user = models.ForeignKey(User, related_name="User_profile_images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="media/")
    date_created = models.DateTimeField(default=timezone.now)
    updated_date = models.DateTimeField('date_created' ,auto_now=True)
    
    class Meta:
        ordering = ['-date_created']

