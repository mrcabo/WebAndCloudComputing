from django.db import models
import uuid
from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel
from djongo import models


class ExampleModel(DjangoCassandraModel):
    example_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    # example_id = columns.UUID(primary_key=True, default=uui)
    description = columns.Text(required=False)


class ConsumptionRate(DjangoCassandraModel):
    house_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    rate = columns.Integer(index=True)


class Household(models.Model):
    dummy = models.CharField(max_length=50)
    # username = models.CharField(primary_key=True, max_length=20, unique=True)
    # email = models.EmailField(unique=True, blank=False)
    # users_firstName = models.CharField(max_length=50)
    # users_lastName = models.CharField(max_length=50)

    def __int__(self):
        return self.dummy


class Money(models.Model):
    amount = models.IntegerField()

    def __int__(self):
        return self.amount


class Battery(models.Model):
    level = models.IntegerField()

    def __int__(self):
        return self.level
