const prompt = require(`prompt-sync`)();
const tickets = [
    {
        id: 1,
        passengerName: "Amal",
        tripId: 1,
        seatNumber: 1,
        price: 25
    },
    {
        id: 2,
        passengerName: "choukri",
        tripId: 1,
        seatNumber: 2,
        price: 25
    },
    {
        id: 3,
        passengerName: "Achraf",
        tripId: 1,
        seatNumber: 3,
        price: 25
    },
    {
        id: 4,
        passengerName: "Iyad",
        tripId: 4,
        seatNumber: 1,
        price: 65
    },
    {
        id: 5,
        passengerName: "Said",
        tripId: 5,
        seatNumber: 1,
        price: 50
    },
    {
        id: 6,
        passengerName: "Abde",
        tripId: 12,
        seatNumber: 1,
        price: 85
    },
    {
        id: 7,
        passengerName: "Meryeme",
        tripId: 5,
        seatNumber: 1,
        price: 110
    },
    {
        id: 8,
        passengerName: "Chams",
        tripId: 5,
        seatNumber: 2,
        price: 110
    },
    {
        id: 9,
        passengerName: "Aya",
        tripId: 6,
        seatNumber: 1,
        price: 120
    },
    {
        id: 10,
        passengerName: "Chayma",
        tripId: 7,
        seatNumber: 1,
        price: 150
    }
];
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

for (let i = 0; i < tickets.length; i++) {
    //quand on ajoute des data de tickets stockees il faut aussi modifier 
    // et decrementer les availableSeats restant au train 
    let traject = null;

    for (let j = 0; j < trips.length; j++) {
        if (tickets[i].tripId === trips[j].id) {
            traject = trips[j];
        }
    }

    if (traject !== null) {
        traject.availableSeats--;
    }
}

let newId = tickets.length;
function trajet() {
    console.log(``);
    console.log(`=== TRAJETS DISPONIBLES ===`);
    console.log(``);
    for (let i = 0; i < trips.length; i++) {
        console.log(`#${trips[i].id} ${trips[i].departure} --> ${trips[i].destination}`);
        console.log(`Départ : ${trips[i].departureTime}`);
        console.log(`Arrivée : ${trips[i].arrivalTime}`);
        console.log(`Prix : ${trips[i].price}`);
        console.log(`Places disponibles : ${trips[i].availableSeats}`);
        console.log(``);
    }
}

function chercherPlaceLibre(tripId) {
    for (let place = 1; place <= 50; place++) {
        let placelibre = true;
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].tripId === tripId && tickets[i].seatNumber === place) {
                placelibre = false;
                break;
            }
        }
        if (placelibre) {
            return place;
        }
    }
    return null; //aucune place disponible
}
function achat() {
    let nom = prompt("Nom du passager : ");
    let id = parseInt(prompt("Identifiant du trajet : "));
    let result = false;
    let check = false;
    let trajet;

    for (let j=0; j<trips.length; j++)
        {
        if (trips[j].id === id) 
            {
            result = true;
            trajet = trips[j];
            if (trips[j].availableSeats > 0) 
            {
                check = true;
            }
            break;
            }
        }

    if (!result) 
    {
        console.log("Trajet introuvable");
    }
    else 
    {
        console.log("Trajet trouvable");
        
        if (check) 
            {
            console.log("Place disponible");

            let seatNumber = chercherPlaceLibre(trajet.id);
            newId += 1;

            let ticket =
            {
                id: newId,
                passengerName: nom,
                tripId: trajet.id,
                seatNumber: seatNumber,
                price: trajet.price
            };
            tickets.push(ticket);
            trajet.availableSeats--;

            console.log("");
            console.log("Ticket acheté avec succès : ");
            console.log("");
            console.log(`Ticket #${ticket.id}`);
            console.log(`Passager : ${ticket.passengerName}`);
            console.log(`Trajet :${trajet.departure} --> ${trajet.destination}`);
            console.log(`Place : ${ticket.seatNumber}`);
            console.log(`Prix : ${ticket.price} DH`);
            console.log("");
        }
        else 
        {
            console.log("Train complet");
        }
    }
}

function afficherTicket() {
    console.log(" ====== TICKETS ====== ");
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré");
        return;
    }
    for (let m=0; m<tickets.length; m++) 
    {
        let ticket = tickets[m];
        let trajet;
        for (let l=0; l<trips.length; l++) 
        {
            if (trips[l].id === ticket.tripId) 
            {
                trajet = trips[l];
                break;
            }
        }
        console.log(`Ticket #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName}`);
        console.log(`Trajet :${trajet.departure} --> ${trajet.destination}`);
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH`);
        console.log("");
    }
}

function annule() {

    let idTicket = parseInt(prompt("Identifiant du ticket : "));
    let check = false;
    let indexTicket;
    let ticket;
    for (let x=0; x<tickets.length; x++)
        {
        if (tickets[x].id === idTicket) 
            {
            check = true;
            indexTicket = x;
            ticket = tickets[x];
            break;
            }
        }
    if (!check) 
        {
        console.log(" Ticket introuvable ");
        return;
        }

    let trajet;
    for (let i=0; i<trips.length; i++) 
        {
        if (trips[i].id === ticket.tripId) 
            {
            trajet = trips[i];
            break;
            }
        }

    tickets.splice(indexTicket, 1);
    trajet.availableSeats++;
    console.log(" Ticket annulé avec succès ");
}

function recherche() {
    let name = prompt("Nom du passager : ").trim().toLowerCase();
    let results = tickets.filter(ticket => ticket.passengerName.trim().toLowerCase() === name);
    if (results.length == 0) {
        console.log(`Aucune ticket de ${name} n est trouver `);
        return;
    }
    console.log(`======Ticket trouves :======`);
    results.forEach(ticket => {
        let trajet = trips.find(t => t.id === ticket.tripId);
        console.log("");
        console.log(`Ticket #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName}`);
        console.log(`Trajet :${trajet.departure} --> ${trajet.destination}`);
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH`);
        console.log("");
    });

}

function filtre() {
    let depart = prompt("La ville du depart : ").trim().toLowerCase();
    let trouves = 0;

    console.log(`Résultat : `);
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].departure.trim().toLowerCase() === depart) {
            console.log("");
            console.log(`${trips[i].departure} --> ${trips[i].destination} : ${trips[i].price} DH`);
            trouves++;
        }
    }
    if (trouves === 0) {
        console.log(`Aucun trajet au départ de ${depart} n'a été trouvé.`);
    }
}

let tri_trips = [];
function trie() {
    tri_trips = [...trips];//Spread operator or copy
    let swap;
    for (let i = 0; i < tri_trips.length - 1; i++) {
        for (let j = 0; j < tri_trips.length - 1 - i; j++) {
            if (tri_trips[j].price > tri_trips[j + 1].price) {
                swap = tri_trips[j];
                tri_trips[j] = tri_trips[j + 1];
                tri_trips[j + 1] = swap;
            }
        }
    }

    for (let i = 0; i < tri_trips.length; i++) {
        console.log(`${tri_trips[i].departure} --> ${tri_trips[i].destination} : ${tri_trips[i].price} DH`);
    }
}

function statistiques() {
    console.log("");
    console.log("*Nombre total de tickets vendus");
    console.log("");
    let total = 0;
    for (let i = 0; i < tickets.length; i++) {
        total = tickets[i].id;
    }
    console.log(`=> Nombre total de tickets  : ${total}`);

    console.log("");
    console.log("*Calculer la somme des prix des tickets ");
    console.log("");
    let somme = 0;
    for (let i = 0; i < tickets.length; i++) {
        somme += tickets[i].price;
    }
    console.log(`=> Chiffre d'affaires total : ${somme}`);

    console.log("");
    console.log("*Trajet le plus vendu  ");
    console.log("");

    let min = trips[0].availableSeats;
    let plus = 0;
    for (let i=1; i<trips.length; i++) 
        {
        if (trips[i].availableSeats < min) 
            {
            min = trips[i].availableSeats;
            plus = i;
        }
    }
    const ticketsVendus = 50 - min;
    console.log(`=> Trajet le plus vendu : ${trips[plus].departure} --> ${trips[plus].destination}`);

    console.log(`=> ${ticketsVendus} :  tickets vendus `);

}



function affichertableau() {
    let choix;

    do {
        console.log("");
        console.log("                =================================");
        console.log("                          RAILWAY MANAGER ");
        console.log("                =================================");


        console.log("                1- Afficher les trajets");
        console.log("                2- Acheter un ticket");
        console.log("                3- Afficher les tickets");
        console.log("                4- Annuler un ticket");
        console.log("                5- Rechercher un ticket");
        console.log("                6- Filtrer les trajets");
        console.log("                7- Trier les trajets");
        console.log("                8- Statistique");
        console.log("                0- Quitter");

        console.log("");
        choix = parseInt(prompt("choisir parmis les choix du menu principal : "));

        switch (choix) {
            case 1:
                console.log(`1. Afficher les trajets`);
                trajet();
                break;

            case 2:
                console.log(`2. Acheter un ticket`);
                achat();
                break;


            case 3:
                console.log(`3. Afficher les tickets`);
                afficherTicket();
                break;


            case 4:
                console.log(`4. Annuler un ticket`);
                annule();
                break;

            case 5:
                console.log(`5. Rechercher un ticket`);
                recherche();
                break;

            case 6:
                console.log(`6. Filtrer les trajets`);
                filtre();
                break;

            case 7:
                console.log(`7. Trier les trajets`);
                trie();
                break;

            case 8:
                console.log(`8. Statistiques`);
                statistiques();
                break;

            case 0:
                console.log(`0. Quitter`);
                break;

            default:
                console.log(`Cette choix n existe pas sur le menu`);
        }
    } while (choix !== 0);
}

affichertableau();

