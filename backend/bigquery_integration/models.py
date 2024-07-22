from django.db import models


# Create your models here.
class TotalViewsModel(models.Model):
    labels = models.CharField(max_length=100)
    data = models.IntegerField()