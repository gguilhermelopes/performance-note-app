import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { ReactComponent as Forward } from "../img/arrowforward.svg";

const Home = () => {
  const [user, setUser] = React.useState("");

  function handleClick({ currentTarget, target }) {
    setUser(currentTarget.innerText);
  }

  return (
    <main className={`container ${styles.main}`}>
      <h1>Anotações de evolução</h1>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick}>Anderson</button>
        <button onClick={handleClick}>Guilherme</button>
      </div>
      <div className={styles.avancarWrapper}>
        {user ? (
          <Link to={`user/${user}`}>
            <button className={styles.avancar}>
              Avançar <Forward />
            </button>
          </Link>
        ) : (
          <h2>Selecione seu nome acima</h2>
        )}
      </div>
    </main>
  );
};

export default Home;
