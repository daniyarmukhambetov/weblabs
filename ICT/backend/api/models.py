from operator import mod
from tkinter import CASCADE
import jwt
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from django.core import validators
from datetime import datetime
from datetime import timedelta



from backend import settings


class Course(models.Model):
    course_id = models.CharField(max_length=255)
    course_name = models.CharField(max_length=255)
    schedule = models.TextField()
    day = models.CharField(max_length=255, default="1")
    cab = models.CharField(max_length=255, default="333")


class Exams(models.Model):
    exam_id = models.CharField(max_length=255, unique=True)
    exam_name = models.CharField(max_length=255)
    week = models.CharField(max_length=16)
    day = models.CharField(max_length=16)
    time = models.CharField(max_length=64)
    cab = models.CharField(max_length=255)    



class UserManager(BaseUserManager):
    def _create_user(self, name, last_name, role, username, email, password=None, **extra_fields):
        if not username:
            raise ValueError('Указанное имя пользователя должно быть установлено')
        if not role:
            raise ValueError('role need to be set')
        if not email:
            raise ValueError('Данный адрес электронной почты должен быть установлен')

        email = self.normalize_email(email)
        user = self.model(name=name, last_name=last_name, role=role, username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    def create_user(self, name, last_name, role, username, email, password=None, **extra_fields):
        """
        Создает и возвращает `User` с адресом электронной почты,
        именем пользователя и паролем.
        """
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        return self._create_user(name, last_name, role, username, email, password, **extra_fields)

    # def create_superuser(self, username, email, password=None):


class User(AbstractBaseUser, PermissionsMixin):
    """
    Определяет наш пользовательский класс User.
    Требуется имя пользователя, адрес электронной почты и пароль.
    """
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    role = models.CharField(max_length=255)

    email = models.EmailField(
        validators=[validators.validate_email],
        unique=True,
        blank=False
        )

    is_staff = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    exams = models.ManyToManyField(Exams)
    courses = models.ManyToManyField(Course)
    

    # Свойство `USERNAME_FIELD` сообщает нам, какое поле мы будем использовать для входа.
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ('username',)

    # Сообщает Django, что класс UserManager, определенный выше, 
    # должен управлять объектами этого типа.
    objects = UserManager()

    def __str__(self):
        """
        Возвращает строковое представление этого `User`.
        Эта строка используется, когда в консоли выводится `User`.
        """
        return self.username

    @property
    def token(self):
        """
        Позволяет нам получить токен пользователя, вызвав `user.token` вместо
        `user.generate_jwt_token().
        Декоратор `@property` выше делает это возможным.
        `token` называется «динамическим свойством ».
        """
        return self._generate_jwt_token()

    def get_full_name(self):
        """
        Этот метод требуется Django для таких вещей,
        как обработка электронной почты.
        Обычно это имя и фамилия пользователя.
        Поскольку мы не храним настоящее имя пользователя,
        мы возвращаем его имя пользователя.
        """
        return self.last_name

    def get_short_name(self):
        """
        Этот метод требуется Django для таких вещей,
        как обработка электронной почты.
        Как правило, это будет имя пользователя.
        Поскольку мы не храним настоящее имя пользователя,
        мы возвращаем его имя пользователя.
        """
        return self.name

    def _generate_jwt_token(self):
        """
        Создает веб-токен JSON, в котором хранится идентификатор
        этого пользователя и срок его действия
        составляет 60 дней в будущем.
        """
        dt = datetime.now() + timedelta(days=60)

        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime('%S'))
        }, settings.SECRET_KEY, algorithm='HS256')

        return token



