from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'fitness/login.html')

def forget_password(request):
    return render(request, 'fitness/forget-password.html')

def otp(request):
    return render(request,'fitness/otp.html')

def reset(request):
    return render(request,'fitness/reset.html')

def user_management(request):
    context = {}
    context['active_sidebar'] = 'user_management'
    return render(request,'fitness/user-management.html',context)

def analytical_dashboard(request):
    context = {}
    context['active_sidebar'] = 'analytical_dashboard'
    return render(request, 'fitness/analytical-dashboard.html', context)

def fitness_goals(request):
    context = {}
    context['active_sidebar'] = 'fitness_goals'
    return render(request, 'fitness/fitness-goals.html',context)
def exercises(request):
    context = {}
    context['active_sidebar'] = 'exercises'
    return render(request,'fitness/exercises.html',context)
def plans(request):
    context = {}
    context['active_sidebar'] = 'plans'
    return render(request,'fitness/plans.html',context)
def yoga(request):
    context = {}
    context['active_sidebar'] = 'yoga'
    return render(request, 'fitness/yoga-categories.html', context)
def diseases(request):
    context = {}
    context['active_sidebar'] = 'diseases'
    return render(request, 'fitness/diseases.html',context)
def machines(request):
    context = {}
    context['active_sidebar'] = 'machines'
    return render(request,'fitness/machines.html',context)
def notifications(request):
    context = {}
    context['active_sidebar'] = 'notifications'
    return render(request,'fitness/notifications.html',context)
def profile(request):
    context = {}
    context['active_sidebar'] = 'profile'
    return render(request,'fitness/profile.html',context)
def logout(request):
    context = {}
    context['active_sidebar'] = 'logout'
    return render(request,'fitness/logout.html', context)
