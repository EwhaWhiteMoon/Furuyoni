require('../css/main.css');

import Game from './game';

class App {
	private _game: Game;

	constructor(game: Game) {
		this._game = game;
	}

	public setup(): void {
		// Any setup that is required that only runs once before game loads goes here
		addEventListener("resize", this._game.onResize)
		this.gameLoop();
	}

	private gameLoop(): void {
        // need to bind the current this reference to the callback
		requestAnimationFrame(this.gameLoop.bind(this)); 

		this._game.render();
	}
}

window.onload = () => {
	let app = new App(new Game());

	app.setup();
}
