from rest_framework import viewsets
from ses.models import Household, Offer, EnergyRates
from .serializers import HouseholdSerializer, OfferSerializer, EnergyRatesSerializer

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)


class HouseholdViewSet(viewsets.ModelViewSet):
    serializer_class = HouseholdSerializer
    queryset = Household.objects.all()


class OfferViewSet(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()


class EnergyRatesViewSet(viewsets.ModelViewSet):
    serializer_class = EnergyRatesSerializer
    queryset = EnergyRates.objects.all()


class HouseholdListView(ListAPIView):
    queryset = Household.objects.all()
    serializer_class = HouseholdSerializer


class HouseholdDetailView(RetrieveAPIView):
    queryset = Household.objects.all()
    serializer_class = HouseholdSerializer


class HouseholdUpdateView(UpdateAPIView):
    queryset = Household.objects.all()
    serializer_class = HouseholdSerializer


class HouseholdCreateView(CreateAPIView):
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


class EnergyRatesListView(ListAPIView):
    queryset = EnergyRates.objects.all()
    serializer_class = EnergyRatesSerializer


class EnergyRatesDetailView(RetrieveAPIView):
    queryset = EnergyRates.objects.all()
    serializer_class = EnergyRatesSerializer


class EnergyRatesCreateView(CreateAPIView):
    queryset = EnergyRates.objects.all()
    serializer_class = EnergyRatesSerializer


class EnergyRatesUpdateView(UpdateAPIView):
    queryset = EnergyRates.objects.all()
    serializer_class = EnergyRatesSerializer
