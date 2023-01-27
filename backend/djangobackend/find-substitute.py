# import json
# from django.http import JsonResponse
# import requests

# def find_substitute(request):
#     data = json.loads(request.body)
#     barcode = data['barcode']
    
#     # effectuer une requête à l'API Open Food Facts pour obtenir les détails du produit
#     product_response = requests.get(f'https://fr.openfoodfacts.org/api/v0/product/{barcode}.json')
#     product_data = product_response.json()
#     product = product_data['product']
#     product_category = product['categories']
    
#     substitute_response = requests.get(f'https://fr.openfoodfacts.org/category/{product_category}.json')
#     substitute_data = substitute_response.json()
#     # parcourir les produits pour trouver un substitut avec un nutriscore moins élevé
#     for product in substitute_data['products']:
#         if substitute['nutriscore_grade'] < product['nutriscore_grade']:
#             substitute = product
#             break

#     if substitute:
#         return JsonResponse({
#             'product_name': substitute['product_name'],
#             'brands': substitute['brands'],
#             'stores': substitute['stores'],
#             'url': substitute['url']
#         })
#     else:
#         return JsonResponse({'error': 'Aucun substitut trouvé'})
    
    
import pymongo
from django.shortcuts import render
from .models import Product, SubstituteProduct
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import ProductSerializer
from .views import add_substitute_product, find_substitute
import json
import requests

def find_substitute(request):
    data = json.loads(request.body)
    barcode = data['barcode']
    
    # effectuer une requête à l'API Open Food Facts pour obtenir les détails du produit
    product_response = requests.get(f'https://fr.openfoodfacts.org/api/v0/product/{barcode}.json')
    product_data = product_response.json()
    product = product_data['product']
    product_category = product['categories']
    
    substitute_response = requests.get(f'https://fr.openfoodfacts.org/category/{product_category}.json')
    substitute_data = substitute_response.json()
    # parcourir les produits pour trouver un substitut avec un nutriscore moins élevé
    for product in substitute_data['products']:
        if substitute['nutriscore_grade'] < product['nutriscore_grade']:
            substitute = product
            break

    if substitute:
        return JsonResponse({
            'product_name': substitute['product_name'],
            'brands': substitute['brands'],
            'stores': substitute['stores'],
            'url': substitute['url']
        })
    else:
        return JsonResponse({'error': 'Aucun substitut trouvé'})
        