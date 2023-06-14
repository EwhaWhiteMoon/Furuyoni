export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;

	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
	}

	public render(): void {
        console.log('rendering');
	}

	public onResize(): void {
		this.width = window.innerWidth
		this.height = window.innerHeight

		this.canvas.width = this.width
		this.canvas.height = this.height
	}
}
