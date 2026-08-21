import { Link } from "react-router";
import { PRODUCTS } from "@/data/products";

export default function AllProducts() {
  return (
    <section id="all-products">
      <h2>Nossos Artigos</h2>
      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.slug} className="product">
            <Link to={`/produtos/${p.slug}`}>
              <img src={p.image} alt={p.title} />
              <div className="product__content">
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
