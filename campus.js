// slugify : paquet npm, appelé par son nom
import slugify from "slugify";

// process.argv[2] : 1er mot après le nom du fichier. ?? donne une valeur si rien n'est passé.
const name = process.argv[2] ?? "inconnu";
console.log(`Salut et bienvenue sur le campus ${name} !`);

// L'identifiant : minuscules, sans accents ni symboles
const id = slugify(name, { lower: true, strict: true });
console.log(`Ton identifiant : ${id}`);

// Bonus : la date du jour, en français
const today = new Date().toLocaleDateString("fr-FR", { dateStyle: "full" });
console.log(`Nous sommes le ${today}.`);
