# users_data/urls.py
from django.urls import path
from .views import ProfileDeleteView, ProfileListView, ProfileCreate, ProfileDetail

urlpatterns = [
    path('profiles/', ProfileListView.as_view(), name='profile-list'),
    path('profile/create/', ProfileCreate.as_view(), name='profile-create'),
    path('profile/<int:pk>/', ProfileDetail.as_view(), name='profile-detail'),
    path('profile/<int:pk>/delete/', ProfileDeleteView.as_view(), name='profile-delete'),
]
