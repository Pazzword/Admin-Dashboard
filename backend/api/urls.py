from django.urls import path
from . import views
from .views import get_user_info

urlpatterns = [
    path('notes/', views.NoteListCreate.as_view(), name='note-list'),
    path('notes/delete/<int:pk>/', views.NoteDelete.as_view(), name='note-delete'),
    path('user/info/', get_user_info, name='get-user-info'),  # Add this line
]