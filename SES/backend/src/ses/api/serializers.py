from rest_framework import serializers

from ses.models import Money
from ses.models import Battery
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
