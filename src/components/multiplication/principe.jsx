// Affiche les règles du jeu dans une modal Bootstrap et l'historique.
import { Historique } from "./historique";
import { Modals } from "../../modale";
const btn = "Principe de jeu";
const titre = "Comment sont notés les réponses";

function body() {
  return (
    <div>
      Deux nombres aléatoires sont donnés, dont vous devrez trouver le résultat
      de leur multiplication. <br /> Bonne réponse : 4pts
      <br />
      Mauvaise réponse -2pts <br />
      Aucune réponse : -1pt;
    </div>
  );
}
export function Principe() {
  return (
    <>
      <div className="d-flex gap-3">
        <Modals nomBtn={btn} titre={titre} body={body} />
        <Modals nomBtn="historique" titre="historique" body={Historique} />
      </div>
    </>
  );
}
