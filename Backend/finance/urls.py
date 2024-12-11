from django.urls import path, include
from rest_framework.routers import DefaultRouter # type: ignore
from .views import GigworkerViewSet, IncomeViewSet, ExpenseViewSet, SavingsGoalViewSet
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'workers', GigworkerViewSet)
router.register(r'incomes', IncomeViewSet)
router.register(r'expenses', ExpenseViewSet)
router.register(r'savings', SavingsGoalViewSet)

urlpatterns = [
    path('', include(router.urls)), #API Routes
    path('', TemplateView.as_view(template_name='index.html')),  # Serve React's index.html
]