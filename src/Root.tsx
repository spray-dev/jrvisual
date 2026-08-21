import { Outlet, ScrollRestoration } from "react-router";
import Nav from "@/components/Nav";

export default function Root() {
  return (
    <div style={{ minHeight: "100vh", background: "#110E17" }}>
      <ScrollRestoration />
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer>
        © {new Date().getFullYear()} JR Comunicação Visual — Todos os direitos reservados
      </footer>
    </div>
  );
}
