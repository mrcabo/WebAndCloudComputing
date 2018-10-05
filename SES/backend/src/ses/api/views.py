from rest_framework import viewsets
from ses.models import Money, Battery, ExampleModel, ConsumptionRate, Household
from .serializers import MoneySerializer, BatterySerializer, ExampleModelSerializer,ConsumptionRateSerializer, HouseholdSerializer

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


class ExampleModelViewSet(viewsets.ModelViewSet):
    serializer_class = ExampleModelSerializer
    queryset = ExampleModel.objects.all()


class ConsumptionRateViewSet(viewsets.ModelViewSet):
    serializer_class = ConsumptionRateSerializer
    queryset = ConsumptionRate.objects.all()


class HouseholdViewSet(viewsets.ModelViewSet):
    serializer_class = HouseholdSerializer
    queryset = Household.objects.all()


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


class ExampleModelListView(ListAPIView):
    queryset = ExampleModel.objects.all()
    serializer_class = ExampleModelSerializer


class ExampleModelDetailView(RetrieveAPIView):
    queryset = ExampleModel.objects.all()
    serializer_class = ExampleModelSerializer


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


# class MoneyUpdateView(UpdateAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer


# class MoneyDeleteView(DestroyAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer
