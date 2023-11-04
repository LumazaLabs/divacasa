const menuBtn = document.getElementById("menu-btn");
const exitBtn = document.getElementById("exit-btn");
const menu = document.getElementById("menu");
const middleChild = document.querySelector("#menu-btn :nth-child(2");
const logo = document.getElementById("logo");
const menuText = document.querySelectorAll(".menu-text");

// menuBtn.addEventListener("click", () => {
//   if (menu.classList.contains("hidden")) {
//     // menu.classList.remove("hidden");
//     menuToggle();
//     logo.src = "assets/logo-white.png";
//     menuBtn.firstElementChild.classList.add("rotate-45");
//     middleChild.classList.add("hidden");
//     menuBtn.lastElementChild.classList.add("-rotate-45");
//   } else {
//     // menu.classList.add("hidden");
//     menuToggle();
//     logo.src = "assets/logo.png";
//     menuBtn.firstElementChild.classList.remove("rotate-45");
//     middleChild.classList.remove("hidden");
//     menuBtn.lastElementChild.classList.remove("-rotate-45");
//   }
// });

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("-top-[900px]")) {
    // menu.classList.remove("hidden");
    menu.classList.remove("-top-[900px]");
    menu.classList.add("top-0");
    logo.src = "assets/logo-white.png";
    menuBtn.firstElementChild.classList.add("rotate-45");
    middleChild.classList.add("hidden");
    menuBtn.lastElementChild.classList.add("-rotate-45");
  } else {
    // menu.classList.add("hidden");
    // menuToggle();
    menu.classList.remove("top-0");
    menu.classList.add("-top-[900px]");
    logo.src = "assets/logo.png";
    menuBtn.firstElementChild.classList.remove("rotate-45");
    middleChild.classList.remove("hidden");
    menuBtn.lastElementChild.classList.remove("-rotate-45");
  }
});

menuText.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("top-0");
    menu.classList.add("-top-[900px]");
    logo.src = "assets/logo.png";
    menuBtn.firstElementChild.classList.remove("rotate-45");
    middleChild.classList.remove("hidden");
    menuBtn.lastElementChild.classList.remove("-rotate-45");
  });
});

function menuToggle() {
  menu.classList.toggle("hidden");
}

/* ------- HEADER ------- */

const headerProducts = [
  {
    title: "Gunter",
    collection: "Pendant Lights",
    src: "assets/gunter.webp",
  },
  {
    title: "Jungle",
    collection: "Wall Lights",
    src: "assets/jungle.webp",
  },
  {
    title: "Gardena",
    collection: "Floor Lamps",
    src: "assets/gardena.webp",
  },
  {
    title: "Prato",
    collection: "Magnetic Track",
    src: "assets/prato.webp",
  },
  {
    title: "Lecco",
    collection: "Spotlights",
    src: "assets/lecco.webp",
  },
];

const totalProducts = headerProducts.length - 1;
Title = "#title";
collection = "#collection";
src = "#src";
let num = -1;
let choice = 0;

window.addEventListener("load", () => {
  num = Math.floor(Math.random() * totalProducts);
  console.log("hsd");
});

menuBtn.addEventListener("click", () => {
  if (choice == 0) {
    num < totalProducts ? num++ : (num = 0);
    console.log(num);

    document.querySelector("#title").textContent = headerProducts[num].title;
    document.querySelector("#collection").textContent =
      headerProducts[num].collection;
    document.querySelector("#src").src = headerProducts[num].src;
    choice++;
  } else {
    choice = 0;
  }
});
