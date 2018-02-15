import Snowflake from './snowflakes';

export const createCanvas = () => {
  const canvas = document.createElement('canvas');
  const context: any = canvas.getContext('2d');
  const snowflakesCount = 2000;
  const snowflakes: any[] = [];
  const fps = 40;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.id = 'motion';
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snowflakesCount; i++) {
    const x = Math.round(Math.random() * canvas.width);
    const y = Math.round(Math.random() * canvas.height);
    const length = 1 + Math.random() * 2;
    const opacity = Math.random();

    // create a new star and draw
    const snowflake = new Snowflake(x, y, length, opacity, canvas);

    // add the the stars array
    snowflakes.push(snowflake);
  }

  const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((snowflake: any) => {
      snowflake.draw();
    });
  };

  setInterval(animate, 1000 / fps);

  document.body.appendChild(canvas);
};

export const removeCanvas = () => {
  const canvas: any = document.getElementById('motion');
  document.removeChild(canvas);
};
