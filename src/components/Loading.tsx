import { CircleNotch } from "phosphor-react";


export function Loading(){
  return (
    <div className=" flex-1 grid place-content-center">
        <CircleNotch size={60}weight="bold" className="animate-spin" />
    </div>
  )
}