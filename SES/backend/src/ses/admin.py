from django.contrib import admin
from .models import Household, Offer, EnergyRates


admin.site.register(Household)
admin.site.register(Offer)
admin.site.register(EnergyRates)
