from django.db import models

# Create your models here.

class Product (models.Model):
   name= models.CharField( max_length=100)
   description = models.CharField( max_length=280)
   price= models.IntegerField()
   brand= models.CharField(max_length=100)

   def __str__(self):
      return str(self.id) + " : " +self.name