import React from "react";
import style from "./comoconseguir.module.css";

function index() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          backgroundColor: "#fff",
          margin: "auto",
          position: "relative",
          top: "220px",
          width: "50%",
          padding: "0",
          alignItems: "center",
          borderRadius: "2px",
          boxShadow: "3px 3px 15px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <section className={style.gridPlant2}>
          <h3
            style={{
              margin: "25px 0 0 0",
              fontFamily: "MontSerrat, sans-serif",
              fontWeight: "400",
            }}
          >
            Como conseguir
          </h3>
          <h1
            style={{
              margin: "8px 0 10px 0",
              fontFamily: "Elsie Swash Caps, sans-serif",
            }}
          >
            minha planta
          </h1>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              marginTop: "0",
            }}
          >
            <li>
              <span
                className="fa-solid fa-circle"
                style={{ color: "#ffcb47", fontSize: "1.7em" }}
              />{" "}
              <h3
                style={{
                  position: "relative",
                  top: "8px",
                  fontFamily: "MontSerrat, sans-serif",
                  fontWeight: "400",
                  fontSize: "1rem",
                }}
              >
                Escolha suas plantas
              </h3>
            </li>
            <li>
              <span
                className="fa-solid fa-circle"
                style={{ color: "#ffcb47", fontSize: "1.7em" }}
              />{" "}
              <h3
                style={{
                  position: "relative",
                  top: "8px",
                  fontFamily: "MontSerrat, sans-serif",
                  fontWeight: "400",
                  fontSize: "1rem",
                }}
              >
                Faça seu pedido
              </h3>
            </li>
            <li>
              <span
                className="fa-solid fa-circle"
                style={{ color: "#ffcb47", fontSize: "1.7em" }}
              />{" "}
              <h3
                style={{
                  position: "relative",
                  top: "8px",
                  fontFamily: "MontSerrat, sans-serif",
                  fontWeight: "400",
                  fontSize: "1rem",
                }}
              >
                Aguarde na sua casa
              </h3>
            </li>
          </ul>
        </section>
        <div className={style.containerPlant2}></div>
      </div>
    </>
  );
}

export default index;
