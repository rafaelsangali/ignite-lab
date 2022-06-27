import { Atom } from "phosphor-react";

export function Placeholde(){
  return(
    <div className="flex-1 grid place-content-center">
      <Atom size={60} className="animate-pulse text-blue-500 mx-9 my-3" />
      <p> Aprendendo <strong>React</strong></p>
      <p className="mx-1.5">Da melhor forma</p>
    </div>
  )
}