var money = 0;
var moneyPerClick = 1;

function earnMoney(event) {
  money += moneyPerClick;
  document.getElementById("moneyCounter").innerHTML = money;

  var x = event.clientX;
  var y = event.clientY;
  var number = document.createElement("div");
  number.className = "number";
  number.style.left = x + "px";
  number.style.top = y + "px";
  number.innerHTML = "+" + moneyPerClick;
  document.body.appendChild(number);

  var particle = document.createElement("img");
  particle.src = "coin.gif";
  particle.style.left = x + "px";
  particle.style.top = y + "px";
  document.getElementById("particles").appendChild(particle);
}

function buyUpgrade() {
  if (money >= 10) {
    money -= 10;
    moneyPerClick += 1;
    document.getElementById("moneyCounter").innerHTML = money;
  } else {
    alert("You don't have enough money to buy this upgrade!");
  }
}

document.getElementById("pizza").addEventListener("click", earnMoney);
