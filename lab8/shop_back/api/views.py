from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import mixins

from .serializers import *
from .models import *
# Create your views here.
class ProductsListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductView(APIView):
    def get(self, request, id):
        try:
            prod = Product.objects.get(pk=id)
            # print(prod)
            ser = ProductSerializer(prod)
            return Response(ser.data)
        except Exception as e:
            return Response({'Exception':e.args}, status=404)

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryView(APIView):
    def get(self, request, id):
        try:
            cat = Category.objects.get(pk=id)
            return Response(CategorySerializer(cat).data)
        except Exception as e:
            return Response({'Exception':e.args}, status=404)
