from django.db import models

class Profile(models.Model):
    
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    contact = models.CharField(max_length=15, blank=True, null=True)
    address1 = models.CharField(max_length=255, blank=True, null=True)
    address2 = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.email  # Or any other meaningful string representation
