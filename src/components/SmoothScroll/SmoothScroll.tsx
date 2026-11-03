import { useEffect } from 'react';

const scrollKeys = new Set(['ArrowDown', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp', ' ']);

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;
    let cancelScroll: (() => void) | undefined;

    const handleClick = (event: MouseEvent) => {
      if (
        reducedMotion.matches ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target || link.hasAttribute('download')) return;

      const url = new URL(link.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        url.search !== window.location.search ||
        !url.hash
      ) {
        return;
      }

      let targetElement: HTMLElement | null = null;
      try {
        targetElement = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      } catch {
        return;
      }
      if (!targetElement) return;

      event.preventDefault();
      cancelScroll?.();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);

      const startY = window.scrollY;
      const scrollMargin = Number.parseFloat(getComputedStyle(targetElement).scrollMarginTop) || 0;
      const targetY = Math.max(
        0,
        Math.min(
          targetElement.getBoundingClientRect().top + startY - scrollMargin,
          document.documentElement.scrollHeight - window.innerHeight,
        ),
      );
      const distance = targetY - startY;
      const duration = Math.min(1400, Math.max(650, Math.abs(distance) * 0.45));
      const startTime = performance.now();
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';

      const restoreScrollBehavior = () => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
        cancelScroll = undefined;
      };

      const stopScroll = () => {
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        restoreScrollBehavior();
        removeCancellationListeners();
      };

      const cancelOnKey = (keyEvent: KeyboardEvent) => {
        if (scrollKeys.has(keyEvent.key)) stopScroll();
      };

      function removeCancellationListeners() {
        window.removeEventListener('wheel', stopScroll);
        window.removeEventListener('touchstart', stopScroll);
        window.removeEventListener('keydown', cancelOnKey);
      }

      window.addEventListener('wheel', stopScroll, { passive: true });
      window.addEventListener('touchstart', stopScroll, { passive: true });
      window.addEventListener('keydown', cancelOnKey);
      cancelScroll = stopScroll;

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress =
          progress < 0.5
            ? 16 * progress ** 5
            : 1 - Math.pow(-2 * progress + 2, 5) / 2;

        window.scrollTo(0, startY + distance * easedProgress);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animate);
          return;
        }

        animationFrame = 0;
        history.pushState(null, '', url.hash);
        restoreScrollBehavior();
        removeCancellationListeners();
      };

      animationFrame = window.requestAnimationFrame(animate);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      cancelScroll?.();
    };
  }, []);

  return null;
}

export default SmoothScroll;
