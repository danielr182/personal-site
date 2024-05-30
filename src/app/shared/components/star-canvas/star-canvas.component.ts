import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-star-canvas',
  standalone: true,
  imports: [],
  templateUrl: './star-canvas.component.html',
  styleUrl: './star-canvas.component.scss',
})
export class StarCanvasComponent implements AfterViewInit {
  @ViewChild('canvasRef', { static: false }) canvasRef!: ElementRef;
  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  private animateInterval!: ReturnType<typeof setInterval>;
  private context!: CanvasRenderingContext2D;
  private numStars = 500;
  private fps = 60;
  private stars: Star[] = [];

  ngAfterViewInit(): void {
    this.render();
  }

  // Create all the stars
  private render(): void {
    const canvasEl = this.canvasRef.nativeElement;
    canvasEl.setAttribute('height', this.screenHeight);
    canvasEl.setAttribute('width', this.screenWidth);
    this.context = canvasEl.getContext('2d');
    for (let i = 0; i < this.numStars; i++) {
      const x = Math.round(Math.random() * this.screenWidth);
      const y = Math.round(Math.random() * this.screenHeight);
      const length = 1 + Math.random() * 1.5;
      const opacity = Math.random();

      // Create a new star and draw
      const star = new Star(x, y, length, opacity);

      // Add the the stars array
      this.stars.push(star);
    }

    this.animateInterval = setInterval(
      this.animate.bind(this),
      1000 / this.fps
    );
  }

  /* Animate the canvas */
  private animate(): void {
    this.context.clearRect(0, 0, this.screenWidth, this.screenHeight);
    this.stars.forEach((star: Star) => {
      star.draw(this.context, this.screenWidth, this.screenHeight);
    });
  }

  /* stop Animation */
  private stopAnimation(): void {
    clearInterval(this.animateInterval);
  }
}

export class Star {
  posX: number;
  posY: number;
  length: number;
  opacity: number;
  factor: number;
  increment: number;

  constructor(posX: number, posY: number, length: number, opacity: number) {
    this.posX = posX;
    this.posY = posY;
    this.length = length;
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * 0.03;
  }

  draw(
    context: CanvasRenderingContext2D,
    screenW: number,
    screenH: number
  ): void {
    context.rotate((Math.PI * 1) / 10);

    context.save();

    // move into the middle of the canvas, just to make room
    context.translate(this.posX, this.posY);

    // Change the opacity
    if (this.opacity > 1) {
      this.factor = -1;
    } else if (this.opacity <= 0) {
      this.factor = 1;

      this.posX = Math.round(Math.random() * screenW);
      this.posY = Math.round(Math.random() * screenH);
    }

    this.opacity += this.increment * this.factor;

    context.beginPath();
    for (var i = 5; i--; ) {
      context.lineTo(0, this.length);
      context.translate(0, this.length);
      context.rotate((Math.PI * 2) / 10);
      context.lineTo(0, -this.length);
      context.translate(0, -this.length);
      context.rotate(-((Math.PI * 6) / 10));
    }
    context.lineTo(0, this.length);
    context.closePath();
    context.fillStyle = 'rgba(255, 255, 200, ' + this.opacity + ')';
    context.shadowBlur = 5;
    context.shadowColor = '#fff';
    context.fill();

    context.restore();
  }
}
