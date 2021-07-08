from django.urls import path, include
from .import views
from .views import eliminar
from .views import modificar
urlpatterns =[
   
    path('',views.index),
    path('proveedores',views.proveedores),   
    path('contacto',views.contacto),
    path('enviado',views.formulario),
    path('login',views.login),
    path('registro',views.registro),
    path('gatos',views.gatos),
    path('perros',views.perros),
    path('nuevo_proveedor',views.nuevo_proveedor),
    path('elminar-proveedor',eliminar,name="eliminar"),
    path('editar_proveedor',modificar,name="modificar"),
    
   
]