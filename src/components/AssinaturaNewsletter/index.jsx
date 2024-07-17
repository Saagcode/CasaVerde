import React from "react";
import style from "./newsletter.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import plant1 from "../../assets/images/plant1.png";

function index() {
  return (
    <section className={style.containerNews}>
      <div className={style.container_content}>
        <h3 style={{ fontWeight: "200", fontFamily: "MontSerrat, sans-serif" }}>
          Sua casa com as
        </h3>
        <h1
          style={{
            fontSize: "3em",
            margin: "0",
            fontFamily: "Elsie Swash Caps, sans-serif",
          }}
        >
          melhores <br />
          plantas
        </h1>
        <legend className={style.legendaContainer}>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </legend>
        <div className={style.emailInputContainer}>
          <span
            className="fa-regular fa-envelope"
            style={{ margin: "0 10px 0 10px", padding: "22px 0 0 0px" }}
          />
          <input
            type="email"
            placeholder="Insira seu E-mail"
            className={style.emailInput}
          />
          <button
            style={{
              width: "100%",
              backgroundColor: "#FFCB47",
              border: "none",
            }}
          >
            <h4
              style={{
                fontWeight: "400",
                margin: "0 25px",
                fontSize: "1em",
                fontFamily: "MontSerrat, sans-serif",
              }}
            >
              Assinar Newsletter
            </h4>
          </button>
        </div>
      </div>

      <img
        src={plant1}
        alt="planta1"
        style={{
          width: "40%",
          position: "absolute",
          right: "440px",
          bottom: "100px",
        }}
      />
    </section>
  );
}

export default index;
