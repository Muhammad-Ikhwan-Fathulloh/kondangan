import React from 'react';
import { TRUST_BAR_DATA } from '../../content/landing';

export const TrustBar: React.FC = () => {
  return (
    <section
      aria-label="Statistik platform Kondangan"
      className="border-b border-[#E5DAC9] bg-[#F3ECE0] py-7"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-1 gap-5 sm:flex sm:flex-1 sm:items-center sm:justify-around sm:gap-8">
            {TRUST_BAR_DATA.metrics.map((metric, index) => (
              <React.Fragment key={metric.id}>
                <div className="flex items-baseline gap-3 sm:flex-col sm:items-center sm:gap-1 sm:text-center">
                  <span className="font-display text-2xl font-semibold tabular-nums text-[#231915] sm:text-3xl">
                    {metric.value}
                  </span>
                  <span className="text-sm text-[#5C4D45]">{metric.label}</span>
                </div>
                {index < TRUST_BAR_DATA.metrics.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-8 w-px bg-[#D9CCB9] sm:block"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-[#5C4D45] sm:text-right">
          * {TRUST_BAR_DATA.placeholderNote}
        </p>
      </div>
    </section>
  );
};
