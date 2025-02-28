from django.urls import path
from .import views

urlpatterns = [
    path('', views.home, name='home'),
    path('forget-password/',views.forget_password, name='forget_password'),
    path('otp/',views.otp,name='otp'),
    path('reset/',views.reset,name='reset'),
    path('user-management',views.user_management,name='user_management'),
    path('analytical-dashboard',views.analytical_dashboard,name='analytical_dashboard'),
    path('fitness-goals',views.fitness_goals, name='fitness_goals'),
    path('exercises',views.exercises, name='exercises'),
    path('plans',views.plans, name='plans'),
    path('yoga', views.yoga, name="yoga"),
    path('diseases',views.diseases, name='diseases'),
    path('machines',views.machines, name='machines'),
    path('notifications', views.notifications, name='notifications'),
    path('profile',views.profile, name='profile'),
    path('logout',views.logout, name = 'logout')
]