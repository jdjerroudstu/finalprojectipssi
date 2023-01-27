
import pymongo
import requests
from pymongo import MongoClient

# Connect to MongoDB Atlas

client = pymongo.MongoClient("mongodb+srv://juda:juda1234@cluster0.td0i9za.mongodb.net/test")
db = client["products"]
collection = db["Product"]

# Récupération de tous les produits de l'API OPEN FOOD FACTS
response = requests.get("https://world.openfoodfacts.org/cgi/search.pl?search_terms=&search_simple=1&json=1&fields=id,product_name,categories,brands,selected_image,stores,url")
data = response.json()
products = data['products']
# print(data)



# Insert the retrieved data into the MongoDB collection
if response.status_code == 200:
    collection.insert_many(products)
    print("Data inserted successfully!")
else:
    print("An error occurred while retrieving data from the API.")


                # _______________________________________

