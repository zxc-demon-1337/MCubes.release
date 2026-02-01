import random
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Solve
from .forms import SolveForm

def choose_timer(request):
    return render(request, 'rubik_timer/choose_timer.html')

@login_required
def timer_2x2(request):
    if request.method == 'POST':
        form = SolveForm(request.POST)
        if form.is_valid():
            solve = form.save(commit=False)
            solve.user = request.user
            solve.save()
            return redirect('rubik_timer:timer')
    form = SolveForm()
    return render(request, 'rubik_timer/timer_2x2.html', {
        'form': form
    })
