package modal;

import exception.NonBookableException;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class BookableItem {
    private String name;
    List<Reservation> reservations;
    public BookableItem(String name){
        this.name=name;
        this.reservations=new ArrayList<>();
    }
    private boolean isAvailable(LocalDate startDate, LocalDate endDate) {
        Reservation newReservation = new Reservation(startDate, endDate);
        for (Reservation reservation : reservations) {

            if (!reservation.isReservationValid(newReservation)) {
                return false;
            }
        }
        return true;
    }
    public  void book(LocalDate startDate,LocalDate endDate) throws NonBookableException{

        if(isAvailable(startDate,endDate)){
            reservations.add(new Reservation(startDate, endDate));
            System.out.println("reservation seucessfuly done");
        }
        else {
            throw  new NonBookableException("you can't make a book on this intervalle of date");
        }
    }


}
