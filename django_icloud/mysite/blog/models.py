from django.db import models
from django.utils import timezone

# models.Model means that the Post is a Django Model, so
# Django knows that it should be saved in the database

###
# Post
# ---------
# title
# text
# author
# created_date
# published_date
###


class Post(models.Model):
    # models.CharField define text with a limited number of characters
    # models.ForeignKey links the character to another model
    # models.DateTimeField is a date and time type.
    # models.TextField is a long text without a limit
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length = 200)
    text = models.TextField()
    created_date = models.DateTimeField(
        default = timezone.now)
    published_date = models.DateTimeField(
        blank = True, null = True)
        
    def publish(self):
        self.published_date = timezone.now()
        self.save()
        
    def __str__(self):
        return self.title
        


        
class Comment(models.Model):
    post = models.ForeignKey('blog.Post', related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return self.text
        
        

    