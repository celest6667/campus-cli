// Pour aller plus loin : une catégorie limitée à trois valeurs
type Category = 'clavier' | 'souris' | 'ecran'

// L'interface décrit la forme d'un produit
interface Product {
  id: number
  name: string
  price: number
  category: Category
  description?: string // optionnelle
}

// 5 produits, dont un sans description (la Souris)
const products: Product[] = [
  { id: 1, name: 'Clavier', price: 49, category: 'clavier', description: 'Clavier mécanique AZERTY' },
  { id: 2, name: 'Souris', price: 19, category: 'souris' },
  { id: 3, name: 'Écran', price: 189, category: 'ecran', description: 'Écran 27 pouces, 144 Hz' },
  { id: 4, name: 'Tapis de souris', price: 12, category: 'souris', description: 'Tapis XXL en tissu' },
  { id: 5, name: 'Clavier sans fil', price: 79, category: 'clavier', description: 'Clavier Bluetooth compact' },
]

// Renvoie le produit trouvé, ou undefined s'il n'existe pas
function findById(products: Product[], id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

// Renvoie les produits strictement moins chers que max
function cheaperThan(products: Product[], max: number): Product[] {
  return products.filter((p) => p.price < max)
}

// Description ou texte par défaut : on traite l'absence
function describe(product: Product): string {
  if (product.description === undefined) {
    return 'Pas de description'
  }
  return product.description
}

// npm start -- 2 : l'argument arrive en texte, on le convertit
const id = Number(process.argv[2])
const product = findById(products, id)

if (product === undefined) {
  console.log(`Produit ${process.argv[2]} introuvable`)
} else {
  console.log(`${product.name} · ${product.price} € · ${describe(product)}`)
}

// Les noms des produits à moins de 50 €
const cheapNames = cheaperThan(products, 50).map((p) => p.name)
console.log(`À moins de 50 € : ${cheapNames.join(', ')}`)
