//your code here
const guessno = document.getElementById("guess");
var btn = document.getElementById("btn");
var responce = document.getElementByTd("respond");
function generateRandomNumber() {
	var random = Math.floor(Math.random()*40)-20;
	if(random>guessno)
	{
		responce.textContent="Getting Hotter";
	}
	else{
		responce.textContent="guess higher";
	}
}
btn.addEventListener("click", generateRandomNumber);
