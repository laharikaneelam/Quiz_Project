from django.urls import path
from . import views

urlpatterns = [
    path('',views.exam_view,name='quiz'),
    path('try/',views.examview,name='quiz'),

]
