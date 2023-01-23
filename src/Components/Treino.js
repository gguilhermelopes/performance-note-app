import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../Hooks/GlobalContext";
import styles from "./Treino.module.css";
import exercicios from "../exercicios.json";

const Treino = () => {
  const { treino, name } = useParams();
  const { ex, setEx, setMuscularGroup } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    setMuscularGroup(treino);
    const data = JSON.parse(window.localStorage.getItem("exercicios"));
    if (data) {
      setEx(data);
      data.forEach((item, index) =>
        item.forEach((input, indexInput) => {
          const field = document.getElementById(
            `exercicio${+index + 1}Serie${+indexInput + 1}`
          );
          if (field && typeof input === "string") {
            field.value = input;
          }
        })
      );
    }
  }, [setEx, setMuscularGroup, treino]);

  function handleChange({ target }, index, indexSerie) {
    let data = [...ex];
    data[index][indexSerie] = target.value;
    setEx(data);
    window.localStorage.setItem("exercicios", JSON.stringify(data));
  }

  const exerciciosFiltro = exercicios.filter((i) => {
    return i.nomeTreino === treino;
  });

  return (
    <section className={`${styles.treinos} container`}>
      <button onClick={() => navigate(-1)} className={styles.voltar}>
        Voltar
      </button>
      <h1>{treino && treino}</h1>
      <h2 className={styles.name}>{name && name}</h2>
      <form className={styles.formulario}>
        {exerciciosFiltro[0].treino.map((exercicio, index) => (
          <div key={exercicio.nome} className={styles.form}>
            <h2>{exercicio.nome}</h2>
            {exercicio.series.map((serie, indexSerie) => (
              <div key={`exercicio${+index + 1}Serie${+indexSerie + 1}`}>
                <label
                  htmlFor={`exercicio${+index + 1}Serie${+indexSerie + 1}`}
                >{`${+indexSerie + 1}ª série (${
                  serie[`serie${+indexSerie + 1}`]
                })`}</label>
                <input
                  id={`exercicio${+index + 1}Serie${+indexSerie + 1}`}
                  type="number"
                  name={`${index + 1}${indexSerie + 1}`}
                  value={serie[indexSerie]}
                  onChange={(event) => handleChange(event, index, indexSerie)}
                />
              </div>
            ))}
          </div>
        ))}
      </form>
      <div className={styles.buttonWrapper}>
        <Link to={`/user/${name}/${treino}/tabela`}>
          <button>Avançar</button>
        </Link>
      </div>
    </section>
  );
};

export default Treino;
