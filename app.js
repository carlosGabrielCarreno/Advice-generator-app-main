const API_URL = "https://api.adviceslip.com/advice";
const pConcejo = document.querySelector("#conteiner-concejo");
const pNumConcejo = document.querySelector("#num-concejo");
let concejo, numConcejo;

async function concejoFn() {
  fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.slip.advice);
      concejo = data.slip.advice;
      numConcejo = data.slip.id;
      pConcejo.innerHTML = `"${concejo}"`;
      pNumConcejo.innerHTML = `ADVICE #${numConcejo}`;
    });
}
concejoFn();
const btnClick = document.getElementById("btn");
btnClick.addEventListener("click", (e) => {
  concejoFn();
});
