let text = document.querySelector("#text");
let button1 = document.querySelector("#add-Btn1");
let button2 = document.querySelector("#add-Btn2");
let button3 = document.querySelector("#add-Btn3");

let sm = document.querySelector("#sm");
let md = document.querySelector("#md");
let lg = document.querySelector("#lg");

let son1 = document.querySelector("#son1");
let son2 = document.querySelector("#son2");
let result = document.querySelector("#result");

let bt1 = document.querySelector("#bt1");
let bt2 = document.querySelector("#bt2");
let bt3 = document.querySelector("#bt3");
let bt4 = document.querySelector("#bt4");
let bt5 = document.querySelector("#bt5");

document.addEventListener("click", (e) => {
  let id = e.target.id;
  switch (id) {
    case "bt1":
      result.innerHTML = `${Number(son1.value) + Number(son2.value)}`;
      break;
    case "bt2":
      result.innerHTML = `${Number(son1.value) - Number(son2.value)}`;
      break;
    case "bt3":
      result.innerHTML = `${Number(son1.value) / Number(son2.value)}`;
      break;
    case "bt4":
      result.innerHTML = `${Number(son1.value) * Number(son2.value)}`;
      break;
    default:
      result.innerHTML = "";
      break;
  }
});

button1.addEventListener("click", () => {
  text.style.color = "yellow";
});

button2.addEventListener("click", () => {
  text.style.color = "blue";
});

button3.addEventListener("click", () => {
  text.style.color = "red";
});

document.addEventListener("click", (e) => {
  if (e.target.id == "sm") {
    text.style.fontSize = "12px";
  } else if (e.target.id == "md") {
    text.style.fontSize = "24px";
  } else if (e.target.id == "lg") {
    text.style.fontSize = "36px";
  }
});
