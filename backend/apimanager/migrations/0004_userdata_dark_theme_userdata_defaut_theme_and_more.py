# Generated by Django 5.0.4 on 2024-05-19 07:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apimanager', '0003_rename_resource_id_blog_blog_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='dark_theme',
            field=models.CharField(default='m', max_length=1500),
        ),
        migrations.AddField(
            model_name='userdata',
            name='defaut_theme',
            field=models.CharField(default='m', max_length=200),
        ),
        migrations.AddField(
            model_name='userdata',
            name='light_theme',
            field=models.CharField(default='m', max_length=1500),
        ),
    ]
