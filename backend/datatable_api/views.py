from django.http import JsonResponse

def data_table(request):
    data = [
        {"number": 1, "last_name": "Anzor Doe", "email": "Anzor@example.com", "age": 30, "city": "New York"},
        {"number": 2, "last_name": "Jane Smith", "email": "jane@example.com", "age": 25, "city": "Los Angeles"},
        {"number": 1, "last_name": "Anzor Doe", "email": "Anzor@example.com", "age": 30, "city": "New York"},
        {"number": 2, "last_name": "Jane Smith", "email": "jane@example.com", "age": 25, "city": "Los Angeles"},
        {"number": 1, "last_name": "Anzor Doe", "email": "Anzor@example.com", "age": 30, "city": "New York"},
        {"number": 2, "last_name": "Jane Smith", "email": "jane@example.com", "age": 25, "city": "Los Angeles"},
        {"number": 1, "last_name": "Anzor Doe", "email": "Anzor@example.com", "age": 30, "city": "New York"},
        {"number": 2, "last_name": "Jane Smith", "email": "jane@example.com", "age": 25, "city": "Los Angeles"},
        {"number": 1, "last_name": "Anzor Doe", "email": "Brad@example.com", "age": 30, "city": "New York"},
        {"number": 2, "last_name": "Jane Smith", "email": "jane@example.com", "age": 25, "city": "Los Angeles"},
        {"number": 1, "last_name": "Anzor Doe", "email": "Anzor@example.com", "age": 30, "city": "New York"},
        {"number": 2, "last_name": "Jane Smith", "email": "jane@example.com", "age": 25, "city": "Los Angeles"},
        {"number": 1, "last_name": "Anzor Doe", "email": "Anzor@example.com", "age": 30, "city": "New York"},
        {"number": 2, "last_name": "Jane Smith", "email": "Collin@example.com", "age": 25, "city": "Los Angeles"},
        # Add more data as needed
    ]
    return JsonResponse(data, safe=False)