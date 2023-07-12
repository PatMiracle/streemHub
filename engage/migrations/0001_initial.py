# Generated by Django 4.2.2 on 2023-06-27 19:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('UserModel', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.CharField(max_length=128, primary_key=True, serialize=False, unique=True)),
                ('content', models.TextField()),
                ('date', models.DateTimeField()),
                ('no_of_likes', models.PositiveIntegerField()),
                ('no_of_subcomments', models.PositiveIntegerField()),
                ('image_content', models.FileField(upload_to='comment_media/')),
            ],
        ),
        migrations.CreateModel(
            name='Subcomment',
            fields=[
                ('id', models.CharField(max_length=128, primary_key=True, serialize=False, unique=True)),
                ('content', models.TextField()),
                ('no_of_likes', models.PositiveIntegerField()),
                ('date', models.DateTimeField()),
                ('comment', models.ManyToManyField(to='engage.comment')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UserModel.user')),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.CharField(max_length=128, primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=255)),
                ('no_of_likes', models.PositiveIntegerField()),
                ('no_of_comments', models.PositiveIntegerField()),
                ('date', models.DateTimeField()),
                ('text_content', models.TextField()),
                ('video_or_image_content', models.FileField(upload_to='post_media/')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UserModel.user')),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='post_detail',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='engage.post'),
        ),
    ]