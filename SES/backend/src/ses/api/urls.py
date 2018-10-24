from ses.api.views import MoneyViewSet, BatteryViewSet, ConsumptionRateViewSet, HouseholdViewSet, OfferViewSet, EnergyViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include, re_path
# from django.urls import path

from .views import (
    MoneyListView,
    MoneyDetailView,
    BatteryListView,
    BatteryDetailView,
    ConsumptionRateListView,
    ConsumptionRateDetailView,
    HouseholdListView,
    HouseholdDetailView,
    HouseholdUpdateView,
    HouseholdCreateView,
    OfferListView,
    OfferDetailView,
    OfferCreateView,
    OfferDeleteView,
    EnergyListView,
    EnergyDetailView,
    EnergyUpdateView,
    EnergyCreateView

      # MoneyCreateView,
      # MoneyUpdateView,
      # MoneyDeleteView
 )

router = DefaultRouter()
router.register(r'', MoneyViewSet, base_name='money')
router.register(r'', BatteryViewSet, base_name='battery')
router.register(r'', ConsumptionRateViewSet, base_name='consumptionrate')
router.register(r'', HouseholdViewSet, base_name='household')
router.register(r'', OfferViewSet, base_name='offer')
urlpatterns = router.urls


urlpatterns = [
    path('money', MoneyListView.as_view()),
    path('money/<pk>', MoneyDetailView.as_view()),
    path('battery', BatteryListView.as_view()),
    path('battery/<pk>', BatteryDetailView.as_view()),
    path('consumptionrate', ConsumptionRateListView.as_view()),
    path('consumptionrate/<pk>', ConsumptionRateDetailView.as_view()),
    path('household', HouseholdListView.as_view()),
    path('household/<pk>', HouseholdDetailView.as_view()),
    path('household/<pk>/update', HouseholdUpdateView.as_view()),
    path('createhousehold', HouseholdCreateView.as_view()),
    path('offer', OfferListView.as_view()),
    path('offer/<pk>', OfferDetailView.as_view()), 
    path('createoffer', OfferCreateView.as_view()),
    path('deleteoffer/<pk>', OfferDeleteView.as_view()),
    path('energy', EnergyListView.as_view()),
    path('energy/<pk>', EnergyDetailView.as_view()),
    path('energy/<pk>/update', EnergyUpdateView.as_view()),
    path('createenergy', EnergyCreateView.as_view()),
    # path('offer', include([
     #    path('create', OfferCreateView.as_view()),
     #])),

]
#     path('create/', MoneyCreateView.as_view()),
#     path('<pk>', MoneyDetailView.as_view()),
#     path('<pk>/update/', MoneyUpdateView.as_view()),
#     path('<pk>/delete/', MoneyDeleteView.as_view())
# ]
