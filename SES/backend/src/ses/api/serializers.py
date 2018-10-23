from rest_framework import serializers

from ses.models import Money, Battery, Household, ConsumptionRate, Energy
from rest_auth.models import TokenModel
from ses.models import Offer
from django.contrib.auth.models import User


class MoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Money
        fields = ('id', 'amount')


class BatterySerializer(serializers.ModelSerializer):
    class Meta:
        model = Battery
        fields = ('id', 'level')


class HouseholdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Household
        # fields = ('id', 'dummy')
        fields = ('user_id', 'user', 'money', 'battery')


class ConsumptionRateSerializer(serializers.Serializer):
    user_id = serializers.CharField(max_length=20)
    rate = serializers.IntegerField()

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ('id', 'user_id', 'user', 'price', 'amount')


class EnergySerializer(serializers.ModelSerializer):
    class Meta:
        model = Energy   
        fields = ('id', 'user_id', 'productionrate', 'consumptionrate', 'stoves', 'lights', 'household_appliances', 'home_entertainment', 'solar_panels', 'windmills')