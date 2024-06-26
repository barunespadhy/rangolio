# Generated by Django 5.0.6 on 2024-05-23 18:12

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apimanager', '0010_rename_category_blog_parent_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='id',
        ),
        migrations.RemoveField(
            model_name='category',
            name='id',
        ),
        migrations.AlterField(
            model_name='blog',
            name='blog_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='category',
            name='category_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
