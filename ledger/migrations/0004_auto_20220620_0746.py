# Generated by Django 3.0.1 on 2022-06-20 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ledger', '0003_auto_20220620_0552'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cashledgerreport',
            name='date',
            field=models.DateTimeField(),
        ),
    ]
