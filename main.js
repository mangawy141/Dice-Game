let randomNum1 = Math.floor(Math.random() * 6 + 1);
let randomNum2 = Math.floor(Math.random() * 6 + 1);

let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

let sign = document.createElement("h1");
let p1Win = "🎉Player 1 WINS!";
let p2Win = "Player 2 WINS!🎉";
let Draw = "DRAW!🙌";

document.body.querySelector('.container').appendChild(sign);
sign.style.color = "red";
sign.style.textShadow = "5px 0 white";

if (randomNum1 > randomNum2) {
  sign.textContent = p1Win;
} else if (randomNum1 < randomNum2) {
  sign.textContent = p2Win;
} else {
  sign.textContent = Draw;
}

dice1.setAttribute("src", `dice${randomNum1}.png`);
dice2.setAttribute("src", `dice${randomNum2}.png`);