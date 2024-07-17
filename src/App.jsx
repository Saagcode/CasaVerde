import { useState } from "react";
import style from "./App.module.css";
import Menu from "./components/Menu/index";
import NewsLetter from "./components/AssinaturaNewsletter/index";
import ComoConseguir from "./components/ComoConseguir/index";
import Ofertas from "./components/Ofertas/index";

function App() {
  return (
    <>
      <section className={style.containerMenu}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "0",
          }}
        >
          <Menu />
        </div>
        <NewsLetter />
        <ComoConseguir />
        <Ofertas />
      </section>
    </>
  );
}

export default App;
