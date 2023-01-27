from rest_framework import serializers
from .models import Product, SubstituteProduct

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'categories', 'brands', 'stores', 'url')



class SubstituteProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubstituteProduct
        fields = ('id', 'product_name', 'categories', 'brands', 'stores', 'url')

