from django.contrib import admin
from .models import Money, Battery, ExampleModel, ConsumptionRate, Household


admin.site.register(Money)
admin.site.register(Battery)
admin.site.register(ExampleModel)
admin.site.register(ConsumptionRate)
admin.site.register(Household)
