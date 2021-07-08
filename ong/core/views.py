from django.shortcuts import render,get_object_or_404
from .models import Proveedor
from .forms import ProveedorFormulario
from django.http import HttpResponse


# Create your views here.
def nuevo_proveedor(request):
    proveedor = Proveedor()

    if request.method == 'POST':
        nuevoProveedor = ProveedorFormulario(request.POST, instance=proveedor)
        nuevoProveedor.save()
        proveedores = Proveedor.objects.all()
        mensaje = '<div class="alert alert-success"><label class="text">Proveedor agregado con exito</label></div>'

        return render (request, 'core/proveedores.html',{'proveedores': proveedores,'mensaje':mensaje})
    else:
        formu = ProveedorFormulario()
        return render(request, 'core/nuevo_proveedor.html',{'formu':formu})



    
def index(request):
    return render(request, 'core/index.html',{})
def contacto(request):
    return render(request, 'core/contacto.html',{})
def formulario(request):
    return render(request, 'core/enviado.html',{})
def login(request):
    return render(request, 'core/login.html',{})
def registro(request):
    return render(request, 'core/registro.html',{})
def gatos(request):
    return render(request, 'core/gatos.html',{})
def perros(request):
    return render(request, 'core/perros.html',{})
def proveedores(request):
    proveedores = Proveedor.objects.all()
    return render (request, 'core/proveedores.html',{'proveedores': proveedores,'mensaje':''})
def eliminar(request):
    if request.method == 'POST':
        id_proveedor = request.POST.get('rut')
        user = Proveedor.objects.filter(rut=id_proveedor)
        user.delete()
        return HttpResponse(user)
        
def modificar(request):
    if request.method == 'POST':
        id_proveedor = request.POST.get('rut')
        razon_social = request.POST.get('razon_social')
        descripcion = request.POST.get('descripcion')
        servicio = request.POST.get('servicio')
        
        user = Proveedor.objects.filter(rut=id_proveedor).update(descripcion=descripcion,nombre=razon_social,servicio=servicio)
        
        return HttpResponse(user)

        

