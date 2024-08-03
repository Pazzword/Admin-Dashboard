import requests
from django.http import JsonResponse

def get_time(request):
    try:
        response = requests.get('http://worldtimeapi.org/api/ip')
        data = response.json()
        return JsonResponse(data)
    except requests.RequestException as e:
        return JsonResponse({'error': str(e)}, status=500)
