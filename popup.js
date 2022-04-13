const count = document.getElementById("count");
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");

btn.onclick = () => {
  const current = parseInt(count.innerText, 10);
  count.innerText = current + 1;
};

reset.onclick = () => {
  count.innerText = 0;
};
