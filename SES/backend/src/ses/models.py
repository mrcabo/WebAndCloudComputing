from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel
from djongo import models


class ConsumptionRate(DjangoCassandraModel):
    user_id = columns.Text(primary_key=True)
    rate = columns.Integer(index=True)


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

