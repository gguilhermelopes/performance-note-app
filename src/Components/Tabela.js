import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../Hooks/GlobalContext";
import styles from "./Tabela.module.css";

const Tabela = () => {
  const { treino, name } = useParams();
  const { ex, setEx } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <section className={`container`}>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <h1>{treino && treino}</h1>
      <h2 className={styles.name}>{name && name}</h2>
    </section>
  );
};

export default Tabela;
