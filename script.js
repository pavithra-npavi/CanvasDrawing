var PlayPauseBtn = document.getElementById("playPauseBtn");
var stopBtn = document.getElementById("stopBtn");

var count = 0;
PlayPauseBtn.addEventListener("click", playPause);
stopBtn.addEventListener("click", stop);

var color1 = "blue";
function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBtn.innerText = "Pause ⏸️";
    barDrawOverWrite(color1, time);
  } else {
    count = 0;
    audio.pause();
    playPauseBtn.innerText = "Play ►";
  }
}

function stop() {
  playPause();
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.innerHTML = "Play ►";
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var audio = document.querySelector("audio");
var color = "grey";
var color1 = "rgb(228, 142, 142)";
var duration = 0;

function barDraw(color) {
  var itemValue = [
    110, 70, 20, 42, 35, 82, 17, 29, 80, 70, 4.2, 42, 35, 112, 17, 29, 140, 70,
    20, 42, 35, 122, 17, 29, 40, 70, 20, 42, 35, 92, 17, 29, 70, 70, 20, 42, 35,
    82, 17, 29, 30, 70, 20, 42, 35, 42, 17, 29, 80, 70, 20, 42, 35, 92, 17, 29,
    10, 70, 20, 42, 35, 112, 17, 29, 53, 70, 20, 42, 35, 102, 17, 29, 22, 70,
    20, 42, 35, 82, 17, 29, 17, 29, 53, 70, 20, 42, 35, 102, 17, 29, 22, 70,
    120, 42, 35, 82, 17, 29, 110, 70, 20, 42, 35, 82, 17, 29, 80, 70, 4.2, 42,
    35, 112, 17, 29, 140, 70, 20, 42, 35, 122, 17, 29, 40, 70, 20, 42, 35, 92,
    17, 29, 70, 70, 20, 42, 35, 82, 17, 29, 30, 70, 20, 42, 35, 42, 17, 29, 80,
    70, 20, 42, 35, 92, 17, 29, 10, 70, 20, 42, 35, 112, 17, 29, 53, 70, 20, 42,
    35, 102, 17, 29, 22, 70, 20, 42, 35, 82, 17, 29, 17, 29, 53, 70, 20, 42, 35,
    102, 17, 29, 22, 70, 120, 42, 35, 82, 17, 29,
  ];

  let width = 1;
  let xaixs = 0;
  ctx.fillStyle = color;
  for (var i = 0; i < itemValue.length; i++) {
    ctx.fillRect(xaixs, canvas.height - itemValue[i], width, itemValue[i]);
    xaixs += 2;
  }
//   introduction tag 
ctx.beginPath();
ctx.moveTo(55, 20);
ctx.lineTo(55, 100);
ctx.strokeStyle = 'lightgreen';
ctx.lineWidth = 1;
ctx.stroke();



ctx.beginPath();
ctx.arc(55, 102, 2, 0, 2 * Math.PI);
ctx.fillStyle ="lightgreen"
ctx.fill();
ctx.stroke();

// one six tag

ctx.beginPath();
ctx.moveTo(90, 10);
ctx.lineTo(90, 100);
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(90, 102, 1, 0, 2 * Math.PI);
ctx.fillStyle ="green"
ctx.fill();
ctx.stroke();



// Rapport Enerfy
ctx.beginPath();
ctx.moveTo(297, -100);
ctx.lineTo(297 ,100);
ctx.strokeStyle = 'darkgreen';
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(297, 102, 1, 0, 2 * Math.PI);
ctx.fillStyle ="darkgreen"
ctx.fill();
ctx.stroke();



// Rapport Eampathy
ctx.beginPath();
ctx.moveTo(292, 10);
ctx.lineTo(292, 100);
ctx.strokeStyle = 'brown';
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(292, 102, 1, 0, 2 * Math.PI);
ctx.fillStyle ="brown"
ctx.fill();
ctx.stroke();

// polite_tag

ctx.beginPath();
ctx.moveTo(285, 100);
ctx.lineTo(285, 70);
ctx.strokeStyle = 'rgb(4, 4, 160)';
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(285, 102, 1, 0, 2 * Math.PI);
ctx.fillStyle ="rgb(4, 4, 160)"
ctx.fill();
ctx.stroke();

}
barDraw(color)

function barDrawOverWrite(color1, time) {
  //   console.log(event);

  var itemValue = [
    110, 70, 20, 42, 35, 82, 17, 29, 80, 70, 4.2, 42, 35, 112, 17, 29, 140, 70,
    20, 42, 35, 122, 17, 29, 40, 70, 20, 42, 35, 92, 17, 29, 70, 70, 20, 42, 35,
    82, 17, 29, 30, 70, 20, 42, 35, 42, 17, 29, 80, 70, 20, 42, 35, 92, 17, 29,
    10, 70, 20, 42, 35, 112, 17, 29, 53, 70, 20, 42, 35, 102, 17, 29, 22, 70,
    20, 42, 35, 82, 17, 29, 17, 29, 53, 70, 20, 42, 35, 102, 17, 29, 22, 70,
    120, 42, 35, 82, 17, 29, 110, 70, 20, 42, 35, 82, 17, 29, 80, 70, 4.2, 42,
    35, 112, 17, 29, 140, 70, 20, 42, 35, 122, 17, 29, 40, 70, 20, 42, 35, 92,
    17, 29, 70, 70, 20, 42, 35, 82, 17, 29, 30, 70, 20, 42, 35, 42, 17, 29, 80,
    70, 20, 42, 35, 92, 17, 29, 10, 70, 20, 42, 35, 112, 17, 29, 53, 70, 20, 42,
    35, 102, 17, 29, 22, 70, 20, 42, 35, 82, 17, 29, 17, 29, 53, 70, 20, 42, 35,
    102, 17, 29, 22, 70, 120, 42, 35, 82, 17, 29,
  ];
  let width = 1;
  let xaixs = 0;
  for (var i = 0; i < itemValue.length; i++) {
    ctx.fillRect(xaixs, canvas.height - itemValue[i], width, itemValue[i]);
    xaixs += 2;
    if (xaixs < time) {
      ctx.fillStyle = color1;
    } else {
      ctx.fillStyle = "grey";
    }
  }
}

function currentTrackTime() {
  console.log("object");
  barDrawOverWrite(color1, (audio.currentTime * audio.duration));
  // console.log(audio.currentTime*(audio.duration))
}


//  row bar
window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer", {
	axisX:{
		interval: 1,
        interlacedColor: "white",
		gridColor: "white",
	},
    axisY2:{
        interlacedColor: "white",
		gridColor: "white",
    },
    dataPointWidth: 10,
	data: [{
		type: "bar",
		color: "rgb(228, 142, 142)",
   
		dataPoints: [
		
			{ y: 5, label: "one six" },
			{ y: 8, label: "Rapport Building - Energy" },
			{ y: 9, label: "Importance of MATH" },
			{ y: 12, label: "Referrals" },
			{ y: 13, label: "Closure" },
			{ y: 14, label: "Laptop details" }
		]
	}]
});
chart.render()

}