import { useEffect, useRef } from "react";

export default function Waves() {
  const rand = (a, b) => Math.random() * (b - a) + a;
  const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

  const offsets = [], offs = [];
  const offset = (pos, shift) => rand(...((pos + shift) % 2 ? [0.025, 0.1] : [-0.1, -0.025]));
  for (let i = 0; i < 3; i++) {
    offsets.push([]); offs.push([0]);
    offsets[i].push(offset(0, [0, 1, 0][i]));
    for (let k = 0; k < randint(3, 4) + i; k++) {
      offsets[i].push(offset(k, [0, 1, 0][i]));
      offs[i].push(0);
    }
  }

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const w = canvas.width, h = canvas.height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = '#666666';
    ctx.fillRect(0, 0, w, h);

    const wave = (color, y, num) => {
      let curve = "";
      const n = offsets[num].length - 1;
      for (let i = 1; i <= n; i++) {
        if (i === 1) {
          curve += "C";
          curve += ` ${(i - 2 / 3) * w / n} ${y + offsets[num][i - 1] * h}`;
          curve += ` ${(i - 1 / 3) * w / n} ${y + offsets[num][i] * h}`;
          curve += ` ${i * w / n} ${y}`;
        } else {
          curve += " S";
          curve += ` ${(i - 1 / 3) * w / n} ${y + offsets[num][i] * h}`;
          curve += ` ${i * w / n} ${y}`;
        }
      }
      let str = `M 0 ${y} ${curve} L ${w} ${h} L 0 ${h} L 0 ${y}`;
      const path = new Path2D(str);
      ctx.fillStyle = color;
      ctx.fill(path);
    }

    wave('#555555', 0.425 * h, 0);
    wave('#444444', 0.5 * h, 1);
    wave('#333333', 0.575 * h, 2);
  });

  return <canvas ref={canvasRef} className="-z-10 absolute h-screen w-screen" />;
};