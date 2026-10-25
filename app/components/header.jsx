export function Header({ titre, description, steps}){

  return (
    <div style={{ background: "var(--blue)", borderBottom: "2px solid var(--accent)" }} className="text-center p-2">
      <h1 style={{ color: "var(--accent)" }} className="mb-3">
        {titre}
      </h1>
      <p style={{ color: "var(--text)"}}>{description}</p>

      <div style={{ color: "var(--accent)" }} className="d-flex justify-content-around mt-2 fw-bold">
        {steps.map((s, i) => (
          <div key={i}>
            <div >
              {s.step}
            </div>
            <div className="small">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}