const navigationListe = document.querySelector(".navigation-liste");
const container = document.querySelector(".container");
const btnMobileNav = document.querySelector(".btn-Mobile-Nav");
const mobilNav = document.querySelector(".service-navigation");
const jahre = document.querySelector(".year");

const datum = new Date();
// Function////////////////

// add scroll
const scrollInto = function (btn, service) {
  btn.addEventListener("click", () => {
    mobilNav.classList.toggle("open");
    service.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
};

// ändert flexDirection zu column
const flexDirectionColumn = function (TARGET) {
  container.children[TARGET].classList.replace(
    "display-flex",
    "display-flex--column"
  );
};

// ändert  flexDirection zu row
const displayFlex = function (TARGET) {
  container.children[TARGET].classList.replace(
    "display-flex--column",
    "display-flex"
  );
};

// EventListener////////////////

// hinzüfügen von Mobil NAV
btnMobileNav.addEventListener("click", () => {
  mobilNav.classList.toggle("open");
});
// select navigation btns and service
for (let i = 0; i < 6; i++) {
  scrollInto(navigationListe.children[i].children[0], container.children[i]);
}

////////////////////////////////////////////////////////////////

// Innere fensterbreite wird aussgelesen
window.addEventListener("resize", () => {
  if (window.innerWidth < 1200) {
    flexDirectionColumn(1);
    flexDirectionColumn(3);
    flexDirectionColumn(4);
  } else {
    displayFlex(1);
    displayFlex(3);
    displayFlex(4);
  }

  if (window.innerWidth < 1050) {
    flexDirectionColumn(2);
  } else {
    displayFlex(2);
  }
});
// DATUM
jahre.innerHTML = datum.getFullYear();
