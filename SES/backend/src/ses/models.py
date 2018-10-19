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
