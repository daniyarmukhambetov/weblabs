import imp
import rest_framework
from rest_framework.serializers import ModelSerializer
from .models import *
from jsonschema import validate
prod_val = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/product.schema.json",
    "type":"object",
    "properties":{
        "name": {
            'type':'string',
            'minLength': 2,
            'max_Length':3,
        },
        "price": {
            'type':'number',
            'minimum':1
        },
        'description' : {
            'type':'string',
            'minLength':3,
        },
        'count' : {
            'type':'integer',
            'minimum':0,
        },
        'is_active':{
            'type':'boolean'
        }
    },
    'required':['name', 'price', 'description', 'count', 'is_active']
}


class ProductSerializer(ModelSerializer):
    def validate(self, attrs):
        try: 
            validate(attrs, prod_val)
            return super().validate(attrs)
        except Exception as e:
            return {'Exception' : e}

    class Meta:
        model = Product
        category = rest_framework.serializers.StringRelatedField(many=True)
        fields = ['name', 'price', 'description', 'count', 'is_active', 'category']


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']