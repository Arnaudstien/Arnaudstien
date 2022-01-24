const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Welcome to ShiFuMi");

//                    Obtient un entier entre 1 et 3 ****************************

const cardNumber = 1 + Math.floor(3 * Math.random());

//                    Generer choix Aleatoire ********************************
function aleatoire() {
  const choixAleatoire = Array[cardNumber - 1];
  console.log("choix aleatoire Dans le tableau", choixAleatoire);
}

//                    Debut du jeu   **********************************************

reader.question("Rock Paper Scissors? [1, 2, 3]\n>", (number) => {
  const choixUtilisateur = parseInt(number);

  //                  creer un tableau ********************************************
  const Array = [1, 2, 3];

  //                  Generer choix Aleatoire *************************************

  const choixAleatoire = Array[cardNumber - 1];
  console.log("choix utilisateur ", choixUtilisateur);
  console.log("choix aleatoire ", choixAleatoire);

  //function affichage(rock1, paper, scissors) {

  //}

  const rock = [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ];

  const paper = [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ];
  const scissors = [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ];

  //                               comparer les resultats ************************************

  function comparaison(a, b) {
    if ((a === 1 && b === 3) || (a === 2 && b === 1) || (a === 3 && b === 2)) console.log("gagne");
    else if (a === b) console.log("egalite");
    else console.log("perdu");
  }
  comparaison(parseInt(choixUtilisateur), choixAleatoire);
  //                  realisation de l 'affichage   *********************************
  function affichage(r, p, s) {
    if (r === 1) {
      console.log(rock);
    } else if (p === 2) {
      console.log(paper);
    } else console.log(scissors);
  }

  affichage(1, 2, 3);

  reader.close();
});

//const clear = () => console.log("\x1B[2J\x1B[0f") ;

//clear() ;
