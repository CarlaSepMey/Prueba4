from  django import forms 
from .models import Proveedor

class ProveedorFormulario(forms.ModelForm):


    class Meta:
        model = Proveedor
        fields =('rut','nombre','descripcion','servicio')