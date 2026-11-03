import { useEffect, useRef } from 'react';
import './CursorFollower.css';

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!cursor || !dot || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hasPosition = false;
    let previousFrameTime = 0;

    const animateCursor = (time: number) => {
      const elapsed = previousFrameTime ? time - previousFrameTime : 16.67;
      previousFrameTime = time;
      const followAmount = 1 - Math.exp(-elapsed / 130);
      currentX += (targetX - currentX) * followAmount;
      currentY += (targetY - currentY) * followAmount;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(targetX - currentX) > 0.15 || Math.abs(targetY - currentY) > 0.15) {
        frame = window.requestAnimationFrame(animateCursor);
      } else {
        currentX = targetX;
        currentY = targetY;
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
        frame = 0;
        previousFrameTime = 0;
      }
    };

    const updateCursor = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      targetX = event.clientX;
      targetY = event.clientY;
      if (!hasPosition) {
        currentX = targetX;
        currentY = targetY;
        hasPosition = true;
      }
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      cursor.classList.toggle(
        'is-hovering',
        event.target instanceof Element &&
          Boolean(event.target.closest('a, button, [role="button"], input, select, textarea')),
      );

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        cursor.classList.add('is-visible');
        dot.classList.add('is-visible');
        frame = window.requestAnimationFrame(animateCursor);
      });
    };

    const hideCursor = () => {
      cursor.classList.remove('is-visible');
      dot.classList.remove('is-visible');
    };
    window.addEventListener('pointermove', updateCursor);
    document.addEventListener('pointerleave', hideCursor);

    return () => {
      window.removeEventListener('pointermove', updateCursor);
      document.removeEventListener('pointerleave', hideCursor);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-follower" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

export default CursorFollower;
