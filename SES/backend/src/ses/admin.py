from django.contrib import admin
from .models import Money, Battery, ConsumptionRate


admin.site.register(Money)
admin.site.register(Battery)
admin.site.register(ConsumptionRate)
