
var x = document.querySelectorAll(".guitar1"); 
var a;

function playAudio(a) {
// 	for(var i=0;i<=3;i++){
// 		x[i].pause();
// 		console.log("pause");
// 	};
	x[a].play();
	console.log("play");
} 

function pauseAudio() { 
  x.pause(); 
}
var soundBox= document.querySelector(".sound-box");
var soundBox1= document.querySelectorAll(".soundbox-1");
soundBox1[0].addEventListener('click',function(){
	playAudio(0);
});
soundBox1[1].addEventListener('click',function(){
	playAudio(1);
});
soundBox1[2].addEventListener('click',function(){
	playAudio(2);
});
soundBox1[3].addEventListener('click',function(){
	playAudio(3);
});
