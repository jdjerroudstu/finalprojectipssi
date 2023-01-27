from django.urls import path
from . import views

urlpatterns = [
    path('getAllProducts/', views.getAllProducts, name='list_products'),
    path('getCategories/', views.getCategories, name='list_categories'),
    path('getProductById/<str:product_id>/', views.getProductById, name='get_product'),
]
