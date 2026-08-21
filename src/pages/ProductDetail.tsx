import { useParams, Link } from "react-router";
import { PRODUCTS } from "@/data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section className="not-found">
        <h2>Produto não encontrado</h2>
        <Link to="/produtos" className="btn-outline">
          <i className="fa-solid fa-arrow-left"></i> Voltar aos produtos
        </Link>
      </section>
    );
  }

  return (
    <section id="product-detail">
      <div className="product-detail__back">
        <Link to="/produtos" className="back-link">
          <i className="fa-solid fa-arrow-left"></i> Voltar
        </Link>
      </div>
      <div className="product-detail__inner">
        <div className="product-detail__img-wrap">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-detail__body">
          <h2>{product.title}</h2>
          <p className="product-detail__excerpt">{product.excerpt}</p>
          <p className="product-detail__content">{product.content}</p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i> Pedir orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
