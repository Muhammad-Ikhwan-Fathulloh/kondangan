import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_DATA } from '../../content/landing';
import { navigateTo } from '../../lib/router';
import { triggerConfettiAtElement } from './ConfettiBurst';
import { MotionReveal } from './MotionReveal';

export const Pricing: React.FC = () => {
  const handleSelectPlan = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    triggerConfettiAtElement(e.currentTarget);
    window.setTimeout(() => {
      navigateTo(href);
    }, 160);
  };

  return (
    <section
      id="harga"
      className="scroll-mt-20 border-t border-[#E5DAC9] bg-[#F3ECE0] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-[#A93B26]">{PRICING_DATA.eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231915] sm:text-4xl [text-wrap:balance]">
              {PRICING_DATA.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5C4D45]">
              {PRICING_DATA.subtitle}
            </p>
          </div>
        </MotionReveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {PRICING_DATA.plans.map((plan, idx) => {
            const isHighlighted = Boolean(plan.highlighted);
            return (
              <MotionReveal key={plan.id} delayMs={idx * 80}>
                <article
                  className={`flex h-full flex-col justify-between rounded-2xl border p-7 sm:p-8 ${
                    isHighlighted
                      ? 'border-[#231915] bg-[#231915] text-[#FAF6EE]'
                      : 'border-[#E5DAC9] bg-[#FAF6EE] text-[#231915]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                      {plan.badge && (
                        <span className="rounded-md bg-[#E5B85B] px-2.5 py-1 text-xs font-semibold text-[#231915] whitespace-nowrap">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-display text-4xl font-semibold tabular-nums">
                        {plan.price}
                      </span>
                      <span
                        className={`text-xs ${
                          isHighlighted ? 'text-[#D9CCB9]' : 'text-[#5C4D45]'
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>

                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isHighlighted ? 'text-[#E5DAC9]' : 'text-[#5C4D45]'
                      }`}
                    >
                      {plan.description}
                    </p>

                    <ul
                      className={`mt-6 space-y-3 border-t pt-6 text-sm ${
                        isHighlighted ? 'border-[#3E3029]' : 'border-[#E5DAC9]'
                      }`}
                    >
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <Check
                            aria-hidden="true"
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              isHighlighted ? 'text-[#E5B85B]' : 'text-[#4A634A]'
                            }`}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleSelectPlan(e, plan.ctaHref)}
                    className={`mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      isHighlighted
                        ? 'bg-[#A93B26] text-white hover:bg-[#C2472F] focus-visible:outline-[#E5B85B]'
                        : 'border border-[#231915] bg-white text-[#231915] hover:bg-[#231915] hover:text-white focus-visible:outline-[#A93B26]'
                    }`}
                  >
                    {plan.ctaLabel}
                  </button>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
