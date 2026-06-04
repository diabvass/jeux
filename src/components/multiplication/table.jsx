import { Badge, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import { questions } from "./Compte.jsx";
import { Principe } from "./principe.jsx";
import { Sauvegarde } from "./historique.jsx";
export const Multiplication = () => {
  let [multi, setMulti] = useState(() => questions());
  let [gain, setGain] = useState(0);
  let [perte, setPerte] = useState(0);
  let [point, setPoint] = useState(0);
  const [enjeu, setEnJeu] = useState(false);

  const [clique, setClique] = useState(null);
  const time = useRef(null);

  const getCouleur = (c, i) => {
    if (clique === null) return "transparent"; // pas encore cliqué
    if (i === clique) {
      if (c === multi.reponse) return "green"; // vert si bonne réponse
      return "red"; // rouge mauvaise réponse
    }
    return "transparent"; // les autres
  };
  const recommencer = () => {
    setGain(0);
    setPerte(0);
    setPoint(0);
    setClique(null);
    setMulti(questions());
    setEnJeu(true);
  };
  const verifier = (c, i) => {
    let s = false
    if (clique !== null || !enjeu) return;

    clearTimeout(time.current);
    setClique(i);


    if (c === multi.reponse) {
      setGain((e) => e + 1);
      setPoint((e) => e + 2);
      s = true
    } else {
      setPerte((e) => e + 1);
      setPoint((e) => e - 4);
    }
    let sauver = `${multi.m} × ${multi.n} = ${c}`
    Sauvegarde(sauver,s)
    time.current = setTimeout(() => {
      setClique(null);
      setMulti(questions());
    }, 1200);
  };

  return (
    <div className="d-flex vh-100">
      <div
        style={{
          background: "var(--fond)",
          borderLeft: "2px solid var(--blue)",
        }}
        className="w-100 d-flex flex-column"
      >
        <div
          style={{
            background: "var(--blue)",
            borderBottom: "2px solid var(--accent)",
          }}
          className="text-center p-2"
        >
          <h1 style={{ color: "var(--accent)" }} className="mb-3">
            Mathématiques
          </h1>
          <p>Je connais ma table de multiplication</p>
          <div className="d-flex justify-content-around mt-2">
            <div>
              <div style={{ color: "var(--accent)" }} className="fs-4 fw-bold">
                {gain}
              </div>
              <div className="small">Bonne réponse</div>
            </div>
            <div>
              <div style={{ color: "var(--accent)" }} className="fs-4 fw-bold">
                {perte}
              </div>
              <div className="small">Mauvaise réponse</div>
            </div>
            <div>
              <div style={{ color: "var(--accent)" }} className="fs-4 fw-bold">
                {point}
              </div>
              <div className="small">Points</div>
            </div>
          </div>
        </div>
        <div className="place m-1 flex-grow-1 overflow-y-auto p-3">
          Temps :{" "}
          <Badge bg="secondary" className="p-1">
            10
          </Badge>
          <div className="mt-3 text-light text-center">
            {enjeu ? (
              <>
                <Badge bg="" className="p-0 m-4 text-center fs-4">
                  {multi ? `${multi.m} × ${multi.n}` : ""}
                </Badge>

                <div className="d-flex justify-content-center gap-2">
                  {multi.choix.map((c, i) => (
                    <Button
                      key={i}
                      onClick={() => verifier(c, i)}
                      style={{
                        height: "80px",
                        width: "200px",
                        borderColor: "var(--accent)",
                        background: getCouleur(c, i),
                      }}
                      className="text-light fw-bold text-center fs-3"
                    >
                      {c}
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-5 text-center text-light fs-5">
                Clique sur "Top c'est parti" pour commencer
              </div>
            )}
          </div>
        </div>

        <div className="controls flex-grow-1">
          <div className="d-flex justify-content-center gap-2">
            <Button className="control-btn" onClick={recommencer}>
              {enjeu ? "Recommencer" : "Top c'est parti !"}
            </Button>
          </div>
          <div className="text-start small mt-5">
            Voir le principe de jeu <Principe />
          </div>
        </div>
      </div>
    </div>
  );
};
