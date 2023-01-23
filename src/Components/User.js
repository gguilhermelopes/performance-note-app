import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./User.module.css";
import { ReactComponent as Forward } from "../img/arrowforward.svg";
import { GlobalContext } from "../Hooks/GlobalContext";

const User = () => {
  const { name } = useParams();
  const [treino, setTreino] = React.useState("");
  const { setEx, muscularGroup } = React.useContext(GlobalContext);

  function clearState() {
    if (treino !== muscularGroup) {
      setEx([[], [], [], [], [], [], [], [], [], []]);
      window.localStorage.clear();
    }
  }

  function handleClick({ currentTarget }) {
    setTreino(currentTarget.innerText);
  }

  return (
    <section className={`${styles.user} container`}>
      {name && <h1>{name}</h1>}
      <div className={styles.treinosWrapper}>
        <button onClick={handleClick}>Peito, bíceps e ombro</button>
        <button onClick={handleClick}>Perna completa</button>
        <button onClick={handleClick}>Costas e tríceps</button>
      </div>
      <div className={styles.avancarWrapper}>
        {treino ? (
          <Link onClick={clearState} to={`/user/${name}/${treino}`}>
            <button onClick={clearState} className={styles.avancar}>
              Avançar <Forward />
            </button>
          </Link>
        ) : (
          <h2>Treino do dia</h2>
        )}
      </div>
    </section>
  );
};

export default User;
