// process.argv[2] : 1er mot après le nom du fichier. ?? donne une valeur si rien n'est passé.
const name = process.argv[2] ?? "inconnu";
console.log(`Salut et bienvenue sur le campus ${name} !`);

// Bonus : la date du jour, en français
const today = new Date().toLocaleDateString("fr-FR", { dateStyle: "full" });
console.log(`Nous sommes le ${today}.`);
