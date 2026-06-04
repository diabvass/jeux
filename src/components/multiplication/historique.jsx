const historique = [];

class ClassHistorique {
  constructor(contenu, statut) {
    this.id = Date.now()
    this.contenu = contenu
    this.statut = statut
  }
}

export const Sauvegarde = (d,s) => {
  if (!d) return
  const p = new ClassHistorique(d,s)
  historique.push(p);
};

export function Histo() {
  let data = historique;
  return (
    <div>
      <ul style={{listStyle : 'none'}}>
        {data &&
          data.map((item) => (
            <li key={item.id} style={{color : item.statut ? 'green' : 'red'}}>{item.contenu}</li> 
          ))}
      </ul>
    </div>
  );
}
