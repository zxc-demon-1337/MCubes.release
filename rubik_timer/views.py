import random
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Solve
from .forms import SolveForm

def choose_timer(request):
    return render(request, 'rubik_timer/choose_timer.html')

@login_required
@require_http_methods(["GET", "POST"])
def timer_2x2(request):
    if request.method == 'POST':
        form = SolveForm(request.POST)
        if form.is_valid():
            solve = form.save(commit=False)
            solve.user = request.user
            solve.save()
            # JS timer posts via fetch(); avoid redirect for XHR.
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({'ok': True, 'id': solve.id})
            return redirect('rubik_timer:timer_2x2')
        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            return JsonResponse({'ok': False, 'errors': form.errors}, status=400)
    form = SolveForm()
    return render(request, 'rubik_timer/timer_2x2.html', {
        'form': form
    })
