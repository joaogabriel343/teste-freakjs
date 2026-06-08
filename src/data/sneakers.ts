export interface SneakerProduct {
  slug: string;
  name: string;
  price: number;
  priceLabel: string;
  image: string;
  shortDescription: string;
  description: string;
  colorway: string;
  category: string;
  cushioning: string;
  drop: string;
  tags: string[];
}

export const sneakers: SneakerProduct[] = [
  {
    slug: "nova-run-01",
    name: "Nova Run 01",
    price: 699,
    priceLabel: "R$ 699",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Leve, responsivo e com visual limpo para treino e uso diário.",
    description:
      "O Nova Run 01 foi pensado para quem quer conforto imediato sem perder presença visual. A malha respirável e a entressola macia entregam uma passada estável para corridas curtas, caminhadas longas e rotina urbana.",
    colorway: "Preto carvão / branco gelo",
    category: "Running lifestyle",
    cushioning: "Espuma responsiva",
    drop: "8 mm",
    tags: ["Leve", "Respirável", "Unissex"],
  },
  {
    slug: "street-volt-mid",
    name: "Street Volt Mid",
    price: 829,
    priceLabel: "R$ 829",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Cano médio, construção robusta e estética urbana marcante.",
    description:
      "O Street Volt Mid combina estrutura firme com acabamento premium para quem quer um tênis que se destaque no look. A paleta neutra facilita combinações e a base estável reforça o uso cotidiano.",
    colorway: "Cinza pedra / off-white",
    category: "Streetwear",
    cushioning: "Palmilha anatômica",
    drop: "10 mm",
    tags: ["Street", "Estruturado", "Estilo"],
  },
  {
    slug: "pulse-max-2",
    name: "Pulse Max 2",
    price: 959,
    priceLabel: "R$ 959",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Amortecimento amplo para quem passa o dia inteiro em movimento.",
    description:
      "O Pulse Max 2 foi desenvolvido para conforto prolongado. A sola volumosa absorve impactos com facilidade e o cabedal ventilado mantém a sensação de frescor em trajetos longos ou dias mais intensos.",
    colorway: "Branco neve / cinza fumê",
    category: "Comfort",
    cushioning: "Max foam",
    drop: "9 mm",
    tags: ["Amortecido", "Conforto", "Dia todo"],
  },
  {
    slug: "terra-trail-pro",
    name: "Terra Trail Pro",
    price: 899,
    priceLabel: "R$ 899",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Tração agressiva e proteção extra para terrenos mistos.",
    description:
      "O Terra Trail Pro entrega aderência e segurança em superfícies irregulares. A base reforçada e a sola de tração ampliada ajudam em trilhas leves, parques e deslocamentos fora do asfalto.",
    colorway: "Verde musgo / areia",
    category: "Trail",
    cushioning: "Macio com suporte",
    drop: "6 mm",
    tags: ["Tração", "Outdoor", "Proteção"],
  },
  {
    slug: "mono-heritage",
    name: "Mono Heritage",
    price: 749,
    priceLabel: "R$ 749",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Visual minimalista com acabamento premium e versátil.",
    description:
      "O Mono Heritage aposta em linhas simples e materiais de toque refinado. É o tipo de tênis que funciona com jeans, alfaiataria casual ou looks monocromáticos sem perder personalidade.",
    colorway: "Branco marfim / bege",
    category: "Lifestyle",
    cushioning: "Conforto diário",
    drop: "7 mm",
    tags: ["Minimalista", "Premium", "Versátil"],
  },
  {
    slug: "sky-glide-v3",
    name: "Sky Glide V3",
    price: 1090,
    priceLabel: "R$ 1.090",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Silhueta leve, dinâmica e pronta para destacar a vitrine.",
    description:
      "O Sky Glide V3 tem uma leitura mais esportiva e moderna, com camadas visuais fortes e sensação de leveza. É uma escolha para quem procura presença, conforto e um shape contemporâneo.",
    colorway: "Azul gelo / branco",
    category: "Performance casual",
    cushioning: "Respingo elástico",
    drop: "8 mm",
    tags: ["Novo", "Leve", "Destaque"],
  },
];

export function getSneakerBySlug(slug: string) {
  return sneakers.find((sneaker) => sneaker.slug === slug);
}