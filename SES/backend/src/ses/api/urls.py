from ses.api.views import MoneyViewSet, BatteryViewSet, ExampleModelViewSet, ConsumptionRateViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include, re_path

router = DefaultRouter()
router.register(r'', MoneyViewSet, base_name='money')
router.register(r'', BatteryViewSet, base_name='battery')
urlpatterns = router.urls

# from django.urls import path

from .views import (
      MoneyListView,
      MoneyDetailView,
      BatteryListView,
      BatteryDetailView,
      ExampleModelListView,
      ExampleModelDetailView,
      ConsumptionRateListView,
      ConsumptionRateDetailView
#     MoneyCreateView,
#     MoneyUpdateView,
#     MoneyDeleteView
 )


urlpatterns = [
     path('money', MoneyListView.as_view()),
     path('money/<pk>', MoneyDetailView.as_view()),
     path('battery', BatteryListView.as_view()),
     path('battery/<pk>', BatteryDetailView.as_view()),
     path('examplemodel', ExampleModelListView.as_view()),
     path('examplemodel/<pk>', ExampleModelDetailView.as_view()),
     path('consumptionrate', ConsumptionRateListView.as_view()),
     path('consumptionrate/<pk>', ConsumptionRateDetailView.as_view()),
]
#     path('create/', MoneyCreateView.as_view()),
#     path('<pk>', MoneyDetailView.as_view()),
#     path('<pk>/update/', MoneyUpdateView.as_view()),
#     path('<pk>/delete/', MoneyDeleteView.as_view())
# ]
