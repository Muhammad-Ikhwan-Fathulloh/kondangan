import React from 'react';
import { TESTIMONIALS_DATA } from '../../content/landing';
import { MotionReveal } from './MotionReveal';

export const Testimonials: React.FC = () => {
  return (
    <section
      aria-labelledby="testimoni-heading"
      className="border-t border-[#E5DAC9] bg-[#FAF6EE] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#4A634A]">
              {TESTIMONIALS_DATA.eyebrow}
            </p>
            <h2
              id="testimoni-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231915] sm:text-4xl [text-wrap:balance]"
            >
              {TESTIMONIALS_DATA.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5C4D45]">
              {TESTIMONIALS_DATA.subtitle}
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS_DATA.items.map((item, idx) => (
            <MotionReveal key={item.id} delayMs={idx * 70}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-[#E5DAC9] bg-white p-6 sm:p-7">
                <blockquote className="text-sm leading-relaxed text-[#231915] sm:text-base">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-6 border-t border-[#F3ECE0] pt-4">
                  <p className="font-display text-base font-semibold text-[#231915]">
                    {item.coupleName}
                  </p>
                  <p className="mt-0.5 text-xs text-[#5C4D45]">
                    {item.city} · Template {item.templateUsed}
                  </p>
                </figcaption>
              </figure>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
