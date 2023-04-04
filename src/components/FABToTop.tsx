import { ArrowUp } from "phosphor-react";

export function FABToTop(){
  return <button type="button" className="fixed right-2 bottom-2 text-primary" >
    <ArrowUp size={20}/>
    <span>Ir para o topo</span>
  </button>
}