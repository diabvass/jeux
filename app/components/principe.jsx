import { Modals } from "./modal";

const data = {
  "multiplication": {
    titre: "Comment sont notés les réponses",
    contenu: (
      <>
        <p>Vous avez 5 sécondes pour répondre</p>
        <p>Vert : Bonne réponse +2</p>
        <p>Rouge : Mauvaise réponse -4</p>
        <p>Aucune réponse  -1pt</p>
      </>
    )
  },
  "lebonnombre": {
    titre: "Principe de jeu",
    contenu: (
      <>
        <p>1. L'ordinateur choisit un nombre entre 1 et 100.</p>
        <p>2. Vous avez un indice pour le nombre</p>
        <p>3. Vous proposez un nombre.</p>
        <p>4. On vous dit <b>Trop grand</b> ou <b>Trop petit</b>.</p>
        <p>5. Le but : trouver en le moins d'essais possible.</p>
      </>
    )
  }
}

export function Principe({ page = "lebonnombre" }) {
  const info = data[page];
  // règles
  const body = () => {
    return <div> {info.contenu} </div> 
  }

  return (
    <>
      <div className="d-flex gap-3">
        <Modals 
          nomBtn="Principe de jeu" 
          titre={info.titre} 
          body={body} 
        />
      </div>
    </>
  );
}