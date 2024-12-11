from django.shortcuts import render
from rest_framework import viewsets # type: ignore
from .models import Gigworker, Income, Expense, SavingsGoal
from .serializers import GigWorkerSerializer, IncomeSerializer, ExpenseSerializer, SavingsGoalSerializer

# Create your views here.
class GigworkerViewSet(viewsets.ModelViewSet):
    queryset = Gigworker.objects.all()
    serializer_class = GigWorkerSerializer

class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

class SavingsGoalViewSet(viewsets.ModelViewSet):
    queryset = SavingsGoal.objects.all()
    serializer_class = SavingsGoalSerializer