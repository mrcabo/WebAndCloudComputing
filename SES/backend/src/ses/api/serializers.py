from rest_framework import serializers

from ses.models import Money, Battery, ExampleModel, ConsumptionRate
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


class ExampleModelSerializer(serializers.Serializer):
    example_id = serializers.UUIDField()
    description = serializers.CharField()


class ConsumptionRateSerializer(serializers.Serializer):
    house_id = serializers.UUIDField()
    rate = serializers.IntegerField()
