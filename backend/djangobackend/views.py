import pymongo
from django.shortcuts import render
from .models import Product, SubstituteProduct
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import ProductSerializer
from django.views import View
import json
import requests



# Partie DB:

client = pymongo.MongoClient('mongodb+srv://juda:juda1234@cluster0.td0i9za.mongodb.net/?retryWrites=true&w=majority')
# Define Db Name
dbname = client['products']
#Define Collection
collection = dbname['products']
products_details = collection.find({})


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



def getAllProducts(request):
    products = Product.objects.all()
    products_list = []
    for product in products:
        products_list.append({
            'id': product.id,
            'product_name': product.product_name,
            'categories': product.categories,
            'brands': product.brands,
            # 'selected_images': product.selected_images,
            'stores': product.stores,
            'url': product.url
        })
    return JsonResponse(products_list, safe=False)
    print(products_list)

def getProductById(request, product_id):
    product = Product.objects.get(id=product_id)
    product_data = {
            'id': product.id,
            'product_name': product.product_name,
            'categories': product.categories,
            'brands': product.brands,
            # 'selected_images': product.selected_images,
            'stores': product.stores,
            'url': product.url
    }
    return JsonResponse(product_data)



def add_substitute_product(request):
    if request.method == 'POST':
        product_id = request.POST.get('id')
        product_name = request.POST.get('product_name')
        categories = request.POST.get('categories')
        brands = request.POST.get('brands')
        stores = request.POST.get('stores')
        url = request.POST.get('url')

        substitute_product = SubstituteProduct(id=product_id, product_name=product_name, categories=categories, brands=brands, stores=stores, url=url)
        substitute_product.save()

    return render(request, 'add_substitute_product.html')

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
    
def getAllSubtitueProducts(request):
    products = SubstituteProduct.objects.all()
    products_list = []
    for product in products:
        products_list.append({
            'id': product.id,
            'product_name': product.product_name,
            'categories': product.categories,
            'brands': product.brands,
            # 'selected_images': product.selected_images,
            'stores': product.stores,
            'url': product.url
        })
    return JsonResponse(products_list, safe=False)