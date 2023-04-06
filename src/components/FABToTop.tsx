import { ArrowUp } from "phosphor-react";

export function FABToTop() {
  return (
    <button
      type="button"
      className="flex fixed right-2 bottom-2 z-30 gap-1 p-1 h-8 rounded-full transition-all text-primary bg-yuan-yellow active:scale-90"
      onClick={() => {
        window.scrollTo({
          behavior: "smooth",
          top: 0,
        });
      }}
    >
      <ArrowUp size={20} className="m-auto" /> Ir para o topo
    </button>
  );
}
