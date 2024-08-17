function randomLetter() {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}
function randomCategory(categoryType) {
  const list = categoryType === "fun" ? funList : classicList;
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function letterAndCategory(categoryType) {
  if (!categoryType) {
    return { letter: "", category: "" };
  }
  const letter = randomLetter();
  const category = randomCategory(categoryType);
  return { letter, category };
}

export default letterAndCategory;

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const classicList = [
  "Prénom",
  "Pays",
  "Ville",
  "Animal",
  "Fruit",
  "Légume",
  "Métier",
  "Couleur",
  "Fleur",
  "Objet",
  "Marque",
  "Sport",
  "Film",
  "Chanson",
  "Livre",
  "Célébrité",
  "Partie du corps",
  "Aliment",
  "Vêtement",
  "Instrument de musique",
];

const funList = [
  "Super-héros",
  "Personnage de dessin animé",
  "Monstre",
  "Alien",
  "Pouvoir magique",
  "Animal imaginaire",
  "Objet volant",
  "Planète",
  "Vaisseau spatial",
  "Robot",
  "Invention futuriste",
  "Lieu imaginaire",
  "Créature mythologique",
  "Sortilège",
  "Potion magique",
  "Trésor caché",
  "Énigme",
  "Jeu vidéo",
  "Film de science-fiction",
  "Série télévisée",
];
