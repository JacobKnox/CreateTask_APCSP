print("Hello! Welcome to your personal profile creator!")
print("________________________________________________")
name = input("What's your name?")
print("Nice to meet you " + name + "!")
if input("May I know more about you in order to form your profile?") == "Yes":
  hometown = input("Where were you born?")
  currenttown = input("Where do you currently live?")
  age = input("How old are you?")
  def WhatCanYouDo():
    if int(age) < 18:
      print("You are a minor!")
    if int(age) >= 16:
	    print("You can drive!")
    if int(age) >= 18:
      print("You can vote!")
    if int(age) >= 21:
	    print("You can drink!")
    if int(age) >= 25:
	    print("You can rent a car!")
  DOBM = input("What month were you born in?")
  DOBD = input("What day were you born on?")
  def ZodiacSign():
    if DOBM == "January":
      if int(DOBD) >= 20:
        print("You're an Aquarius!")
      else:
        print("You're a Capricorn!")
    elif DOBM == "February":
      if int(DOBD) <= 18:
        print("You're an Aquarius!")
      else:
        print("You're a Pisces!")
    elif DOBM == "March":
      if int(DOBD) <= 20:
        print("You're a Pisces!")
      else:
        print("You're an Aries!")
    elif DOBM == "April":
      if int(DOBD) <= 19:
        print("You're an Aries!")
      else:
        print("You're a Taurus!")
    elif DOBM == "May":
      if int(DOBD) <= 20:
        print("You're a Taurus!")
      else:
        print("You're a Gemini!")
    elif DOBM == "June":
      if int(DOBD) <= 20:
        print("You're a Gemini!")
      else:
        print("You're a Cancer!")
  year = 2017
  DOBY = str(year - int(age))
  def WhenWereYouBorn():
    print("You were born on: " + DOBM + " " + DOBD + ", " + DOBY)
  def Profile():
    print("________")
    print("PROFILE:")
    print("________")
    print("Name: " + name)
    WhenWereYouBorn()
    WhatCanYouDo()
    ZodiacSign()
    print("Born in: " + hometown)
    print("Lives in: " + currenttown)
  if input("Would you like to know your profile?") == "Yes":
    Profile()
    if input("Would you like to lock your profile?") == "Yes":
      password = input("What would you like to set your password to?")
      print("You're profile has been locked! You can reaccess your profile by entering: 'I'd like to see my profile'!")
    else:
      print("Alright! Let me know if you need anything! You can reaccess your profile by entering: 'I'd like to see my profile'!")
  else:
    print("Alright! Let me know if you need anything!")
else:
  print("Alright! Let me know if you need anything!")
if input("") == "I'd like to see my profile":
  if input("What is your password?") == password:
    Profile()
else:
  print("How can I help you?")
if input("") == "What is your name?":
  print("My name is PPC Bot--your personal profile creator bot! But you may simply call me Charles.")
