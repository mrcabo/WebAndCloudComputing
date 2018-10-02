from rest_framework import serializers

from ses.models import Money


class MoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Money
        fields = ('id', 'amount')
