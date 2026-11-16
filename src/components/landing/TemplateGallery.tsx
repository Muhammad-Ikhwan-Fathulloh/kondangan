import React, { useState } from 'react';
import { ArrowRight, Eye, X } from 'lucide-react';
import {
  TEMPLATE_GALLERY_DATA,
  type TemplateId,
  type TemplateItem,
} from '../../content/landing';
import { navigateTo } from '../../lib/router';
import { BatikKawungPattern, BatikParangPattern, JanurSprig } from './BatikPatterns';
import { triggerConfettiAtElement } from './ConfettiBurst';
import { MotionReveal } from './MotionReveal';

/**
 * Custom SVG + gradient invitation preview artwork for each template style.
 * Ensures zero reliance on external image hosts.
 */
export const TemplatePreviewArtwork: React.FC<{
  template: TemplateItem;
  compact?: boolean;
}> = ({ template, compact = false }) => {
  if (template.id === 'modern-batik') {
    return (
      <div
        className={`relative flex flex-col items-center justify-between overflow-hidden rounded-xl border border-[#8C2D1B]/30 bg-gradient-to-b from-[#A93B26] via-[#8E2F1D] to-[#682013] text-[#FAF6EE] ${
          compact ? 'h-64 p-5' : 'h-80 p-7'
        }`}
      >
        <BatikParangPattern className="absolute inset-0 text-[#E5B85B]" opacity={0.14} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 rounded-lg border border-[#E5B85B]/45"
        />
        <span className="relative z-10 text-[11px] font-medium tracking-[0.2em] uppercase text-[#F3D79B]">
          Walimatul Ursy
        </span>
        <div className="relative z-10 text-center">
          <p className="font-display text-2xl font-semibold sm:text-3xl">
            {template.coupleSample}
          </p>
          <p className="mt-2 text-xs text-[#F4E6CE]">{template.dateSample}</p>
        </div>
        <div className="relative z-10 text-center">
          <p className="text-[11px] text-[#F3D79B]">Kepada Yth. Kak Nadia</p>
          <p className="mt-0.5 text-[11px] text-[#F4E6CE]/85">{template.venueSample}</p>
        </div>
      </div>
    );
  }

  if (template.id === 'janur-floral') {
    return (
      <div
        className={`relative flex flex-col items-center justify-between overflow-hidden rounded-xl border border-[#C6D5C3] bg-gradient-to-b from-[#EAF0E8] via-[#F7F9F5] to-[#FAF6EE] text-[#231915] ${
          compact ? 'h-64 p-5' : 'h-80 p-7'
        }`}
      >
        {/* Botanical Arch SVG */}
        <svg
          aria-hidden="true"
          viewBox="0 0 240 300"
          fill="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M32 288 V112 C32 54 72 24 120 24 C168 24 208 54 208 112 V288"
            stroke="#4A634A"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />
          <circle cx="120" cy="24" r="5" fill="#9A6B16" fillOpacity="0.45" />
        </svg>

        <div className="relative z-10 flex flex-col items-center pt-1">
          <JanurSprig className="h-7 w-16 text-[#4A634A]" />
          <span className="mt-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A634A]">
            The Wedding of
          </span>
        </div>

        <div className="relative z-10 text-center">
          <p className="font-display text-2xl font-semibold italic text-[#231915] sm:text-3xl">
            {template.coupleSample}
          </p>
          <p className="mt-2 text-xs text-[#5C4D45]">{template.dateSample}</p>
        </div>

        <div className="relative z-10 rounded-lg border border-[#D4E0D1] bg-white/85 px-4 py-2 text-center">
          <p className="text-[11px] font-medium text-[#4A634A]">
            Tamu Kehormatan · {template.venueSample}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#D9CCB9] bg-gradient-to-br from-[#FAF6EE] via-[#FFFFFF] to-[#F3ECE0] text-[#231915] ${
        compact ? 'h-64 p-5' : 'h-80 p-7'
      }`}
    >
      <BatikKawungPattern className="absolute inset-0 text-[#231915]" opacity={0.04} />
      <div className="relative z-10 flex items-center justify-between border-b border-[#E5DAC9] pb-2.5 text-[11px] font-medium text-[#5C4D45]">
        <span>Save the Date</span>
        <span className="tabular-nums">{template.dateSample}</span>
      </div>

      <div className="relative z-10 my-auto">
        <p className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#231915]">
          {template.coupleSample}
        </p>
        <p className="mt-2 text-xs text-[#A93B26] font-medium">
          Kamu diundang merayakan hari bahagia kami.
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-[#5C4D45]">
        <span>{template.venueSample}</span>
        <span className="font-semibold text-[#231915]">RSVP Online →</span>
      </div>
    </div>
  );
};

export const TemplateGallery: React.FC = () => {
  const [previewTemplate, setPreviewTemplate] = useState<TemplateItem | null>(null);

  const handleUseTemplate = (
    e: React.MouseEvent<HTMLButtonElement>,
    templateId: TemplateId
  ) => {
    triggerConfettiAtElement(e.currentTarget);
    window.setTimeout(() => {
      navigateTo(`/editor?template=${templateId}`);
    }, 150);
  };

  return (
    <section id="template" className="scroll-mt-20 bg-[#FAF6EE] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#A93B26]">
                {TEMPLATE_GALLERY_DATA.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231915] sm:text-4xl [text-wrap:balance]">
                {TEMPLATE_GALLERY_DATA.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#5C4D45]">
                {TEMPLATE_GALLERY_DATA.subtitle}
              </p>
            </div>

            <a
              href="/templates"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/templates');
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A93B26] whitespace-nowrap hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A93B26] rounded"
            >
              <span>Jelajahi semua template</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TEMPLATE_GALLERY_DATA.templates.map((template, idx) => (
            <MotionReveal key={template.id} delayMs={idx * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-[#E5DAC9] bg-white p-5 transition-transform duration-200 hover:-translate-y-1">
                <TemplatePreviewArtwork template={template} compact />

                <div className="mt-5 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#5C4D45]">
                      <span>{template.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{template.paletteLabel}</span>
                    </div>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-[#231915]">
                      {template.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5C4D45]">
                      {template.tagline}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2.5 border-t border-[#F3ECE0] pt-4">
                    <button
                      type="button"
                      onClick={() => setPreviewTemplate(template)}
                      className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#D4C5B0] bg-[#FAF6EE] px-3 py-2 text-xs font-semibold text-[#231915] whitespace-nowrap transition-colors hover:border-[#A93B26] hover:bg-white cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A93B26]"
                    >
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Pratinjau</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleUseTemplate(e, template.id)}
                      className="inline-flex min-h-[40px] flex-1 items-center justify-center rounded-lg bg-[#A93B26] px-3 py-2 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#8C2D1B] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A93B26]"
                    >
                      Pakai Gaya Ini
                    </button>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>

      {/* Interactive Template Preview Modal */}
      {previewTemplate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="template-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#231915]/60 p-4 backdrop-blur-xs"
          onClick={() => setPreviewTemplate(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-[#E5DAC9] bg-[#FAF6EE] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#5C4D45]">
                  {previewTemplate.category}
                </p>
                <h3
                  id="template-modal-title"
                  className="font-display text-2xl font-semibold text-[#231915]"
                >
                  {previewTemplate.name}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Tutup pratinjau template"
                onClick={() => setPreviewTemplate(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5DAC9] bg-white text-[#231915] hover:bg-[#F3ECE0] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5">
              <TemplatePreviewArtwork template={previewTemplate} />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#5C4D45]">
              {previewTemplate.tagline}
            </p>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={(e) => handleUseTemplate(e, previewTemplate.id)}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#A93B26] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#8C2D1B] cursor-pointer"
              >
                <span>Gunakan di Editor</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
