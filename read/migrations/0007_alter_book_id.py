# Generated by Django 4.2.2 on 2023-07-07 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('read', '0006_alter_book_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='id',
            field=models.AutoField(max_length=128, primary_key=True, serialize=False),
        ),
    ]
