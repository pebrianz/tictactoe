const ttt = document.querySelector("#tictactoe");


//create square
const square = (elem,sn) => {
	for(let i = 0; i < sn; i++) {
		elem.innerHTML += `<button class="square"></button>`;
	}
}

//create board
const board = (n,sn) => {
	for(let i = 1; i <= n; i++) {
		 ttt.innerHTML += `<div id="flex-${i}" class="flex"></div>`;
		 let flex = document.querySelector(`#flex-${i}`);
		 square(flex,sn);
	}
}

board(3,3);



const buttons = document.querySelectorAll(".square");

const button = Object.values(buttons);

const squares = Array(9).fill(null);

let giliran = true

function winner(squares) {

const lines = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6],
]


for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			ttt.innerHTML += `<h1>player ${squares[a]} win</h1>`;
    }
  }
	return null;
}



button.map((btn,i) => {
	btn.addEventListener("click", () => {
		if(squares[i] === null) {
			if(squares[i] !== "X" && giliran === 1) {
				squares[i] = "X";
				btn.innerHTML += `<h1>X</h1>`;
				giliran = 2;
			  winner(squares)
			}else{
				squares[i] = "O";
				btn.innerHTML += `<h1>O</h1>`;
				giliran = 1;
				winner(squares)
			}
		}
	})
})

