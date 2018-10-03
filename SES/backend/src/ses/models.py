from django.db import models

class Money(models.Model):
    amount = models.IntegerField()

    def __int__(self):
        return self.amount

class Battery(models.Model):
    level = models.IntegerField()

    def __int__(self):
        return self.level
