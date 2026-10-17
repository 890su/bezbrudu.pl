// Halftone dirt over the line-drawn sofa. Pointer strokes erase it like an extractor pass.

const W = 600;
const H = 340;
const SPACING = 7;
const NOZZLE = 46; // stroke width in drawing units

// Same silhouette as HeroSofa.astro (fill shapes only).
const SILHOUETTE = [
  'M70 178V72a32 32 0 0 1 32-32h396a32 32 0 0 1 32 32v106z',
  'M28 282V152a36 36 0 0 1 72 0v130z',
  'M500 282V152a36 36 0 0 1 72 0v130z',
  'M100 178a8 8 0 0 1 8-8h119a8 8 0 0 1 8 8v54H100z',
  'M235 178a8 8 0 0 1 8-8h114a8 8 0 0 1 8 8v54H235z',
  'M365 178a8 8 0 0 1 8-8h119a8 8 0 0 1 8 8v54H365z',
  'M100 232h400v50H100z',
];

// [x, y, radius, strength] in drawing units: coffee on the middle seat, grease on the arms, a headrest smudge.
const STAINS: [number, number, number, number][] = [
  [300, 196, 46, 0.85],
  [64, 150, 34, 0.6],
  [536, 156, 30, 0.5],
  [300, 92, 70, 0.32],
  [168, 206, 44, 0.42],
  [430, 120, 40, 0.28],
  [420, 258, 50, 0.3],
];

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function hash(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function density(x: number, y: number) {
  let d = 0.07 + hash(Math.round(x / 36), Math.round(y / 36)) * 0.09;
  for (const [cx, cy, r, k] of STAINS) {
    const dist2 = (x - cx) ** 2 + (y - cy) ** 2;
    d += k * Math.exp(-dist2 / (2 * r * r));
  }
  return Math.min(d, 0.95);
}

export function initScrub(root: HTMLElement) {
  const canvas = root.querySelector<HTMLCanvasElement>('[data-scrub-canvas]');
  const tool = root.querySelector<SVGSVGElement>('[data-scrub-tool]');
  const pctEl = root.querySelector<HTMLOutputElement>('[data-scrub-pct]');
  const hint = root.querySelector<HTMLElement>('[data-scrub-hint]');
  const allBtn = root.querySelector<HTMLButtonElement>('[data-scrub-all]');
  const resetBtn = root.querySelector<HTMLButtonElement>('[data-scrub-reset]');
  if (!canvas || !tool || !pctEl || !hint || !allBtn || !resetBtn) return;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;

  const hintText = hint.textContent ?? '';
  const doneText = root.dataset.done ?? '';
  const clip = new Path2D();
  SILHOUETTE.forEach((d) => clip.addPath(new Path2D(d)));

  let scale = 1;
  let initialInk = 1;
  let last: { x: number; y: number } | null = null;
  let drawing = false;
  let animating = false;

  function paintDirt() {
    const rect = canvas!.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas!.width = Math.round(rect.width * dpr);
    canvas!.height = Math.round(rect.height * dpr);
    scale = canvas!.width / W;
    ctx!.setTransform(scale, 0, 0, scale, 0, 0);
    ctx!.globalCompositeOperation = 'source-over';
    ctx!.clearRect(0, 0, W, H);
    ctx!.save();
    ctx!.clip(clip);
    ctx!.fillStyle = getComputedStyle(root).getPropertyValue('--dirt').trim() || '#8a6a3b';
    // Screen at 45°, like a printed halftone.
    const step = SPACING;
    for (let gy = -H; gy < H * 2; gy += step) {
      for (let gx = -W; gx < W * 2; gx += step) {
        const x = (gx - gy) * 0.7071 + W / 2;
        const y = (gx + gy) * 0.7071;
        if (x < 0 || x > W || y < 0 || y > H) continue;
        const r = (step / 2) * Math.sqrt(density(x, y)) * 1.05;
        ctx!.beginPath();
        ctx!.arc(x, y, r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }
    ctx!.restore();
    initialInk = countInk() || 1;
    updateMeter();
  }

  function countInk() {
    const { width, height } = canvas!;
    const data = ctx!.getImageData(0, 0, width, height).data;
    let n = 0;
    const stride = 4 * 3; // every third pixel is plenty
    for (let i = 3; i < data.length; i += stride) if (data[i] > 40) n++;
    return n;
  }

  function updateMeter() {
    const left = countInk();
    const pct = Math.max(0, Math.min(100, Math.round((1 - left / initialInk) * 100)));
    pctEl!.value = `${pct}%`;
    pctEl!.textContent = `${pct}%`;
    const done = pct >= 85;
    hint!.textContent = done ? doneText : hintText;
    hint!.classList.toggle('is-done', done);
    resetBtn!.hidden = pct < 3;
    allBtn!.hidden = done;
  }

  function erase(from: { x: number; y: number }, to: { x: number; y: number }) {
    ctx!.save();
    ctx!.globalCompositeOperation = 'destination-out';
    ctx!.lineCap = 'round';
    ctx!.lineWidth = NOZZLE;
    ctx!.beginPath();
    ctx!.moveTo(from.x, from.y);
    ctx!.lineTo(to.x, to.y);
    ctx!.stroke();
    ctx!.restore();
  }

  function toDrawing(e: PointerEvent) {
    const rect = canvas!.getBoundingClientRect();
    return { x: ((e.clientX - rect.left) / rect.width) * W, y: ((e.clientY - rect.top) / rect.height) * H };
  }

  function placeTool(p: { x: number; y: number }) {
    tool!.style.transform = `translate(${(p.x / W) * canvas!.clientWidth}px, ${(p.y / H) * canvas!.clientHeight}px) translate(-50%, -92.6%)`;
  }

  canvas.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse') tool.classList.add('is-on');
  });
  canvas.addEventListener('pointerleave', () => {
    if (!animating) tool.classList.remove('is-on');
    drawing = false;
    last = null;
  });
  canvas.addEventListener('pointerdown', (e) => {
    if (animating) return;
    drawing = true;
    last = toDrawing(e);
    tool.classList.add('is-on');
    placeTool(last);
    erase(last, last);
  });
  canvas.addEventListener('pointermove', (e) => {
    const p = toDrawing(e);
    if (!animating) placeTool(p);
    if (!drawing || !last) return;
    erase(last, p);
    last = p;
  });
  const end = (e: PointerEvent) => {
    if (!drawing) return;
    drawing = false;
    last = null;
    if (e.pointerType !== 'mouse') tool.classList.remove('is-on');
    updateMeter();
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);

  // An extractor pass: a straight stroke the tool travels along.
  function pass(x: number, y0: number, y1: number, ms: number) {
    return new Promise<void>((resolve) => {
      if (reduceMotion() || ms === 0) {
        erase({ x, y: y0 }, { x, y: y1 });
        resolve();
        return;
      }
      const start = performance.now();
      let prev = { x, y: y0 };
      const frame = (now: number) => {
        const t = Math.min((now - start) / ms, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const p = { x, y: y0 + (y1 - y0) * eased };
        erase(prev, p);
        placeTool(p);
        prev = p;
        if (t < 1) requestAnimationFrame(frame);
        else resolve();
      };
      requestAnimationFrame(frame);
    });
  }

  async function run(passes: [number, number, number][], ms: number) {
    animating = true;
    if (!reduceMotion()) tool!.classList.add('is-on');
    for (const [x, y0, y1] of passes) await pass(x, y0, y1, ms);
    tool!.classList.remove('is-on');
    animating = false;
    updateMeter();
  }

  allBtn.addEventListener('click', () => {
    const passes: [number, number, number][] = [];
    for (let x = 40; x <= 560; x += 40) passes.push([x, 40, 300]);
    run(passes, 220);
  });
  resetBtn.addEventListener('click', () => {
    paintDirt();
    allBtn.focus();
  });

  let width = 0;
  const ro = new ResizeObserver(() => {
    const w = Math.round(canvas.getBoundingClientRect().width);
    if (w && w !== width) {
      const first = width === 0;
      width = w;
      paintDirt();
      if (first) startDemo();
    }
  });
  ro.observe(canvas);

  // The first stroke happens on its own once the sofa is in view: one clean stripe down the middle.
  function startDemo() {
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((en) => en.isIntersecting)) return;
      io.disconnect();
      setTimeout(() => run([[300, 62, 290]], 1100), reduceMotion() ? 0 : 700);
    }, { threshold: 0.6 });
    io.observe(canvas!);
  }
}
