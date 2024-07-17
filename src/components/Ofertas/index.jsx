import React from "react";
import style from "./ofertas.module.css";
import Ajuga_reptans from "../../assets/images/Ajuga_reptans.png";

function index() {
  return (
    <>
      <div className={style.container}>
        <h3
          style={{
            fontFamily: "MontSerrat, sans-serif",
            fontWeight: "400",
            fontSize: "1rem",
            marginTop: "30px",
          }}
        >
          Conheça nossas
        </h3>
        <h1
          style={{
            fontFamily: "Elsie Swash Caps, sans-serif",
            fontSize: "4rem",
            margin: "0",
          }}
        >
          ofertas
        </h1>
        <div className={style.gridOfertas}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={style.item}>
              <div className={style.containerImg1}></div>
              <div className={style.textContent}>
                <h1>Ajuga reptans</h1>
                <h3>R$ 20,00</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <button className={style.buttonBuy}>Comprar</button>{" "}
                  <span
                    className="fa-solid fa-arrow-right"
                    style={{
                      color: "#ffcb47",
                      padding: "0",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.containerImg2}></div>
              <div className={style.textContent}>
                <h1>Cordyline fruticosa</h1>
                <h3>R$ 20,00</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <button className={style.buttonBuy}>Comprar</button>{" "}
                  <span
                    className="fa-solid fa-arrow-right"
                    style={{
                      color: "#ffcb47",
                      padding: "0",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.containerImg3}></div>
              <div className={style.textContent}>
                <h1>Crassula ovata</h1>
                <h3>R$ 20,00</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <button className={style.buttonBuy}>Comprar</button>{" "}
                  <span
                    className="fa-solid fa-arrow-right"
                    style={{
                      color: "#ffcb47",
                      padding: "0",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={style.item}>
              <div className={style.containerImg4}></div>
              <div className={style.textContent}>
                <h1>Cyperus rotundus</h1>
                <h3>R$ 20,00</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <button className={style.buttonBuy}>Comprar</button>{" "}
                  <span
                    className="fa-solid fa-arrow-right"
                    style={{
                      color: "#ffcb47",
                      padding: "0",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.containerImg5}></div>
              <div className={style.textContent}>
                <h1>Delairea odorata</h1>
                <h3>R$ 20,00</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <button className={style.buttonBuy}>Comprar</button>{" "}
                  <span
                    className="fa-solid fa-arrow-right"
                    style={{
                      color: "#ffcb47",
                      padding: "0",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.containerImg6}></div>
              <div className={style.textContent}>
                <h1>Datura metel</h1>
                <h3>R$ 20,00</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <button className={style.buttonBuy}>Comprar</button>{" "}
                  <span
                    className="fa-solid fa-arrow-right"
                    style={{
                      color: "#ffcb47",
                      padding: "0",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
