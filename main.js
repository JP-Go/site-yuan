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
  Mails,
  Map,
  ArrowUp,
  PhoneCall,
  X,
  Menu,
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
    PhoneCall,
    Mails,
    X,
    Menu,
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

window.onhashchange = () => {
  const hash = window.location.hash;
  const section = document.querySelector(hash);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

const diferentialsBackdrop = document.querySelector("#diferenciais-backdrop");

const diferentialsList = document.querySelector("#diferenciais-list");
Array.from(diferentialsList.children).forEach((child, index) => {
  child.addEventListener("click", () => {
    Array.from(diferentialsList.children).forEach((child) => {
      child.setAttribute("data-active", "false");
    });
    child.setAttribute("data-active", "true");

    const content = document.querySelector("#diferenciais-content");
    Array.from(content.children).forEach((c) => {
      c.lastElementChild.animate(
        [
          {
            opacity: 0,
            transform: "translate(50%,-40px)",
          },
          {
            opacity: 100,
            transform: "translate(0%,-40px)",
          },
        ],
        {
          easing: "ease",
          duration: 500,
          fill: "forwards",
        },
      );
      c.setAttribute("data-active", "false");
    });
    content.children[index].setAttribute("data-active", "true");
  });
});
