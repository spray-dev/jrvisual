import { Link } from "react-router";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <>
      <section id="welcome">
        <header>
          <img src="/jrlogo2.webp" alt="JR Comunicação Visual" className="nav-logo" />
        </header>
        <p>
          Uma empresa familiar, construída com dedicação, confiança e compromisso em cada projeto
          desde 2014. Trabalhamos com gráfica e comunicação visual, buscando transformar ideias em
          soluções criativas e de qualidade para nossos clientes.
        </p>
      </section>

      <section id="latest-products">
        <h2>Principais Produtos</h2>
        <ul className="products-grid">
          {featured.map((p) => (
            <li key={p.slug} className="product-card">
              <Link to={`/produtos/${p.slug}`}>
                <img src={p.image} alt={p.title} className="product-img" />
                <div className="product-info">
                  <p className="product-name">{p.title}</p>
                  <p className="product-desc">{p.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="products-more">
          <Link to="/produtos" className="btn-outline">
            Ver todos os produtos <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      <section id="about">
        <div className="contact-header">
          <span className="contact-tag">Canais</span>
          <h2>Entre em Contato Conosco</h2>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card whatsapp"
            href="https://wa.me/5567992538084"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon"><i className="fa-brands fa-whatsapp"></i></span>
            <strong>WhatsApp</strong>
            <span>(67) 99253-8084</span>
          </a>

          <a
            className="contact-card instagram"
            href="https://instagram.com/jrcomunica"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon"><i className="fa-brands fa-instagram"></i></span>
            <strong>Instagram</strong>
            <span>@jrcomunica</span>
          </a>

          <div className="contact-card email">
            <span className="contact-icon"><i className="fa-regular fa-envelope"></i></span>
            <strong>E-mail</strong>
            <span>jrcomunicacaovisual@gmail.com</span>
          </div>
        </div>

        <div className="contact-meta-row">
          <div className="contact-meta-item">
            <span className="meta-icon"><i className="fa-solid fa-location-dot"></i></span>
            <div className="meta-text">
              <span className="meta-label">Endereço</span>
              <span className="meta-value">Rua Luiz Bento, 142 — Vila Popular, Campo Grande/MS</span>
            </div>
          </div>
          <div className="contact-meta-item">
            <span className="meta-icon"><i className="fa-solid fa-phone"></i></span>
            <div className="meta-text">
              <span className="meta-label">Telefone</span>
              <span className="meta-value">(67) 99253-8084</span>
            </div>
          </div>
        </div>

        <p className="contact-cta">
          Entre em contato com a JR Comunicação Visual e faça seu orçamento agora!
        </p>
      </section>
    </>
  );
}
