import "./App.css";
import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    api
      .get("/")

      .then((response) => setData(response.data))

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Sigla</th>
            <th>Disciplina</th>
            <th>Periodo</th>
            <th>Carga Horária</th>
            <th>Tipo de disciplina</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data ? (
                <>
                  {" "}
                  {data.data.map((item, index) => {
                    return <p>{item?.id_disciplina}</p>;
                  })}{" "}
                </>
              ) : null}
            </td>
            <td>
              {data ? (
                <>
                  {" "}
                  {data.data.map((item, index) => {
                    return <p>{item?.tx_sigla}</p>;
                  })}{" "}
                </>
              ) : null}
            </td>
            <td>
              {data ? (
                <>
                  {" "}
                  {data.data.map((item, index) => {
                    return <p>{item?.tx_descricao}</p>;
                  })}{" "}
                </>
              ) : null}
            </td>
            <td>
              {data ? (
                <>
                  {" "}
                  {data.data.map((item, index) => {
                    return <p>{item?.in_periodo}</p>;
                  })}{" "}
                </>
              ) : null}
            </td>
            <td>
            {data ? (
                <>
                  {" "}
                  {data.data.map((item, index) => {
                    return <p>{item?.in_carga_horaria}</p>;
                  })}{" "}
                </>
              ) : null}
            
            </td>
            <td>
            {data ? (
                <>
                  {" "}
                  {data.data.map((item, index) => {
                    return <p>{item?.id_tipo_disciplina}</p>;
                  })}{" "}
                </>
              ) : null}
            
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// Endereços da API que podem ser utilizados
// https://pcn662vet2.execute-api.us-east-1.amazonaws.com/dev/professor
// https://pcn662vet2.execute-api.us-east-1.amazonaws.com/dev/disciplina
// https://pcn662vet2.execute-api.us-east-1.amazonaws.com/dev/curso
