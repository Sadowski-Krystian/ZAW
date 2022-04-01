from django.db import models

# Create your models here.
class Question(models.Model):
    quText = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")

class Answers(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    ansText = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")
    count = models.IntegerField(default=0)
