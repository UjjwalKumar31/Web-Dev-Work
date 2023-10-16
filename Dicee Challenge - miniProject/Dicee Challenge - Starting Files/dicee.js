var num = Math.random();
num = Math.floor(num * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;
var img1 = "./images/dice"+num+".png";
var img2 = "./images/dice"+num2+".png";

document.querySelector("div .img1").setAttribute("src", img1);
document.querySelector("div .img2").setAttribute("src", img2);

// alert("dice 1 = "+img1+" dice 2 = "+img2)

if (num > num2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins !"
}else if (num < num2){
    document.querySelector("h1").textContent = "🏴 Player 2 Wins !"
}else {
    document.querySelector("h1").textContent = "Draw !"
}