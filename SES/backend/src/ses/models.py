from django.db import models
import uuid
from cassandra.cqlengine import columns
from django_cassandra_engine.models import DjangoCassandraModel


class ExampleModel(DjangoCassandraModel):
    example_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    # example_id = columns.UUID(primary_key=True, default=uui)
    description = columns.Text(required=False)
    
class ConsumptionRate(DjangoCassandraModel):
    house_id = columns.UUID(primary_key=True, default=uuid.uuid4)
    rate = columns.Integer(index=True)

class Money(models.Model):
    amount = models.IntegerField()

    def __int__(self):
        return self.amount

class Battery(models.Model):
    level = models.IntegerField()

    def __int__(self):
        return self.level
