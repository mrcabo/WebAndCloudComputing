from rest_framework import viewsets

from ses.models import Money
from .serializers import MoneySerializer


class MoneyViewSet(viewsets.ModelViewSet):
    serializer_class = MoneySerializer
    queryset = Money.objects.all()


# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView
# )

# class MoneyListView(ListAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer


# class MoneyDetailView(RetrieveAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer


# class MoneyCreateView(CreateAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer


# class MoneyUpdateView(UpdateAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer


# class MoneyDeleteView(DestroyAPIView):
#     queryset = Money.objects.all()
#     serializer_class = MoneySerializer
