import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../../content/landing';
import { MotionReveal } from './MotionReveal';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA.items[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-[#E5DAC9] bg-[#F3ECE0] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="text-center">
            <p className="text-sm font-semibold text-[#A93B26]">{FAQ_DATA.eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231915] sm:text-4xl [text-wrap:balance]">
              {FAQ_DATA.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5C4D45]">
              {FAQ_DATA.subtitle}
            </p>
          </div>
        </MotionReveal>

        <div className="mt-10 divide-y divide-[#E5DAC9] rounded-2xl border border-[#E5DAC9] bg-[#FAF6EE]">
          {FAQ_DATA.items.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <div key={item.id} className="px-5 py-4 sm:px-7 sm:py-5">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[44px] w-full items-center justify-between gap-4 text-left font-display text-base font-semibold text-[#231915] sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A93B26] rounded cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-[#A93B26] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pt-2 pb-1 text-sm leading-relaxed text-[#5C4D45] sm:text-base"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
