from django.urls import path
from .views import data_table

urlpatterns = [
    path('data/', data_table, name='datatable-data'),
]