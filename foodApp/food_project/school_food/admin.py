from django.contrib import admin
from .models import Dania, Klienci, users, Zamowienia
# Register your models here.

admin.site.register(Klienci)
admin.site.register(users)
admin.site.register(Zamowienia)
admin.site.register(Dania)