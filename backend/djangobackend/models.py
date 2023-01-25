from django.db import models

# Create your models here.



class Product(models.Model):
    barcode= models.IntegerField()
    product_name = models.CharField(max_length=200)
    categories=models.CharField(max_length=200)
    brands=models.CharField(max_length=200)
    stores = models.CharField(max_length=200)
