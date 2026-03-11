let count = 0;

function addUsh(){
count++;
document.getElementById("count").innerText = count;
}

function reset(){
count = 0;
document.getElementById("count").innerText = count;
}

function loadVideo(){

const link = document.getElementById("videoLink").value;

const videoId = link.split("v=")[1];

document.getElementById("player").innerHTML =
`<iframe width="560" height="315"
src="https://www.youtube.com/embed/${videoId}"
frameborder="0" allowfullscreen></iframe>`;

}
