import React from 'react';

const CONFETTI_COLORS = ['#A93B26', '#D4A243', '#4A634A', '#E8B89A', '#231915'];

/**
 * Triggers a lightweight celebratory confetti burst at the clicked element's position.
 * Respects `prefers-reduced-motion: reduce` by skipping particles cleanly.
 */
export function triggerConfettiAtElement(element: HTMLElement | null) {
  if (typeof window === 'undefined' || !element) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const rect = element.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  const container = document.createElement('div');
  container.setAttribute('aria-hidden', 'true');
  container.style.position = 'fixed';
  container.style.left = '0';
  container.style.top = '0';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  container.style.overflow = 'hidden';
  document.body.appendChild(container);

  const particleCount = 18;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    const size = 6 + Math.random() * 5;
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.4;
    const distance = 45 + Math.random() * 65;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 24;
    const rotation = Math.random() * 360;
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];

    particle.style.position = 'fixed';
    particle.style.left = `${originX}px`;
    particle.style.top = `${originY}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${i % 3 === 0 ? size * 0.6 : size}px`;
    particle.style.backgroundColor = color;
    particle.style.borderRadius = i % 2 === 0 ? '9999px' : '2px';
    particle.style.transform = 'translate(-50%, -50%) scale(1)';
    particle.style.opacity = '1';
    particle.style.transition =
      'transform 620ms cubic-bezier(0.16, 1, 0.3, 1), opacity 620ms ease-out';

    container.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${rotation}deg) scale(0.65)`;
      particle.style.opacity = '0';
    });
  }

  window.setTimeout(() => {
    container.remove();
  }, 680);
}

interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ConfettiButton: React.FC<ConfettiButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerConfettiAtElement(e.currentTarget);
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
