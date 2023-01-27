from django.urls import path
from . import views

urlpatterns = [
    path('getAllProducts/', views.getAllProducts, name='list_products'),
    path('getProductById/<str:product_id>/', views.getProductById, name='get_product'),
    path('postSubstituteProduct/', views.add_substitute_product, name='add_substitute_product'),
    path('findSubstitute/', views.find_substitute, name='find_substitute'),
    path('getAllSubstituteProducts/', views.getAllSubtitueProducts, name='getAllSubstituteProducts')

]
