from ses.api.views import MoneyViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', MoneyViewSet, base_name='money')
urlpatterns = router.urls

# from django.urls import path

# from .views import (
#     MoneyListView,
#     MoneyDetailView,
#     MoneyCreateView,
#     MoneyUpdateView,
#     MoneyDeleteView
# )


# urlpatterns = [
#     path('', MoneyListView.as_view()),
#     path('create/', MoneyCreateView.as_view()),
#     path('<pk>', MoneyDetailView.as_view()),
#     path('<pk>/update/', MoneyUpdateView.as_view()),
#     path('<pk>/delete/', MoneyDeleteView.as_view())
# ]
