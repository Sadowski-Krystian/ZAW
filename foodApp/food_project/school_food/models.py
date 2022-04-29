from django.db import models

# class Klienci(models.Model):
#     numer_legitymacj = models.CharField(max_length=10)
#     sposob_dostawy = models.IntegerField()
#     sposob_platnosci = models.CharField()



# class Zamowienia(models.Model):
#     id_uzytkownika = models.ForeignKey(Klienci.numer_legitymacj)
#     cena = models.IntegerField()
#     stan_zamowienia = models.CharField()

# class Rel_Danie_Zamowniena(models.Model):
#     id_zamowienia = models.ForeignKey(Zamowienia)
#     id_dania = models.ForeignKey(Dania)


class Klienci(models.Model):
    id_klienta = models.IntegerField(max_length=8)
    numer_legitymacj = models.IntegerField(max_length=8)
    create_time = models.DateTimeField()
    stan_konta = models.FloatField(max_length=4)
    sposob_dostawy = models.IntegerField()
    sposob_platnosci = models.CharField(max_length=32)

class users(models.Model):
    def __str__ (self):
        return self.name+" "+self.surname
    numer_legitymacj = models.CharField(max_length=8)
    active = models.IntegerField(max_length=1)
    create_time = models.DateTimeField()
    name = models.CharField(max_length=16)
    surname = models.CharField(max_length=32)
    email = models.EmailField(max_length=64)
    password = models.CharField(max_length=64)
    desc = models.CharField(max_length=128)

    def listUsers(self):
        return self.name+", "+self.surname+", "+self.email

class Zamowienia(models.Model):
    id_zamowienia = models.IntegerField(max_length=8)
    id_klienta = models.IntegerField(max_length=8)
    stan_platnosci = models.IntegerField(max_length=1)
    stan_zamowienia = models.IntegerField(max_length=1)
    cena = models.FloatField()


class Dania(models.Model):
    def __str__ (self):
        return self.nazwa+" "+str(self.cena)
    #question = models.ForeignKey(Question, on_delete=models.CASCADE)
    kategoria = models.CharField(max_length=16)
    create_time = models.DateTimeField(null=False)
    modify_time = models.DateTimeField(null=False)
    dostepnosc = models.BooleanField()
    ilosc = models.IntegerField(max_length=2)
    cena = models.FloatField()
    nazwa = models.CharField(max_length=128)
    opis = models.CharField(max_length=255)
    def listUsers(self):
        return self.nazwa+", "+self.opis+", "+str(self.cena)
    

    