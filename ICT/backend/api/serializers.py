from rest_framework import serializers
from api.models import *
from django.contrib.auth import authenticate
from jsonschema import validate as jsValidate
from jsonschema import ValidationError as JsValErr

INFOSCHEMA = {
    "$schema": "http://json-schema.org/draft-04/schema",
    'type':'object',
    'properties':{
        'day':{'type':'integer', 'minimum':1, 'maximum':7},
        'time':{'type':'string', 'format':'time'}
    }
}


class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exams
        fields = ['exam_id', 'exam_name', 'week', 'day', 'time', 'cab']
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['course_id', 'course_name', 'day', 'schedule', 'cab']

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(max_length=128, write_only=True) 
    def validate(self, attrs):
        em = attrs.get('email')
        pasw = attrs.get('password')
        if em is None:
            raise serializers.ValidationError(
                'email is none'
            )
        if pasw is None:
            raise serializers.ValidationError(
                'password is none'
            )
        us = authenticate(username=em, password=pasw)
        if us is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )
        if not us.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )
        return {
            'token':us.token
        }

class InfoSerializer(serializers.Serializer):
    day = serializers.IntegerField()
    time = serializers.CharField()