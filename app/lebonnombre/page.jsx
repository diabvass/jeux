
import {Header} from "../components/header"
import {Footer} from "../components/footer"
import {Main} from "../components/main"

const data = {
  titre: "LeBonNombre",
  description: "Indice",
  steps: [
    { step: "Fekir", label: "record" },
    { step: 4, label: "Essais" },
    { step: "1min : 20s", label: "Temps" },
  ]
}

export default function LeBonNombre(){
  return (
    <div className="d-flex vh-100">
      <div
        style={{
          background: "var(--fond)",
          borderLeft: "2px solid var(--blue)",
        }}
        className="w-100 d-flex flex-column"
      >
      <Header titre={data.titre} description={data.description} steps={data.steps} />
      <Main />
      <Footer jeu="commencer" page="lebonnombre"/>
      
      </div>
    </div>
  )
}