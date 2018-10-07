from rest_framework import serializers

from ses.models import Money, Battery, Household, ConsumptionRate
from rest_auth.models import TokenModel
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
        fields = ('user_id', 'email', 'users_firstName', 'users_lastName')


class ConsumptionRateSerializer(serializers.Serializer):
    user_id = serializers.CharField(max_length=20)
    rate = serializers.IntegerField()
