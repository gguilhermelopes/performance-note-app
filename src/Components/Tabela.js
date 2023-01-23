import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../Hooks/GlobalContext";
import styles from "./Tabela.module.css";
import exercicios from "../exercicios.json";
import { DownloadTableExcel } from "react-export-table-to-excel";

const Tabela = () => {
  const { treino, name } = useParams();
  const { ex, setEx } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const tableRef = useRef(null);
  const exerciciosFiltro = exercicios.filter((i) => {
    return i.nomeTreino === treino;
  });
  const date = new Date().toLocaleDateString("pt-br").replaceAll("/", "_");

  React.useEffect(() => {
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
  }, [setEx]);

  return (
    <section className={`container`}>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        Voltar
      </button>
      <h1>{treino && treino}</h1>
      <h2 className={styles.name}>{name && name}</h2>
      <div className={styles.tableWrapper}>
        <table ref={tableRef} className={styles.table}>
          <thead>
            <tr className={styles.tableName}>
              <td>Exercícios</td>
              <td colSpan={5}>Séries</td>
            </tr>
          </thead>
          <tbody>
            {exerciciosFiltro[0].treino.map((exercicio, index) => (
              <tr key={exercicio.nome}>
                <td>{exercicio.nome}</td>
                {exercicio.series.map((serie, indexSerie) => (
                  <td key={`exercicio${+index + 1}Serie${+indexSerie + 1}`}>{`
                  ${ex[index][indexSerie] ? `${ex[index][indexSerie]} kg` : ""}
                `}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DownloadTableExcel
        filename={`${name}_${treino.replaceAll(" ", "_")}`}
        sheet={`${date}`}
        currentTableRef={tableRef.current}
      >
        <div className={styles.downloadWrapper}>
          <button>Exportar para Excel</button>
        </div>
      </DownloadTableExcel>
    </section>
  );
};

export default Tabela;
