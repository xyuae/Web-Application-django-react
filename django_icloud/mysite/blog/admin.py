from django.contrib import admin

# To add, edit and delte the posts we've just modeled, use Django admin
from .models import Post, Comment
# Register your models here.

admin.site.register(Post)

admin.site.register(Comment)


