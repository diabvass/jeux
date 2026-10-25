"use client"

import { Badge, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import { questions } from "./Compte.jsx";
import { Header } from "@/app/components/header.jsx"
import { Main } from "@/app/components/main.jsx"
import { Footer } from "@/app/components/footer.jsx"


export default function Multiplication () {
  let [multi, setMulti] = useState(() => questions());
  let [gain, setGain] = useState(0);
  let [perte, setPerte] = useState(0);
  let [point, setPoint] = useState(0);
  const [enjeu, setEnJeu] = useState(false);
  const [clique, setClique] = useState(null);
  const time = useRef(null);
    
  // les données du jeu
  const data = {
  titre: "Multiplication",
  description: "Testez vos connaissances en multiplication !",
  steps: [
    { step: gain, label: "Gagnez" },
    { step: perte, label: "Perdu" },
    { step: point, label: "Points" },
  ]
}



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

  // si le jeu est en cours
  const verifier = (c, i) => {
    let s = false;
    if (clique !== null || !enjeu) return;

    clearTimeout(time.current);
    setClique(i);

    if (c === multi.reponse) {
      setGain((e) => e + 1);
      setPoint((e) => e + 2);
      s = true;
    } else {
      setPerte((e) => e + 1);
      setPoint((e) => e - 4);
    }
    
    time.current = setTimeout(() => {
      setClique(null);
      setMulti(questions());
    }, 500);
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
        <Header steps={data.steps} titre={data.titre} description={data.description} />
        
        <Main>
          
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
        </Main>
        

        <Footer recommncer={recommencer} jeu={enjeu ? "Recommencer" : "Top c'est parti"} page="multiplication" />
      </div>
    </div>
  );
};
