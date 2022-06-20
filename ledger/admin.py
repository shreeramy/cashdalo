from django.contrib import admin
from ledger.models import UserAccount, CashLedgerReport, NoteAvailable
# Register your models here.

admin.site.register(UserAccount)
admin.site.register(CashLedgerReport)
admin.site.register(NoteAvailable)