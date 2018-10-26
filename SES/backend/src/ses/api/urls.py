from ses.api.views import HouseholdViewSet, OfferViewSet, EnergyRatesViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path

from .views import (
    HouseholdListView,
    HouseholdDetailView,
    HouseholdUpdateView,
    HouseholdCreateView,
    OfferListView,
    OfferDetailView,
    OfferCreateView,
    OfferDeleteView,
    EnergyRatesListView,
    EnergyRatesDetailView,
    EnergyRatesUpdateView,
    EnergyRatesCreateView

)


router = DefaultRouter()
router.register(r'', HouseholdViewSet, base_name='household')
router.register(r'', OfferViewSet, base_name='offer')
router.register(r'', EnergyRatesViewSet, base_name='energyrates')
urlpatterns = router.urls


urlpatterns = [
    path('household', HouseholdListView.as_view()),
    path('household/<pk>', HouseholdDetailView.as_view()),
    path('household/<pk>/update', HouseholdUpdateView.as_view()),
    path('createhousehold', HouseholdCreateView.as_view()),
    path('offer', OfferListView.as_view()),
    path('offer/<pk>', OfferDetailView.as_view()),
    path('createoffer', OfferCreateView.as_view()),
    path('deleteoffer/<pk>', OfferDeleteView.as_view()),
    path('energyrates', EnergyRatesListView.as_view()),
    path('energyrates/<pk>', EnergyRatesDetailView.as_view()),
    path('energyrates/<pk>/update', EnergyRatesUpdateView.as_view()),
    path('createenergyrates', EnergyRatesCreateView.as_view()),

]
