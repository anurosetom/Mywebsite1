
from django.urls import path
from .views import myproduct_page, myproduct_detail,product_list,addtocart,showcart, getProducts, search, getdata
urlpatterns = [
    path('info', myproduct_page),
    path('detail/<str:pid>', myproduct_detail),
    path('products', product_list),
    path('addtocart', addtocart),
    path('showcart', showcart),
    path('getall/<str:key>', getProducts),
    path('productsearch', search),
    path('data/',getdata)
]
#here we given <str:id> with detail path which means it expecting a string value when we gave an id there
#example product/detail/1 will result the corresponding details of product of id 1