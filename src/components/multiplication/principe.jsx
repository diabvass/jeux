// Affiche les règles du jeu dans une modal Bootstrap.
import { Modals } from "../../modale";
const btn = "Ici";
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
      <Modals nomBtn={btn} titre={titre} body={body} />
    </>
  );
}
