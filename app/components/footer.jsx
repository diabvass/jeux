"use client"
import {Principe} from "./principe"
import {Button} from "react-bootstrap" 
export function Footer({
  jeu, page, recommncer
}){
  
  return (
    <div className="controls flex-grow-1">
      <div className="d-flex justify-content-center gap-2">
        <Button className="control-btn" onClick={recommncer} style={{ background: "var(--accent)" }}>{jeu}</Button>
          </div>
          <div className="text-start small mt-5">
            <Principe page={page} />
          </div>
    </div>
  )
}