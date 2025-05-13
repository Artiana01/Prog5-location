from modal.reservation import Reservation

class BookableItem:
    def __init__(self, name):
        self.name = name
        self.reservations = []

    def is_available(self, start_date, end_date):
        new_reservation = Reservation(start_date, end_date)
        for reservation in self.reservations:
            if not reservation.is_valid(new_reservation):
                return False
        return True

    def book(self, start_date, end_date):
        if self.is_available(start_date, end_date):
            self.reservations.append(Reservation(start_date, end_date))
            print("Reservation successfully done.")
        else:
            raise Exception("You can't make a reservation on this date.")
