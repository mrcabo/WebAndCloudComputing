from rest_framework import serializers

from ses.models import Money, Battery


class MoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Money
        fields = ('id', 'amount')


class BatterySerializer(serializers.ModelSerializer):
    class Meta:
        model = Battery
        fields = ('id', 'level')


class ConsumptionRateSerializer(serializers.Serializer):
    user_id = serializers.CharField(max_length=20)
    rate = serializers.IntegerField()