import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MCubes.settings')  # Замените на имя вашего settings
django.setup()

from django.apps import apps
from account.models import MyAccount

print("Модели, ссылающиеся на MyAccount:")
print("=" * 50)

for model in apps.get_models():
    for field in model._meta.fields:
        if hasattr(field, 'related_model') and field.related_model == MyAccount:
            print(f"\nМодель: {model._meta.app_label}.{model.__name__}")
            print(f"  Поле: {field.name}")
            print(f"  on_delete: {field.remote_field.on_delete.__name__}")
            
            # Проверить, есть ли связанные объекты
            related_objects = model.objects.filter(**{field.name: 4})  # ID=4
            if related_objects.exists():
                print(f"  Связанные объекты: {related_objects.count()} шт.")
                for obj in related_objects[:5]:  # Показать первые 5
                    print(f"    - {obj}")

print("\n" + "=" * 50)