from django.urls import path
from .views import (AddAdminUser, User_Update, User_Retrieve, Login, Logout, CreateUser, AdminUsers, RemoveAdminUser)

urlpatterns = [
    path('register_user/', CreateUser.as_view(), name="add-user"),
    path('authenticate/user/', Login.as_view(), name="auth-user"),
    path('authenticate/user/logout', Logout.as_view(), name="logout-user"),
    path('user/update/<str:id>', User_Update.as_view(), name='update_user'),
     path('user/get/<str:id>', User_Retrieve.as_view(), name='retrieve_user'),
    path('add_admin/<str:pk>', AddAdminUser.as_view(), name="add-admin"),
    path('remove_admin/<str:pk>', RemoveAdminUser.as_view(), name="add-admin"),
    path('admin_users/', AdminUsers.as_view(), name="all-admin")
]