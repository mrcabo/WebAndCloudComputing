from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel
from djongo import models


class Household(models.Model):
    user_id = models.IntegerField(primary_key=True, unique=True)
    user = models.CharField(max_length=250)
    money = models.IntegerField()
    battery = models.IntegerField()


class Offer(models.Model):

    user_id = models.IntegerField()
    user = models.CharField(max_length=250)
    price = models.IntegerField()
    amount = models.IntegerField()


class EnergyRates(DjangoCassandraModel):
    user_id = columns.Integer(primary_key=True)
    productionrate = columns.Integer()
    consumptionrate = columns.Integer()
    stoves = columns.Integer()
    lights = columns.Integer()
    household_appliances = columns.Integer()
    home_entertainment = columns.Integer()
    solar_panels = columns.Integer()
    windmills = columns.Integer()
