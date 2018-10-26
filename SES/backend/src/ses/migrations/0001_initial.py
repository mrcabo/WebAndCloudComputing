# Generated by Django 2.0.8 on 2018-10-25 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EnergyRates',
            fields=[
            ],
        ),
        migrations.CreateModel(
            name='Household',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('user', models.CharField(max_length=250)),
                ('money', models.IntegerField()),
                ('battery', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Offer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('user', models.CharField(max_length=250)),
                ('price', models.IntegerField()),
                ('amount', models.IntegerField()),
            ],
        ),
    ]
