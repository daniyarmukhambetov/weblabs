from email import message
from webbrowser import get
from requests import Request
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from api.models import *
from api.serializers import CourseSerializer, ExamSerializer, InfoSerializer, LoginSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from jsonschema import validate as jsValidate
from jsonschema import ValidationError as JsValErr
INFOSCHEMA = {
    "$schema": "http://json-schema.org/draft-04/schema",
    'type':'object',
    'properties':{
        'day':{'type':'integer', 'minimum':1, 'maximum':7},
        'time':{'type':'string', 'format':'time', 'minLength':5}
    }
}

current_week = "1"
current_day = "1"
class LoginApiView(APIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer
    def post(self, request):
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid()
        # print(serializer.errors)
        d = serializer.validate(request.data)
        # d = serializer.data
        return Response(d,headers={
            "Access-Control-Allow-Origin": '*',
        })

class ExamApiView(APIView):
    permission_classes = [IsAuthenticated,]
    serializer_class = ExamSerializer
    def get(self, request):
        params = request.query_params
        print(params)
        week = params.get('week', current_week)
        day = params.get('day', current_day)
        user = request.user
        print(user.email)
        que = user.exams.filter(day=day, week=week)
        # print(Exams.objects.all())
        print(que)
        serializer = self.serializer_class(data=que, many=True)
        serializer.is_valid()
        print(serializer.data)
        return Response(serializer.data,headers={
            "Access-Control-Allow-Origin": '*',
        })

class CourseApiView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CourseSerializer
    def get(self, request):
        params = request.query_params
        day = params.get('day')
        que = request.user.courses.all()
        if day is not None:
            que = request.user.courses.filter(day=day)
        serializer = self.serializer_class(data=que, many=True) 
        serializer.is_valid()
        return Response(data=serializer.data)

class InfoApiView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        params = request.query_params
        day = params.get('day', 1)
        params._mutable=True
        try:
            params['day'] = int(day)
        except ValueError:
            return Response({"message":"day is not integer!"})
        params._mutable=False
        try:
            jsValidate(params, INFOSCHEMA)
        except JsValErr as E:
            return Response({'message':E.message}, status=400)
        ser = InfoSerializer(data=params)
        if ser.is_valid():
            courses = request.user.courses.filter(day=day).order_by('schedule')
            corr_courses = []
            for course in courses:
                print(course.course_name, course.day)
                f = False
                s = str(course.schedule)
                t = ser.data['time']
                for i in range(min(len(s), len(t))):
                    if s[i] == t[i]:
                        continue
                    if s[i] == '-':
                        f = False
                    if s[i] > t[i]:
                        f = True
                        break
                    else:
                        f = False
                        break
                if f:
                    corr_courses.append(course)
            if len(corr_courses) > 0:
                cor_ser = CourseSerializer(corr_courses[0])
                return Response(cor_ser.data)
            else:
                return Response(data={"name":"no lesson!"})
        else:
            return Response({"ok":"False", "error":ser.errors})        