import { Link } from "react-router";
import { PRODUCTS } from "@/data/products";
import logo from "@/imports/JRLOGO2.png";

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <>
      <section id="welcome">
        <header>
          <img src={logo} alt="JR Comunicação Visual" className="welcome-logo" />
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
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon"><i className="fa-brands fa-whatsapp"></i></span>
            <strong>WhatsApp</strong>
            <span>(11) 99999-9999</span>
          </a>

          <a
            className="contact-card instagram"
            href="https://instagram.com/jrcomunicacaovisual"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon"><i className="fa-brands fa-instagram"></i></span>
            <strong>Instagram</strong>
            <span>@jrcomunicacaovisual</span>
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
              <span className="meta-value">Rua Exemplo, 123 — Centro, São Paulo/SP</span>
            </div>
          </div>
          <div className="contact-meta-item">
            <span className="meta-icon"><i className="fa-solid fa-phone"></i></span>
            <div className="meta-text">
              <span className="meta-label">Telefone</span>
              <span className="meta-value">(11) 3333-4444</span>
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
