import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { TEMPLATE_GALLERY_DATA } from '../../content/landing';
import { navigateTo } from '../../lib/router';
import { triggerConfettiAtElement } from '../landing/ConfettiBurst';
import { TemplatePreviewArtwork } from '../landing/TemplateGallery';

export const TemplatesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    ...TEMPLATE_GALLERY_DATA.templates.map((t) => t.category),
  ];

  const filteredTemplates =
    selectedCategory === 'Semua'
      ? TEMPLATE_GALLERY_DATA.templates
      : TEMPLATE_GALLERY_DATA.templates.filter(
          (t) => t.category === selectedCategory
        );

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#FAF6EE] py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5C4D45] hover:text-[#A93B26] cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Kembali ke Beranda</span>
        </button>

        <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-display text-3xl font-semibold text-[#231915] sm:text-4xl">
              Katalog Template Kondangan
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5C4D45] sm:text-base">
              Pilih gaya undangan pernikahan digital dengan sentuhan Nusantara yang
              paling pas untuk ceritamu.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter kategori template"
            className="flex flex-wrap gap-1.5 rounded-xl bg-[#F3ECE0] p-1"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    active
                      ? 'bg-white text-[#231915] shadow-xs'
                      : 'text-[#5C4D45] hover:text-[#231915]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {filteredTemplates.map((template) => (
            <article
              key={template.id}
              className="flex flex-col rounded-2xl border border-[#E5DAC9] bg-white p-5"
            >
              <TemplatePreviewArtwork template={template} />
              <div className="mt-5 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xs text-[#5C4D45]">
                    {template.category} · {template.paletteLabel}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-[#231915]">
                    {template.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C4D45]">
                    {template.tagline}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    triggerConfettiAtElement(e.currentTarget);
                    window.setTimeout(() => {
                      navigateTo(`/editor?template=${template.id}`);
                    }, 150);
                  }}
                  className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#A93B26] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#8C2D1B] cursor-pointer"
                >
                  <span>Coba Template Ini</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};
