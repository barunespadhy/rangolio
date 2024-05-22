# Generated by Django 5.0.4 on 2024-05-18 14:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resourceid', models.SlugField()),
                ('featuredid', models.SlugField()),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('tagline', models.CharField(blank=True, max_length=200, null=True)),
                ('coverimage', models.CharField(blank=True, max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('introContent', models.CharField(blank=True, max_length=100000, null=True)),
                ('profilePhoto', models.CharField(blank=True, max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resourceid', models.SlugField()),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('tagline', models.CharField(blank=True, max_length=200, null=True)),
                ('coverimage', models.CharField(blank=True, max_length=500, null=True)),
                ('contentbody', models.CharField(blank=True, max_length=100000, null=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blogs', to='apimanager.category')),
            ],
        ),
    ]