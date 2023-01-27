import requests
import json

# Demandez à l'utilisateur de saisir un nom de produit
product_name = input("Saisissez un nom de produit : ")

# Effectuez une requête à l'API Open Food Facts pour trouver des produits similaires
url = f"https://fr.openfoodfacts.org/cgi/search.pl?search_terms={product_name}&search_simple=1&json=1"
response = requests.get(url)
data = response.json()

# Récupérer le nutriscore et la catégorie du produit saisi
product_nutriscore = None
product_category = None
if data["count"] > 0:
    first_product = data["products"][0]
    product_nutriscore = first_product["nutrition_grades"]
    product_category = first_product["categories"]
    if product_nutriscore is None:
        print("Aucun nutriscore disponible pour ce produit.")
    else:
        print("Nutriscore du produit saisi : ", product_nutriscore)
        print("Categorie du produit saisi : ", product_category)
else:
    print("Aucun produit similaire n'a été trouvé.")

# Effectuez une nouvelle requête pour trouver des substituts de la même catégorie avec un nutriscore inférieur
if product_nutriscore is not None and product_category is not None:
    nutriscore_value = ord(product_nutriscore)- ord('a')
    url = f"https://fr.openfoodfacts.org/cgi/search.pl?search_terms={product_name}&categories={product_category}&nutrition_grades__lt={nutriscore_value}&json=1"
    response = requests.get(url)
    data = response.json()

    # Affichez les détails du premier produit de substitut trouvé
    if data["count"] > 0:
        first_product = data["products"][0]
        print("Nom du produit de substitut : ", first_product["product_name"])
        print("Marque : ", first_product["brands"])
        print("Magasins : ", first_product["stores"])
        print("URL : ", first_product["url"])
        print("Nutriscore du produit saisi : ", product_nutriscore)
    else:
        print("Aucun produit de substitut n'a été trouvé.")
