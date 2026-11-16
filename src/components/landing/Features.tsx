import React from 'react';
import {
  CalendarClock,
  ClipboardCheck,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  UserCheck,
} from 'lucide-react';
import { FEATURES_DATA, type FeatureItem } from '../../content/landing';
import { MotionReveal } from './MotionReveal';

const ICON_MAP: Record<FeatureItem['iconName'], React.FC<{ className?: string }>> = {
  'user-check': UserCheck,
  'clipboard-check': ClipboardCheck,
  'layout-dashboard': LayoutDashboard,
  'message-circle': MessageCircle,
  'calendar-clock': CalendarClock,
  'map-pin': MapPin,
};

export const Features: React.FC = () => {
  return (
    <section id="fitur" className="scroll-mt-20 bg-[#FAF6EE] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#A93B26]">{FEATURES_DATA.eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231915] sm:text-4xl [text-wrap:balance]">
              {FEATURES_DATA.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5C4D45]">
              {FEATURES_DATA.subtitle}
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES_DATA.items.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <MotionReveal
                key={item.id}
                delayMs={idx * 50}
                className={item.spanWide ? 'lg:col-span-2' : 'lg:col-span-1'}
              >
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-[#E5DAC9] bg-white p-6 transition-transform duration-200 hover:-translate-y-1">
                  <div>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3ECE0] text-[#A93B26] transition-colors duration-200 group-hover:bg-[#A93B26] group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-[#231915]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5C4D45] sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {item.highlight && (
                    <p className="mt-5 border-t border-[#F3ECE0] pt-3.5 text-xs font-medium text-[#4A634A]">
                      {item.highlight}
                    </p>
                  )}
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
