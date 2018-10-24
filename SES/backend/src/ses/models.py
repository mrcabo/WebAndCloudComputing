from django.db import models
import uuid
from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel
from djongo import models


class ConsumptionRate(DjangoCassandraModel):
    user_id = columns.Text(primary_key=True)
    rate = columns.Integer(index=True)


    # ONE keyspace per user "__keyspace__ = $$$" this should be set when we are accessing/modifying data
    # Then we have rows with "users_id" and "<attribute>" as primary keys (e.g. "user1" "productionRate")
    # And columns sequentially for measured data
    # user_id = columns.Text(primary_key=True)
    # data = columns.Map(columns.DateTime(), columns.Float())
    # data = columns.Map(columns.Integer(), columns.Text())


class Money(models.Model):
    amount = models.IntegerField()

    def __int__(self):
        return self.amount


class Battery(models.Model):
    level = models.IntegerField()

    def __int__(self):
        return self.level


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

class Energy(models.Model):
    user_id = models.IntegerField(primary_key=True, unique=True)
    productionrate = models.IntegerField()
    consumptionrate = models.IntegerField()
    stoves = models.IntegerField()
    lights = models.IntegerField()
    household_appliances = models.IntegerField()
    home_entertainment = models.IntegerField()
    solar_panels = models.IntegerField()
    windmills = models.IntegerField()