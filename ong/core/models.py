from django.db import models
from django.utils import timezone
# Create your models here.
class Proveedor(models.Model):
    rut = models.CharField(max_length=15, verbose_name='Rut',null=False,blank=False)
    nombre = models.CharField(max_length=50,)
    descripcion = models.CharField(max_length=50,)
    servicio = models.CharField(max_length=50,)
    
    
    def publish(self):
        self.save()

    def __str__(self):
        return self.nombre

    def delete(self):
        self.delete()


