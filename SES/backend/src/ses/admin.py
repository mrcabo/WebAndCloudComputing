from django.contrib import admin

from .models import Money
from .models import Battery

admin.site.register(Money)
admin.site.register(Battery)