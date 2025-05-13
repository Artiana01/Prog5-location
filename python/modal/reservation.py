class Reservation:
    def __init__(self, start_date, end_date):
        self.start_date = start_date
        self.end_date = end_date

    def is_valid(self, other):
        return self.end_date < other.start_date or self.start_date > other.end_date
