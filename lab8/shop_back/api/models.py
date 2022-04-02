from django.db import models
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=1024)

class Product(models.Model):
    name = models.CharField(max_length=1024)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ManyToManyField(Category)

