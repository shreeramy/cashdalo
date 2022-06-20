from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin  
from django.contrib.auth.base_user import BaseUserManager    
  

class UserManager(BaseUserManager):  

    def create_user(self, email, password, **extra_fields):  
        if not email:  
            raise ValueError(_('The Email must be set'))  
        email = self.normalize_email(email)  
          
        user = self.model(email=email, **extra_fields)  
        user.set_password(password)  
        user.save()  
        return user  
  
    def create_superuser(self, email, password, **extra_fields):  
        extra_fields.setdefault('is_staff', True)  
        extra_fields.setdefault('is_superuser', True)  
        extra_fields.setdefault('is_active', True)  
  
        if extra_fields.get('is_staff') is not True:  
            raise ValueError(_('Superuser must have is_staff=True.'))  
        if extra_fields.get('is_superuser') is not True:  
            raise ValueError(_('Superuser must have is_superuser=True.'))  
        return self.create_user(email, password, **extra_fields)  
      

class UserAccount(AbstractBaseUser, PermissionsMixin):  
    username = None  
    email = models.EmailField(max_length = 200, unique=True)  
    is_staff = models.BooleanField(default=False)  
    is_active = models.BooleanField(default=True)  
  
  
    USERNAME_FIELD = 'email'  
    REQUIRED_FIELDS = []  
  
    objects = UserManager()   
  
    def __str__(self):  
        return self.email


class NoteAvailable(models.Model):
    note_2000 = models.IntegerField()
    note_500 = models.IntegerField()
    note_200 = models.IntegerField()
    note_100 = models.IntegerField()
    note_50 = models.IntegerField()
    note_20 = models.IntegerField()
    note_10 = models.IntegerField()
    coin_5 = models.IntegerField()
    coin = models.IntegerField()


class CashLedgerReport(models.Model):
    date = models.DateTimeField()
    particulars = models.CharField(max_length=50)
    received_amount = models.IntegerField(null=True, blank=True)
    paid_amount = models.IntegerField(null=True, blank=True)
    remarks = models.CharField(max_length=50)

    receive_note_2000 = models.IntegerField(null=True, blank=True)
    receive_note_500 = models.IntegerField(null=True, blank=True)
    receive_note_200 = models.IntegerField(null=True, blank=True)
    receive_note_100 = models.IntegerField(null=True, blank=True)
    receive_note_50 = models.IntegerField(null=True, blank=True)
    receive_note_20 = models.IntegerField(null=True, blank=True)
    receive_note_10 = models.IntegerField(null=True, blank=True)
    receive_coin_5 = models.IntegerField(null=True, blank=True)
    receive_coin = models.IntegerField(null=True, blank=True)

    paid_note_2000 = models.IntegerField(null=True, blank=True)
    paid_note_500 = models.IntegerField(null=True, blank=True)
    paid_note_200 = models.IntegerField(null=True, blank=True)
    paid_note_100 = models.IntegerField(null=True, blank=True)
    paid_note_50 = models.IntegerField(null=True, blank=True)
    paid_note_20 = models.IntegerField(null=True, blank=True)
    paid_note_10 = models.IntegerField(null=True, blank=True)
    paid_coin_5 = models.IntegerField(null=True, blank=True)
    paid_coin = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.particulars
