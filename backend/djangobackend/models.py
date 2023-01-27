from django.db import models

# Create your models here.


class Product(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    product_name = models.CharField(max_length=200)
    categories=models.CharField(max_length=200)
    brands=models.CharField(max_length=200)
    # selected_image=models.CharField(max_length=200)
    stores = models.CharField(max_length=200)
    url = models.CharField(max_length=300)


class SubstituteProduct(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    product_name = models.CharField(max_length=200)
    categories=models.CharField(max_length=200)
    brands=models.CharField(max_length=200)
    # selected_image=models.CharField(max_length=200)
    stores = models.CharField(max_length=200)
    url = models.CharField(max_length=300)




