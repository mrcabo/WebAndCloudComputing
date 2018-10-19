from rest_framework import viewsets
from ses.models import Money, Battery, ConsumptionRate
from .serializers import MoneySerializer, BatterySerializer, ConsumptionRateSerializer

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