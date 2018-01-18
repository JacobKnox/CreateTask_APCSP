age = input("How old are you?");
DOBM = input("What month were you born in?")
DOBD = input("What day were you born on?")
year = 2017
DOBY = str(year - int(age))
def WhatCanYouDo():
  if int(age) < 18:
    print("You are minor!")
  if int(age) >= 16:
	  print("You can drive!")
  if int(age) >= 18:
    print("You can vote!")
  if int(age) >= 21:
	  print("You can drink!")
  if int(age) >= 25:
	  print("You can rent a car!")
def WhenWereYouBorn():
  print("You were born on " + DOBM + " " + DOBD + ", " + DOBY)
def Background():
  WhatCanYouDo()
  WhenWereYouBorn()
  ZodiacSign()
Background()
def ZodiacSign():
    if DOBM is "January":
      if DOBD >= 20:
        print("You're an Aquarius!")
      else:
        print("You're a Capricorn!")
