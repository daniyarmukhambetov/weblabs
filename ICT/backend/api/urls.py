from django.urls import path
from api.views import *


urlpatterns = [
    path('login', LoginApiView.as_view()),
    path('exams', ExamApiView.as_view()),
    path('course', CourseApiView.as_view()),
    path('info', InfoApiView.as_view()),
]