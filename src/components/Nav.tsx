import { NavLink } from "react-router";
import logo from "../imports/jrlogo2.png";

export default function Nav() {
  return (
    <header id="main-navigation">
      <div className="nav-inner">
        <NavLink to="/">
          <img src={logo} alt="JR Comunicação Visual" className="nav-logo" />
        </NavLink>
        <nav className="nav-links-wrap">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">Sobre Nós</NavLink>
            </li>
            <li>
              <NavLink to="/#about" className="nav-cta">
                <i className="fa-solid fa-comment-dots"></i> Orçamento
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
