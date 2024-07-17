import React from "react";
import style from "./menu.module.css";
import logo from "../../assets/images/logo.svg";

function index() {
  return (
    <section className={style.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <img src={logo} alt="logoCasaVerde" />
      </div>
      <nav>
        <div>
          <ul className={style.content}>
            <li>
              <h3>Como Fazer</h3>
            </li>
            <li>
              <h3>
                <span>/</span>
                Ofertas
              </h3>
            </li>
            <li>
              <h3>
                <span>/</span>
                Depoimentos
              </h3>
            </li>
            <li>
              <h3>
                <span>/</span>
                Videos
              </h3>
            </li>
            <li>
              <h3>
                <span>/</span>
                Meu carrinho
              </h3>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default index;
