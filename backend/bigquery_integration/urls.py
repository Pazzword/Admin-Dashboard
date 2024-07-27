from django.urls import path
from .views import get_bigquery_data, charts_line, total_views, sub_views, bar_views

urlpatterns = [
    path('bigquery-data/', get_bigquery_data, name='bigquery-data'),
    path('total-views/', total_views, name='total-views'),
    path('sub-views/', sub_views, name='sub-views'),
    path('bar-views/', bar_views, name='bar-views'),
    path('line-views/', bar_views, name='line-views'),
    path('charts-line/', charts_line, name='charts-line'),
]