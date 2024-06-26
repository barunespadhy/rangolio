# Generated by Django 5.0.6 on 2024-06-03 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apimanager', '0011_remove_blog_id_remove_category_id_alter_blog_blog_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='built_with',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='dark_theme',
            field=models.CharField(default='{"theme": "Dark Mode","background": "bg-dark","textColor": "text-white","linkBackground": "bg-light","linkTextColor": "text-black","captionColor": "#8a8a8a","fontAwesomeIcon": "faSun","borderColor": "secondary","buttonColor": "light","navBar": {"navBarTheme": "navbar-dark","background": "bg-secondary","buttonColor": "light"},"footer": {"background": "bg-secondary","text": "text-black"}}', max_length=1500),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='light_theme',
            field=models.CharField(default='{"theme": "Light Mode","background": "bg-light","textColor": "text-black","linkBackground": "bg-dark","linkTextColor": "text-white","captionColor": "#605f5f","fontAwesomeIcon": "faMoon","borderColor": "secondary","buttonColor": "dark","navBar": {"navBarTheme": "navbar-light","background": "bg-secondary","buttonColor": "light"},"footer": {"background": "bg-secondary","text": "text-white"}}', max_length=1500),
        ),
    ]
