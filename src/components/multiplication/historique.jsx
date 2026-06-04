const historiques = [];

class ClassHistorique {
  constructor(contenu, statut) {
    this.id = Date.now();
    this.contenu = contenu;
    this.statut = statut;
  }
}

export const Sauvegarde = (d, s) => {
  if (!d) return;
  const p = new ClassHistorique(d, s);
  historiques.push(p);
};

export function Historique() {
  let data = historiques;
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {data && data.length > 0
          ? data.map((item) => (
              <li
                key={item.id}
                style={{ color: item.statut ? "green" : "red" }}
              >
                {item.contenu}
              </li>
            ))
          : "Historique vide"}
      </ul>
    </div>
  );
}
