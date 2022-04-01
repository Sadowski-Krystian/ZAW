from django.db import models

class Klienci(models.Model):
    numer_legitymacj = models.CharField(max_length=10)
    sposob_dostawy = models.IntegerField()
    sposob_platnosci = models.CharField()

class Dania(models.Model):
    #question = models.ForeignKey(Question, on_delete=models.CASCADE)
    nazwa = models.CharField(max_length=200)
    opis = models.CharField(max_length=200)
    ilosc = models.IntegerChoices(max_length=100)
    dostepnosc = models.BooleanField()
    kategoria = models.CharField(max_length=100)
    cena = models.IntegerField()

class Zamowienia(models.Model):
    id_uzytkownika = models.ForeignKey(Klienci.numer_legitymacj)
    cena = models.IntegerField()
    stan_zamowienia = models.CharField()

class Rel_Danie_Zamowniena(models.Model):
    id_zamowienia = models.ForeignKey(Zamowienia)
    id_dania = models.ForeignKey(Dania)