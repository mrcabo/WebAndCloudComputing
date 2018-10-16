from rest_framework import viewsets
from ses.models import Money, Battery
from .serializers import MoneySerializer, BatterySerializer

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
