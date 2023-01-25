
import pymongo
from pymongo import MongoClient
# Connect to MongoDB 
client = pymongo.MongoClient("mongodb+srv://juda:juda1234@cluster0.td0i9za.mongodb.net/test")
db = client["products"]
collection = db["products"]

