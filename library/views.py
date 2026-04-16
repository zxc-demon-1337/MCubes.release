from django.shortcuts import render

def choose(request):
    return render(request, 'library/choose.html')

def cll_2x2(request):
    return render(request, 'library/cll_2x2.html')

def def_2x2(request):
    return render(request, 'library/def_2x2.html')
