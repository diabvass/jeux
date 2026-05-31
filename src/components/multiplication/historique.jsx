const historique = [] 

export const Sauvegarde = (d) => {
  if (d) historique.push(d)
  return historique
}