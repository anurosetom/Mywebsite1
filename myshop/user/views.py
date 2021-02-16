from django.shortcuts import render
from django.template import loader
# Create your views here.

from .models import Contact
from django.http import HttpResponse

def contact(req):
    template = loader.get_template("contact.html")
    data = {}
    res = template.render(data, req)
    return HttpResponse(res)

def contact_save(req):
    print(req.GET)
    print(req.GET['name'])
    print(req.GET['email'])
    print(req.GET['phone'])

    c=Contact(name=req.GET['name'], email=req.GET['email'], phone=req.GET['phone'])
    c.save()

    return HttpResponse("Get data")
