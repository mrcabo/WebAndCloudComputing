# Generated by Django 2.0.8 on 2018-10-24 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ses', '0004_energy_windmills'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='energy',
            name='id',
        ),
        migrations.AlterField(
            model_name='energy',
            name='user_id',
            field=models.IntegerField(primary_key=True, serialize=False, unique=True),
        ),
    ]