from django.shortcuts import render
from .models import Exam

def exam_view(request):
    results=Exam.objects.all()
    return render(request,"Quiz1/index.html",{
    "Exam":results
    })

