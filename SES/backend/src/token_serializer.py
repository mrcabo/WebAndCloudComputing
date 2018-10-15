from rest_framework import serializers
from rest_auth.models import TokenModel
from django.contrib.auth.models import User


class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = TokenModel
        fields = ('key', 'user')
