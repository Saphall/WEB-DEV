from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=120) #max_length=required
    description = models.TextField(blank=True, null=True) 
    price = models.DecimalField(max_digits=1000,decimal_places=2)
    summary = models.TextField(blank=False,null=False)
    featured = models.BooleanField() #This field is added after migrations, so , null=True, default=True