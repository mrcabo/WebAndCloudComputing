from django.contrib import admin
from .models import Money, Battery, ConsumptionRate, Household, Offer


admin.site.register(Money)
admin.site.register(Battery)
admin.site.register(ConsumptionRate)
admin.site.register(Household)
admin.site.register(Offer)
