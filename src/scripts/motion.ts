declare global {
  interface Window {
    __motion?: boolean;
  }
}

window.__motion = true;

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal on scroll
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal], [data-stagger]');

const finish = (el: HTMLElement) => {
  const items = el.hasAttribute('data-stagger') ? Math.min(el.children.length, 10) : 1;
  window.setTimeout(() => el.classList.add('reveal-done'), 1200 + items * 85);
};

if (reduce || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('in-view', 'reveal-done'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('in-view');
        finish(el);
        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
  );
  revealables.forEach((el) => io.observe(el));
}

// Header state + progress fallback
const header = document.querySelector<HTMLElement>('[data-header]');
const progress = document.querySelector<HTMLElement>('.scroll-progress');
const nativeProgress = CSS.supports('animation-timeline: scroll()');
let ticking = false;

const onScroll = () => {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 40);
  if (progress && !nativeProgress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  }
  ticking = false;
};

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  },
  { passive: true },
);
onScroll();

// Count-up numbers
if (!reduce && 'IntersectionObserver' in window) {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const raw = el.dataset.count ?? '0';
    const end = parseFloat(raw);
    const decimals = (raw.split('.')[1] ?? '').length;
    el.textContent = (0).toFixed(decimals);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          el.textContent = (end * (1 - Math.pow(1 - p, 4))).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
  });
}

// Pointer spotlight on cards
if (matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>('.spotlight').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

export {};
