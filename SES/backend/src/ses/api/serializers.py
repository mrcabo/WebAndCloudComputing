from rest_framework import serializers

from ses.models import Household, Offer, EnergyRates


class HouseholdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Household
        # fields = ('id', 'dummy')
        fields = ('user_id', 'user', 'money', 'battery')


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ('id', 'user_id', 'user', 'price', 'amount')


class EnergyRatesSerializer(serializers.Serializer):
    user_id = serializers.IntegerField()
    productionrate = serializers.IntegerField()
    consumptionrate = serializers.IntegerField()
    stoves = serializers.IntegerField()
    lights = serializers.IntegerField()
    household_appliances = serializers.IntegerField()
    home_entertainment = serializers.IntegerField()
    solar_panels = serializers.IntegerField()
    windmills = serializers.IntegerField()


    def create(self, validated_data):
        return EnergyRates.objects.create(**validated_data)


    def update(self, instance, validated_data):
        instance.user_id = validated_data.get('user_id', instance.user_id)
        instance.productionrate = validated_data.get('productionrate', instance.productionrate)
        instance.consumptionrate = validated_data.get('consumptionrate', instance.consumptionrate)
        instance.stoves = validated_data.get('stoves', instance.stoves)
        instance.lights = validated_data.get('lights', instance.lights)
        instance.household_appliances = validated_data.get('household_appliances', instance.household_appliances)
        instance.home_entertainment = validated_data.get('home_entertainment', instance.home_entertainment)
        instance.solar_panels = validated_data.get('solar_panels', instance.solar_panels)
        instance.windmills = validated_data.get('windmills', instance.windmills)
        instance.save()
        return instance
