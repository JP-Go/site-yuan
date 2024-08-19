import {
  createIcons,
  Handshake,
  Star,
  Gem,
  BookOpenCheck,
  Hammer,
  Ruler,
  Notebook,
  LibraryBig,
  Map,
  ArrowUp,
} from "lucide";

createIcons({
  icons: {
    Handshake,
    Star,
    Gem,
    BookOpenCheck,
    Hammer,
    Ruler,
    Notebook,
    Map,
    LibraryBig,
    ArrowUp,
  },
});

import "./components/Card";

document.querySelector("#fab-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const metodologySection = document.querySelector("#metodologia");
metodologySection.getBoundingClientRect().y == 0;
window.addEventListener("scroll", () => {
  if (metodologySection.getBoundingClientRect().y <= 200) {
    document.querySelector("#fab-to-top").classList.remove("opacity-0");
  } else {
    if (
      !document.querySelector("#fab-to-top").classList.contains("opacity-0")
    ) {
      document.querySelector("#fab-to-top").classList.add("opacity-0");
    }
  }
});
