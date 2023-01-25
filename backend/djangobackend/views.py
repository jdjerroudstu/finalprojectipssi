from django.http import HttpResponse
import pymongo
client = pymongo.MongoClient('mongodb+srv://vanessa:vanessa1234@cluster0.td0i9za.mongodb.net/products')
#Define Db Name
dbname = client['products']
from .models import Product
#Define Collection
collection = dbname['products']
products_details = collection.find({})

for r in products_details:
    print(r['product_name'])

def index(request):
    client = pymongo.MongoClient('mongodb+srv://vanessa:vanessa1234@cluster0.td0i9za.mongodb.net/products')
    #Define Db Name
    dbname = client['products']
    #Define Collection
    collection = dbname['products']
    products_details = collection.find({},{"product_name"})
    print(products_details)
    return HttpResponse(products_details)
    # output=  ', '.join([r.id for r in products_details])
    # return HttpResponse(output)


    

