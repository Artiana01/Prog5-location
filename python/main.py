from modal.bookable_item import BookableItem
from datetime import datetime

def main():
    voiture = BookableItem("voiture")
    maison = BookableItem("maison")
    assiette = BookableItem("assiette")

    while True:
        choice = input("Choose an item to book (1-voiture, 2-maison, 3-assiette): ")
        item = {"1": voiture, "2": maison, "3": assiette}.get(choice)
        if not item:
            print("Invalid choice.")
            continue

        try:
            start_str = input("Enter start date (YYYY-MM-DD): ")
            end_str = input("Enter end date (YYYY-MM-DD): ")
            start_date = datetime.strptime(start_str, "%Y-%m-%d").date()
            end_date = datetime.strptime(end_str, "%Y-%m-%d").date()
            item.book(start_date, end_date)
        except Exception as e:
            print(e)
        except ValueError:
            print("Invalid date format.")

        if input("Another reservation? (yes/no): ").lower() != "yes":
            break

    print("Thanks for using the booking system!")

if __name__ == "__main__":
    main()
