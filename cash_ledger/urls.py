"""cash_ledger URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from ledger import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.UserLoginView, name='login'),
    path('logout/', views.UserLogoutView, name='logout'),
    path('report/', views.LedgerReportReceivePayment, name='report'),
    path('get-note/', views.GetAvailableNote, name="get_note"),
    path('receipt-entry/', views.ReceiptEntryView, name='receipt_entry'),
    path('payment-entry/', views.PaymentEntryView, name='payment_entry'),
    path('paid-report/', views.LedgerReportPaidPayment, name='paid_report'),
]
