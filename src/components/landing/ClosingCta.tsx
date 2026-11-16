import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CLOSING_CTA_DATA } from '../../content/landing';
import { navigateTo } from '../../lib/router';
import { BatikKawungPattern, JanurSprig } from './BatikPatterns';
import { triggerConfettiAtElement } from './ConfettiBurst';
import { MotionReveal } from './MotionReveal';

export const ClosingCta: React.FC = () => {
  const handleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerConfettiAtElement(e.currentTarget);
    window.setTimeout(() => {
      navigateTo(CLOSING_CTA_DATA.ctaHref);
    }, 180);
  };

  return (
    <section className="relative overflow-hidden bg-[#A93B26] py-16 text-white sm:py-20">
      <BatikKawungPattern className="absolute inset-0 text-[#FAF6EE]" opacity={0.08} />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex justify-center">
            <JanurSprig className="h-8 w-20 text-[#F3D79B]" />
          </div>
          <p className="mt-3 text-sm font-semibold text-[#F3D79B]">
            {CLOSING_CTA_DATA.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl [text-wrap:balance]">
            {CLOSING_CTA_DATA.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#FCEEE9]">
            {CLOSING_CTA_DATA.subtitle}
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleAction}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#FAF6EE] px-7 py-3.5 text-base font-semibold text-[#231915] whitespace-nowrap transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer"
            >
              <span>{CLOSING_CTA_DATA.ctaLabel}</span>
              <ArrowRight className="h-4 w-4 text-[#A93B26]" aria-hidden="true" />
            </button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
