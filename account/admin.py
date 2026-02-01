

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import MyAccount
# Register your models here.

# @admin.register(MyAccount)
# class YourAccountModelAdmin(admin.ModelAdmin):
#     list_display = ['nickname', 'email',  'date_joined', 'avatar', 'id']



from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import MyAccount
from rubik_timer.models import Solve

@admin.register(MyAccount)
class MyAccountAdmin(UserAdmin):
    list_display = ('email', 'nickname', 'is_active', 'is_staff', 'date_joined')
    list_filter = ('is_active', 'is_staff', 'is_superuser')
    search_fields = ('email', 'nickname')
    ordering = ('email',)
    readonly_fields = ('date_joined', 'last_login')
    
    fieldsets = (
        ('Основная информация', {'fields': ('email', 'nickname', 'password')}),
        ('Аватар', {'fields': ('avatar',)}),
        ('Права доступа', {'fields': ('is_active', 'is_staff', 'is_superuser', 'is_admin', 'groups', 'user_permissions')}),
        ('Даты', {'fields': ('last_login', 'date_joined'), 'classes': ('collapse',)}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'nickname', 'password1', 'password2'),
        }),
    )
    
    def delete_model(self, request, obj):
        """Явно удаляем связанные объекты"""
        # Удаляем все решения пользователя
        Solve.objects.filter(user=obj).delete()
        
        # Удаляем пользователя
        obj.delete()