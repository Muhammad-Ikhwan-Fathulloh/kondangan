import React from 'react';
import { HOW_IT_WORKS_DATA } from '../../content/landing';
import { BatikParangPattern } from './BatikPatterns';
import { MotionReveal } from './MotionReveal';

export const HowItWorks: React.FC = () => {
  return (
    <section
      aria-labelledby="cara-kerja-heading"
      className="relative overflow-hidden border-y border-[#E5DAC9] bg-[#F3ECE0] py-16 sm:py-24"
    >
      <BatikParangPattern className="absolute inset-0 text-[#9A6B16]" opacity={0.07} />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#4A634A]">
              {HOW_IT_WORKS_DATA.eyebrow}
            </p>
            <h2
              id="cara-kerja-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231915] sm:text-4xl [text-wrap:balance]"
            >
              {HOW_IT_WORKS_DATA.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5C4D45]">
              {HOW_IT_WORKS_DATA.subtitle}
            </p>
          </div>
        </MotionReveal>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {HOW_IT_WORKS_DATA.steps.map((step, index) => (
            <MotionReveal key={step.number} delayMs={index * 70}>
              <li className="flex h-full flex-col rounded-2xl border border-[#E5DAC9] bg-[#FAF6EE] p-6 sm:p-7">
                <span className="font-display text-3xl font-semibold tabular-nums text-[#A93B26]">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#231915]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5C4D45] sm:text-base">
                  {step.description}
                </p>
              </li>
            </MotionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
