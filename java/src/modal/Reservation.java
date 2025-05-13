package modal;

import java.time.LocalDate;

public class Reservation {
    public final LocalDate startDate;
    public final LocalDate endDate;

    public Reservation(LocalDate startDate, LocalDate endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public boolean isReservationValid(Reservation other) {
        return (this.endDate.isBefore(other.startDate) || this.startDate.isAfter(other.endDate));
    }


}


