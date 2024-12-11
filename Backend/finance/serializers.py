from rest_framework import serializers # type: ignore
from .models import Gigworker, Income, Expense, SavingsGoal

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = '__all__'

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'

class SavingsGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingsGoal
        fields = '__all__'

class GigWorkerSerializer(serializers.ModelSerializer):
    income = IncomeSerializer(many=True, read_only=True)
    expenses = ExpenseSerializer(many=True, read_only=True)
    savings = SavingsGoalSerializer(many=True, read_only=True)
    class Meta:
        model = Gigworker
        fields = '__all__'