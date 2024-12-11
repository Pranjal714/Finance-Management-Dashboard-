from django.db import models

# Create your models here.

class Gigworker(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Income(models.Model):
    worker = models.ForeignKey(Gigworker, on_delete=models.CASCADE, related_name="incomes")
    source = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

class Expense(models.Model):
    worker = models.ForeignKey(Gigworker, on_delete=models.CASCADE, related_name="expenses")
    category = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

class SavingsGoal(models.Model):
     worker = models.ForeignKey(Gigworker, on_delete=models.CASCADE, related_name="savings")
     goal_name = models.CharField(max_length=100)
     target_amount = models.DecimalField(max_digits=10, decimal_places=2)
     saved_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
     due_date = models.DateField()
    
