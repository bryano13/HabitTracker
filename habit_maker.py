#!/usr/bin/python3
from datetime import datetime


class Habit():
    id = 0

    def __init__(self, name, location, time):
        self.name = name
        self.location = location
        self.time = str(time)
        self.count = 0
        Habit.id += 1
        self.id = Habit.id
        self.done = "PRESS"
        self.disable = ""
        self.date = datetime.today()

    def addCount(self):
        self.count += 1

    def subtractCount(self):
        self.count -= 1

    def press(self):
        if self.count > 0:
            self.done = "DONE!"
            self.disable = "disabled"
