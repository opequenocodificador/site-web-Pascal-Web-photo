const target = document.getElementById("target");
let array = ["Photographer", "Creative", "Professional"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();

//****************LIST ****************//
let lastScroll = 0;
const portraitAppear = document.getElementById("portrait-tittle");
window.addEventListener("scroll", () => {
  if (window.scrollY > 900) {
    portraitAppear.style.opacity = 1;
    portraitAppear.style.transform = "translateY(" + 15 + "px)";
  } else {
    window.scrollY < 800;
    portraitAppear.style.opacity = 0;
  }
});

const cityAppear = document.getElementById("city-tittle");
window.addEventListener("scroll", () => {
  if (window.scrollY > 900) {
    cityAppear.style.opacity = 1;
    cityAppear.style.transform = "translateY(" + 15 + "px)";
  } else {
    window.scrollY < 800;
    cityAppear.style.opacity = 0;
  }
});

//Faire un event lorsque on survol les mots portrait et city
//mettre un effet

/*const portrait = document.getElementById("portrait");
const city = document.getElementById("city");

const wordByWord = () => {
  const appearLetter = document.createElement("span");
  portrait.appendChild(appearLetter);
  setTimeout(() => {
    appearLetter.remove();
  }, 2800);
};

portrait.addEventListener("scroll", (e) => {
  loop;
});*/
