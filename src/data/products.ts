export interface Product {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    title: "Cartão de Visita",
    slug: "cartao-de-visita",
    excerpt: "Material com identidade visual profissional.",
    content:
      "Cartões de visita impressos em alta qualidade, com acabamento fosco ou brilhante, frente e verso, e opções de laminação. Personalizados com a identidade visual da sua empresa.",
    image: "https://images.unsplash.com/photo-1589041127168-9b1915731499?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Banner",
    slug: "banner",
    excerpt: "Banner para eventos e promoções.",
    content:
      "Banners em lona de alta resistência, impressão colorida em alta resolução. Ideal para eventos, fachadas, PDV e promoções. Disponível em diversos tamanhos.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Adesivo",
    slug: "adesivo",
    excerpt: "Adesivos recortados ou impressos para qualquer superfície.",
    content:
      "Adesivos em vinil com impressão digital de alta resolução. Recorte eletrônico, laminação UV e aplicação em vidros, paredes, veículos e muito mais.",
    image: "https://images.unsplash.com/photo-1618044619888-009e412ff12a?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Placa",
    slug: "placa",
    excerpt: "Placas em ACM, PVC e alumínio para identificação.",
    content:
      "Placas de identificação, sinalização e comunicação visual em ACM, PVC expandido e alumínio composto. Corte a laser e impressão digital.",
    image: "https://images.unsplash.com/photo-1635070040630-bfdfc8673ece?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Fachada",
    slug: "fachada",
    excerpt: "Projetos completos de fachada para seu estabelecimento.",
    content:
      "Desenvolvimento de projetos de fachada com letreiros, placas, iluminação e adesivos. Executamos do projeto à instalação, garantindo identidade visual impactante.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop&auto=format",
  },
  {
    title: "Letreiro",
    slug: "letreiro",
    excerpt: "Letras caixa e letreiros iluminados sob medida.",
    content:
      "Letras caixa em ACM com iluminação LED, neon flex e letreiros luminosos personalizados. Alta durabilidade e impacto visual garantido para o seu negócio.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop&auto=format",
  },
];
