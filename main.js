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
    const top = section.getBoundingClientRect().y + window.scrollY;
    window.scrollTo({
      behavior: "smooth",
      top: top - 100,
    });
  }
};

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
          },
          {
            opacity: 1,
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

const sidebarContainer = document.querySelector("#sidebar");
const sidebarOpen = document.querySelector("#sidebar-open");
const sidebarClose = document.querySelector("#sidebar-close");
const sidebarMenu = document.querySelector("#sidebar-menu");

const animateToggleMenu = ({ open } = { open: true }) => {
  sidebarContainer.animate(
    [{ opacity: open ? 0 : 1 }, { opacity: open ? 1 : 0 }],
    {
      duration: 200,
    },
  );

  sidebarMenu.setAttribute("data-open", open);
  setTimeout(
    () => {
      sidebarContainer.classList.toggle("collapse");
    },
    open ? 0 : 150,
  );
};

sidebarContainer.addEventListener("click", () => {
  animateToggleMenu({
    open: false,
  });
  console.log("click container emited");
});

sidebarClose.addEventListener("click", (e) => {
  e.stopPropagation();
  animateToggleMenu({
    open: false,
  });
});

sidebarOpen.addEventListener("click", () => {
  animateToggleMenu();
});

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
