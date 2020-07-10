import { card, icons, createHabit } from "./template.js";

const burst = new mojs.Burst({
    top: "0%",
    left: "0%",
    count: 10,
    children: {
        shape: 'zigzag',
        fill: 'black'
    }
});

const container = document.querySelector(".container");
for (let i = 0; i < 10; i++) {
  const iconKeys = Object.keys(icons),
    icon = icons[iconKeys[i % iconKeys.length]];

  const _card = card({
    icon,
    title: "Workout",
    description: "Did you do this?",
  });
  container.innerHTML += _card;
}

// Button click burst
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    burst.tune({ x: e.pageX, y: e.pageY }).replay();
  });
});

//Label text animation
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        document.querySelector('label[for=' + e.target.name + ']').classList.add('moved__label');
    });
    input.addEventListener('focusout', (e) => {
        if (e.target.value)
            return
        document.querySelector('label[for=' + e.target.name + ']').classList.remove('moved__label');
    });
});

// add button

const addBtn = document.querySelector('.add__btn');

addBtn.addEventListener('click', function(e) {
    this.querySelector('img').classList.toggle('rotate-45');
})