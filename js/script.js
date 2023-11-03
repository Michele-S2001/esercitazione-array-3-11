//console.log("ciao");

//funzioni

// BONUS: creare una funzione per formattare il totale in € (Intl.NumberFormat)

function getEuroFormat(number) {

  console.log(new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(number));

}

// BONUS: creare una funzione per formattare la data di nascita (Intl.DateTimeFormat)

function getBirthFormat(user) {
  let parseBirthdayDate = Date.parse(user.personalData.birthday);

  console.log(
    "nato: ",
    new Intl.DateTimeFormat("it-IT", {
      dateStyle: "short",
    }).format(parseBirthdayDate)
  );
}

//Creare una funzione che restituisca il valore dell'equipaggiamento per ogni utente

function getEquipmentValue(user) {

  const total = user.equipment.reduce((accumulator, element) => {
    return element.price + accumulator;
  }, 0);

  return total
}

//Creare una funzione che restituisca i nomi di tutti gli utenti
function functionWrapper(array) {
  array.forEach((el) => {

    getFullName(el)
    getEquipment(el);
    getBirthFormat(el);

    getEuroFormat(getEquipmentValue(el));

  });
}

function getFullName(person) {
  console.log(person.name + " " + person.lastname);
}

//Creare una funzione che restituisca una lista di tutto l'equipaggiamento
function getEquipment(user) {
  user.equipment.forEach((el, i) => {
    let n = i + 1;
    console.log(n, el.name);
  });
}

const users = [
  {
    name: "Paul",
    lastname: "Atreides",
    personalData: {
      birthday: "1993-07-25",
      birthplace: "Caladan",
    },
    equipment: [
      {
        name: "Stillsuit",
        price: 50,
      },
      {
        name: "Knife",
        price: 10,
      },
      {
        name: "Compass",
        price: 25,
      },
    ],
  },
  {
    name: "Irulan",
    lastname: "Corrino",
    personalData: {
      birthday: "2002-10-02",
      birthplace: "Kaitan",
    },
    equipment: [
      {
        name: "Lightdress",
        price: 400,
      },
      {
        name: "Hidden blade",
        price: 130,
      },
      {
        name: "Necklace",
        price: 810,
      },
    ],
  },
  {
    name: "Thufir",
    lastname: "Hawat",
    personalData: {
      birthday: "1985-04-22",
      birthplace: "REDACTED",
    },
    equipment: [
      {
        name: "Sword",
        price: 75,
      },
    ],
  },
  {
    name: "Gurney",
    lastname: "Halleck",
    personalData: {
      birthday: "1983-01-30",
      birthplace: "Giedi Primo",
    },
    equipment: [
      {
        name: "Baliset",
        price: 245,
      },
      {
        name: "Force Shield",
        price: 300,
      },
    ],
  },
];

functionWrapper(users);
