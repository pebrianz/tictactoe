
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

let nextPlayer = true

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
			return ttt.innerHTML += `<h1>player ${squares[a]} win</h1>`;
		}else if(squares.indexOf(null) === -1){
			return ttt.innerHTML += `<h1>Draw</h1>`;
		}
	}
}



button.map((btn,i) => {
	btn.addEventListener("click", () => {
		if(squares[i] === null) {
			if(squares[i] !== "X" && nextPlayer === 1) {
				squares[i] = "X";
				btn.innerHTML += `<h1>X</h1>`;
				nextPlayer = 2;
			  winner(squares)
			}else{
				squares[i] = "O";
				btn.innerHTML += `<h1>O</h1>`;
				nextPlayer = 1;
				winner(squares)
			}
		}
	})
})

