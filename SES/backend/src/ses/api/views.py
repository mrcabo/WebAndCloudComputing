from rest_framework import viewsets
from ses.models import Money, Battery, ConsumptionRate, Household, Offer
from .serializers import MoneySerializer, BatterySerializer, ConsumptionRateSerializer, HouseholdSerializer, OfferSerializer

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)


class MoneyViewSet(viewsets.ModelViewSet):
    serializer_class = MoneySerializer
    queryset = Money.objects.all()


class BatteryViewSet(viewsets.ModelViewSet):
    serializer_class = BatterySerializer
    queryset = Battery.objects.all()


class ConsumptionRateViewSet(viewsets.ModelViewSet):
    serializer_class = ConsumptionRateSerializer
    queryset = ConsumptionRate.objects.all()


class HouseholdViewSet(viewsets.ModelViewSet):
    serializer_class = HouseholdSerializer
    queryset = Household.objects.all()

class OfferViewSet(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()

class MoneyListView(ListAPIView):
    queryset = Money.objects.all()
    serializer_class = MoneySerializer


class MoneyDetailView(RetrieveAPIView):
    queryset = Money.objects.all()
    serializer_class = MoneySerializer


class BatteryListView(ListAPIView):
    queryset = Battery.objects.all()
    serializer_class = BatterySerializer


class BatteryDetailView(RetrieveAPIView):
    queryset = Battery.objects.all()
    serializer_class = BatterySerializer


class ConsumptionRateListView(ListAPIView):
    queryset = ConsumptionRate.objects.all()
    serializer_class = ConsumptionRateSerializer


class ConsumptionRateDetailView(RetrieveAPIView):
    queryset = ConsumptionRate.objects.all()
    serializer_class = ConsumptionRateSerializer


class HouseholdListView(ListAPIView):
    queryset = Household.objects.all()
    serializer_class = HouseholdSerializer


class HouseholdDetailView(RetrieveAPIView):
    queryset = Household.objects.all()
    serializer_class = HouseholdSerializer

class HouseholdUpdateView(UpdateAPIView):
    queryset = Household.objects.all()
    serializer_class = HouseholdSerializer

class OfferListView(ListAPIView):
     queryset = Offer.objects.all()
     serializer_class = OfferSerializer


class OfferDetailView(RetrieveAPIView):
     queryset = Offer.objects.all()
     serializer_class = OfferSerializer

class OfferCreateView(CreateAPIView):
     queryset = Offer.objects.all()
     serializer_class = OfferSerializer

class OfferDeleteView(DestroyAPIView):
     queryset = Offer.objects.all()
     serializer_class = OfferSerializer
# class MoneyUpdateView(UpdateAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer


# class MoneyDeleteView(DestroyAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer
