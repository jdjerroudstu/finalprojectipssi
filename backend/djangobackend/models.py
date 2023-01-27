from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Category(models.Model):
    name = models.CharField(verbose_name='Nom de la categorie', max_length=100)
    
class Product(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    product_name = models.CharField(max_length=200)
    categories=models.CharField(max_length=200)
    brands=models.CharField(max_length=200)
    stores = models.CharField(max_length=200)
    url = models.CharField(max_length=300)


class subtituteProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
