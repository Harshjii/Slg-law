let lockCount = 0;
let scrollPosition = 0;

export function lockBodyScroll() {
  if (typeof window === 'undefined') return;

  lockCount++;
  if (lockCount === 1) {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }
}

export function unlockBodyScroll() {
  if (typeof window === 'undefined') return;

  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    const top = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';

    const y = top ? -parseInt(top, 10) : scrollPosition;
    window.scrollTo(0, y);
  }
}
