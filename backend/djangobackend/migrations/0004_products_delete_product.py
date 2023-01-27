# Generated by Django 4.1.5 on 2023-01-26 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("djangobackend", "0003_product_selected_images"),
    ]

    operations = [
        migrations.CreateModel(
            name="Products",
            fields=[
                (
                    "id",
                    models.CharField(max_length=100, primary_key=True, serialize=False),
                ),
                ("product_name", models.CharField(max_length=200)),
                ("categories", models.CharField(max_length=200)),
                ("brands", models.CharField(max_length=200)),
                ("stores", models.CharField(max_length=200)),
                ("url", models.CharField(max_length=300)),
            ],
        ),
        migrations.DeleteModel(
            name="Product",
        ),
    ]