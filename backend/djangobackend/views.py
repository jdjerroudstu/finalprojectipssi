from django.shortcuts import render
import pymongo
from .models import Product
from django.http import JsonResponse

# Partie DB:

client = pymongo.MongoClient('mongodb+srv://juda:juda1234@cluster0.td0i9za.mongodb.net/?retryWrites=true&w=majority')
# Define Db Name
dbname = client['products']
#Define Collection
collection = dbname['products']
products_details = collection.find({})




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
    
def getCategories(request):
    products = Product.objects.all()
    categories_list = []
    for product in products:
        categories_list.append({
            'name': product.categories,
        })
    return JsonResponse(categories_list, safe=False)
    print(categories_list)
# def getCategories(request):
#     product = Product.objects.get()
#     product_data = {
#             'name': product.categories,
#     }
#     return JsonResponse(product_data, safe=False)
# def addSubstitureProduct (request, id))