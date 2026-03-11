const videos = [

{
title: "Prank Video",
ush: 4
},

{
title: "School Vlog",
ush: 2
},

{
title: "Random Chaos",
ush: 7
}

];

let total = 0;

const table = document.getElementById("videoTable");

videos.forEach(video => {

const row = document.createElement("tr");

row.innerHTML = `
<td>${video.title}</td>
<td>${video.ush}</td>
`;

table.appendChild(row);

total += video.ush;

});

document.getElementById("total").innerText = total;
