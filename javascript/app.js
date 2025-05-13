const readline = require('readline-sync');


function showMenu() {
  console.log('\n=== Application de Location ===');
  console.log('1. Voir les objets à louer');
  console.log('2. Louer un objet');
  console.log('3. Voir les locations d’un objet');
  console.log('4. Quitter');
}

function main() {
  while (true) {
    showMenu();
    const choice = readline.question('Votre choix: ');

    if (choice === '1') {
      const items = getAllItems();
      items.forEach(item => console.log(`ID: ${item.id} - ${item.name}`));

    } else if (choice === '2') {
      const id = parseInt(readline.question('ID de l’objet: '));
      const item = getItemById(id);
      if (!item) {
        console.log('Objet non trouvé.');
        continue;
      }

      const start = readline.question('Date de début (YYYY-MM-DD): ');
      const end = readline.question('Date de fin (YYYY-MM-DD): ');

      if (!isValidDateRange(start, end)) {
        console.log('La location doit durer au moins un jour et les dates doivent être valides.');
        continue;
      }

      const availability = isItemAvailable(id, start, end);
      if (!availability.available) {
        console.log(`L’objet est déjà loué. Il sera disponible après le ${availability.nextAvailable}.`);
        continue;
      }

      addRental(id, start, end);
      console.log(`Objet "${item.name}" loué du ${start} au ${end}.`);

    } else if (choice === '3') {
      const id = parseInt(readline.question('ID de l’objet: '));
      const item = getItemById(id);
      if (!item) {
        console.log('Objet non trouvé.');
        continue;
      }

      const rentals = getActiveRentalsForItem(id);
      if (rentals.length === 0) {
        console.log('Aucune location active pour cet objet.');
      } else {
        console.log(`Locations actives pour ${item.name}:`);
        rentals.forEach(r => console.log(` - du ${r.startDate} au ${r.endDate}`));
      }

    } else if (choice === '4') {
      console.log('Au revoir !');
      break;

    } else {
      console.log('Choix invalide.');
    }
  }
}

main();
