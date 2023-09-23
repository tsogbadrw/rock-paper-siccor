// function ->
//hello("Tsog")
//function hello(name,age){
//	console.log("hello"+name);
////	console.log("Your age" + age);
//}
//hello("Tsogbadrah",15);
//hello("Suvd",15);
//function test(){
//	alert("button clicked");
//function sum(a,b){
//	console.log(a+b);
function sum(a,b){
	console.log(50+88);
}
sum(50,88);
sum(880,6658);

function color(){
	document.getElementsByTagName('body')[0].style.backgroundColor="blue";
}
var computer = document.querySelector('.computer');
var player = document.querySelector('.player');
var winner = document.querySelector('.winner');
function play(playerChoice){
	// 0,1,2
	random =Math.floor(Math.random()*3);
	console.log(random);
	var computerChoice;
	if(random==0){
		computerChoice="paper";
		computer.innerText="computer choice: paper";
	}else if(random==1){
		computerChoice="scissor";
		computer.innerText="computer choice: scissor";
	}else if(random==2){
		computerChoice="rock";
		computer.innerText="computer choice: rock";
	}
	player.innerText = "Player choice : " + playerChoice;
	if(playerChoice==computerChoice){
		winner.innerText=('Tie');
	}else if(
	(playerChoice=="paper"&&computerChoice=="rock") ||
	(playerChoice=="rock"&&computerChoice=="scissor")||
	(playerChoice=="scissor"&&computerChoice=="paper")){
		winner,innerText="You win!";
		pCount++;
		document.querySelector('. pCount').innerText="Player:"+pCount;
	}else{
		winner.innerText="Computer win!";
		cCount++;
		document.querySelector('. cCount').innerText="Computer:"+cCount;
	}
}
function restart(){
	pCount=0;
	cCount=0;
}
	
	