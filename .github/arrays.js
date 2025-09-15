// Oppgave 1

// 1a - Lag arrayen
let primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67];

// 1b - Funksjon som skriver ut alle verdier
function skrivUtPrimtall(array) {
  array.forEach(tall => {
    console.log(tall);
  });
}

// 1c - Fullfør arrayen med alle primtall under 100
primtall.unshift(5, 3, 2);                  // legg til foran
primtall.splice(6, 0, 29, 31, 37, 41);      // legg inn etter 23
primtall.push(71, 73, 79, 83, 89, 97);      // legg til bakerst

// 1d - Skriv ut alle primtallene
console.log("Primtall under 100:");
skrivUtPrimtall(primtall);

// Oppgave 3

function minReverse(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Bytt plass på start og end
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr; // den samme arrayen, men nå reversert
}

// Eksempel
// let tall = [1, 2, 3, 4, 5]; COMMENT JUST FOR THE NEXT CODE CAN WORKS. 
console.log(minReverse(tall));  // [5, 4, 3, 2, 1]

// Oppgave 5

// 5a - lage array med heltall opp til n
function lagArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// 5b - trekke x tall uten tilbakelegging
function trekkTall(arr, x) {
  console.log("Før trekking:", arr.slice()); // kopi av original array
  let trukket = [];

  for (let i = 0; i < x; i++) {
    let index = Math.floor(Math.random() * arr.length); // tilfeldig index
    let tall = arr.splice(index, 1)[0]; // fjern tallet fra array og hent det ut
    trukket.push(tall);
  }

  console.log("Tall trukket:", trukket);
  console.log("Etter trekking:", arr);
}

// Eksempel
let tall = lagArray(10);
trekkTall(tall, 3);
