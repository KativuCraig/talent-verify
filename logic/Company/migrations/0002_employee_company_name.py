# Generated by Django 5.0.6 on 2024-07-08 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='company_name',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
