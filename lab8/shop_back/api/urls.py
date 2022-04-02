from django.urls import path

from .views import *

urlpatterns = [
    path('products', ProductsListView.as_view()),
    path('products/<int:id>', ProductView.as_view()),
    path('categories/', CategoryList.as_view()),
    path('categories/<int:id>/', CategoryView.as_view())
]