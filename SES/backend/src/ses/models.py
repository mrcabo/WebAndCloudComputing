from django.db import models

class Money(models.Model):
    amount = models.IntegerField()

    def __str__(self):
        return self.amount
