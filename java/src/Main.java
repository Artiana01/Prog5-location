
import exception.NonBookableException;
import modal.BookableItem;

import java.time.LocalDate;
import java.util.Date;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws NonBookableException {

        BookableItem velo = new BookableItem("velo");
        BookableItem maison = new BookableItem("maison");
        BookableItem appareil = new BookableItem("appareil");

        Scanner scanner = new Scanner(System.in);

        boolean continueBooking = true;
        while (continueBooking) {
            System.out.println("Please enter the number of the  item to book (1-velo, 2-maison, 3-appareil):");
            String choice = scanner.nextLine().toLowerCase();

            BookableItem itemToBook = null;

            if (choice.equals("1")) {
                itemToBook = velo;
            } else if (choice.equals("2")) {
                itemToBook = maison;
            } else if (choice.equals("3")) {
                itemToBook = appareil;
            } else {
                System.out.println("Invalid choice. Please select either '1', '2', or '3'.");
                continue;
            }

            System.out.println("Enter the start date of reservation (YYYY-MM-DD):");
            String startDateString = scanner.nextLine();
            System.out.println("Enter the end date of reservation (YYYY-MM-DD):");
            String endDateString = scanner.nextLine();

            LocalDate startDate = LocalDate.parse(startDateString);
            LocalDate endDate = LocalDate.parse(endDateString);

            itemToBook.book(startDate, endDate);

            System.out.println("Do you want to make another reservation? (yes/no):");
            String response = scanner.nextLine().toLowerCase();
            if (response.equals("no")) {
                continueBooking = false;
            }
        }

        System.out.println("Thank you for using our booking system!");
    }
}
