from django.shortcuts import render
from django.http import JsonResponse
from random import randint
from bigquery_integration.models import TotalViewsModel

# For initial testing
'''def total_views(request):
    # Mock data for testing
    data_dict = {
        "labels": ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04", "2024-07-05"],
        "data": [150, 200, 180, 220, 170],
    }
    return JsonResponse(data_dict)'''


# Charts JS Line Chart
def charts_line(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [randint(1, 90000) for _ in range(7)],
        }
    )

# Pie Chart
def total_views(request):
    queryset = TotalViewsModel.objects.all()
    dict = {
        "labels": [],
        "data": [],
    }
    for item in queryset:
        dict["labels"].append(item.labels)
        dict["data"].append(item.data)
    return JsonResponse(dict)

# Doughnut Chart
def sub_views(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [randint(1, 90000) for _ in range(7)],
        }
    )

# Bar Chart
def bar_views(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [15000, 25000, 35000, 45000, 55000, 65000, 75000],
        }
    )

# Nivo Line Chart
def line_views(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [randint(1, 90000) for _ in range(7)],
        }
    )


def get_bigquery_data(request):
    # Mock data for testing
    mock_data = [
        {"id": 1, "name": "John Doe", "age": 30},
        {"id": 2, "name": "Jane Smith", "age": 25},
    ]
    return JsonResponse(mock_data, safe=False)
