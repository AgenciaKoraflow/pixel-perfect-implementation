export function syncCanvasSize(
  canvas: HTMLCanvasElement,
  container: HTMLElement,
): void {
  const dpr = window.devicePixelRatio || 1;
  const { clientWidth: w, clientHeight: h } = container;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  const ctx = canvas.getContext("2d");
  if (ctx) ctx.scale(dpr, dpr);
}

export function renderFrame(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
): void {
  const cw = canvas.width / (window.devicePixelRatio || 1);
  const ch = canvas.height / (window.devicePixelRatio || 1);
  const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
  const dx = (cw - img.naturalWidth * scale) / 2;
  const dy = (ch - img.naturalHeight * scale) / 2;
  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, dx, dy, img.naturalWidth * scale, img.naturalHeight * scale);
}
