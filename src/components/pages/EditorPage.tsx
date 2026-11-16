import React, { useMemo, useState } from 'react';
import { ArrowLeft, Check, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import {
  TEMPLATE_GALLERY_DATA,
  type TemplateId,
} from '../../content/landing';
import { navigateTo } from '../../lib/router';
import { BatikKawungPattern, BatikParangPattern, JanurSprig } from '../landing/BatikPatterns';
import { triggerConfettiAtElement } from '../landing/ConfettiBurst';

interface EditorPageProps {
  initialTemplate?: string | null;
  initialPlan?: string | null;
}

export const EditorPage: React.FC<EditorPageProps> = ({
  initialTemplate,
  initialPlan,
}) => {
  const validInitialTemplate: TemplateId =
    initialTemplate === 'janur-floral' ||
    initialTemplate === 'genz-minimal' ||
    initialTemplate === 'modern-batik'
      ? initialTemplate
      : 'modern-batik';

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>(validInitialTemplate);
  const [brideName, setBrideName] = useState('Rara');
  const [groomName, setGroomName] = useState('Bagas');
  const [eventDate, setEventDate] = useState('Sabtu, 24 Oktober 2026');
  const [venue, setVenue] = useState('Pendopo Sasana Asri, Yogyakarta');
  const [guestSample, setGuestSample] = useState('Kak Nadia & Partner');
  const [copied, setCopied] = useState(false);

  const shareSlug = useMemo(() => {
    const clean = `${brideName}-${groomName}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return clean || 'undangan-kami';
  }, [brideName, groomName]);

  const personalUrl = useMemo(() => {
    const encodedGuest = encodeURIComponent(guestSample.trim() || 'Tamu Undangan');
    return `https://kondangan.id/${shareSlug}?to=${encodedGuest}`;
  }, [shareSlug, guestSample]);

  const whatsappPreviewUrl = useMemo(() => {
    const text = `Halo ${guestSample.trim() || 'Sahabat'}, kami mengundangmu hadir di pernikahan ${brideName} & ${groomName} pada ${eventDate}. Buka undangan personalmu di sini: ${personalUrl}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }, [guestSample, brideName, groomName, eventDate, personalUrl]);

  const handleCopyLink = async (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerConfettiAtElement(e.currentTarget);
    try {
      await navigator.clipboard.writeText(personalUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  const activeTemplateObj =
    TEMPLATE_GALLERY_DATA.templates.find((t) => t.id === selectedTemplate) ??
    TEMPLATE_GALLERY_DATA.templates[0];

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#FAF6EE] py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DAC9] pb-6">
          <div>
            <button
              type="button"
              onClick={() => navigateTo('/')}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5C4D45] hover:text-[#A93B26] cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Kembali ke Beranda</span>
            </button>
            <h1 className="mt-2 font-display text-3xl font-semibold text-[#231915]">
              Editor Undangan Digital
            </h1>
            <p className="mt-1 text-sm text-[#5C4D45]">
              {initialPlan === 'premium'
                ? 'Mode pratinjau Paket Premium · Semua template & tamu tak terbatas aktif.'
                : 'Coba susun undanganmu secara langsung dan lihat pratinjaunya seketika.'}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Form Controls */}
          <div className="space-y-6 rounded-2xl border border-[#E5DAC9] bg-white p-6 lg:col-span-7">
            <div>
              <span className="block text-sm font-semibold text-[#231915]">
                1. Pilih Gaya Template
              </span>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {TEMPLATE_GALLERY_DATA.templates.map((tpl) => {
                  const active = selectedTemplate === tpl.id;
                  return (
                    <button
                      key={tpl.id}
                      type="button"
                      onClick={() => setSelectedTemplate(tpl.id)}
                      className={`rounded-xl border px-3.5 py-3 text-left transition-colors cursor-pointer ${
                        active
                          ? 'border-[#A93B26] bg-[#FAF6EE] text-[#231915]'
                          : 'border-[#E5DAC9] bg-white text-[#5C4D45] hover:border-[#231915]'
                      }`}
                    >
                      <p className="font-display text-sm font-semibold text-[#231915]">
                        {tpl.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[#5C4D45]">{tpl.category}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="bride-name"
                  className="block text-xs font-semibold text-[#5C4D45]"
                >
                  Nama Mempelai Wanita
                </label>
                <input
                  id="bride-name"
                  type="text"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-lg border border-[#D4C5B0] bg-[#FAF6EE]/50 px-3.5 text-sm text-[#231915] focus:border-[#A93B26] focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="groom-name"
                  className="block text-xs font-semibold text-[#5C4D45]"
                >
                  Nama Mempelai Pria
                </label>
                <input
                  id="groom-name"
                  type="text"
                  value={groomName}
                  onChange={(e) => setGroomName(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-lg border border-[#D4C5B0] bg-[#FAF6EE]/50 px-3.5 text-sm text-[#231915] focus:border-[#A93B26] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="event-date"
                  className="block text-xs font-semibold text-[#5C4D45]"
                >
                  Tanggal Acara
                </label>
                <input
                  id="event-date"
                  type="text"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-lg border border-[#D4C5B0] bg-[#FAF6EE]/50 px-3.5 text-sm text-[#231915] focus:border-[#A93B26] focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="event-venue"
                  className="block text-xs font-semibold text-[#5C4D45]"
                >
                  Lokasi / Gedung
                </label>
                <input
                  id="event-venue"
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-lg border border-[#D4C5B0] bg-[#FAF6EE]/50 px-3.5 text-sm text-[#231915] focus:border-[#A93B26] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="guest-sample"
                className="block text-xs font-semibold text-[#5C4D45]"
              >
                Nama Tamu untuk Link Personal
              </label>
              <input
                id="guest-sample"
                type="text"
                value={guestSample}
                onChange={(e) => setGuestSample(e.target.value)}
                className="mt-1.5 h-11 w-full rounded-lg border border-[#D4C5B0] bg-[#FAF6EE]/50 px-3.5 text-sm text-[#231915] focus:border-[#A93B26] focus:bg-white focus:outline-none"
              />
            </div>

            {/* Generated Link Box */}
            <div className="rounded-xl border border-[#E5DAC9] bg-[#F3ECE0] p-4">
              <p className="text-xs font-semibold text-[#5C4D45]">
                Link Undangan Personal Siap Bagikan
              </p>
              <p className="mt-1.5 break-all font-mono text-xs text-[#231915]">
                {personalUrl}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#A93B26] px-4 py-2 text-xs font-semibold text-white hover:bg-[#8C2D1B] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Salin Link</span>
                    </>
                  )}
                </button>
                <a
                  href={whatsappPreviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#4A634A] bg-white px-4 py-2 text-xs font-semibold text-[#4A634A] hover:bg-[#EAF0E8]"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Pratinjau Pesan WhatsApp</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Live Preview Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-[#E5DAC9] bg-[#F3ECE0] p-5">
              <div className="mb-3 flex items-center justify-between text-xs text-[#5C4D45]">
                <span className="font-semibold text-[#231915]">
                  Pratinjau Langsung
                </span>
                <span>{activeTemplateObj.name}</span>
              </div>

              {selectedTemplate === 'modern-batik' && (
                <div className="relative flex min-h-[420px] flex-col items-center justify-between overflow-hidden rounded-xl bg-gradient-to-b from-[#A93B26] via-[#8E2F1D] to-[#682013] p-7 text-center text-[#FAF6EE]">
                  <BatikParangPattern className="absolute inset-0 text-[#E5B85B]" opacity={0.15} />
                  <div className="pointer-events-none absolute inset-3 rounded-lg border border-[#E5B85B]/45" />
                  <p className="relative z-10 text-xs tracking-[0.2em] uppercase text-[#F3D79B]">
                    Undangan Pernikahan
                  </p>
                  <div className="relative z-10">
                    <h2 className="font-display text-3xl font-semibold">
                      {brideName || 'Mempelai'} &amp; {groomName || 'Pasangan'}
                    </h2>
                    <p className="mt-3 text-sm text-[#F4E6CE]">{eventDate}</p>
                    <p className="mt-1 text-xs text-[#F4E6CE]/85">{venue}</p>
                  </div>
                  <div className="relative z-10 w-full rounded-lg border border-[#E5B85B]/40 bg-[#231915]/25 p-3.5">
                    <p className="text-[11px] text-[#F3D79B]">Kepada Yth.</p>
                    <p className="mt-0.5 font-display text-base font-semibold">
                      {guestSample || 'Tamu Undangan'}
                    </p>
                  </div>
                </div>
              )}

              {selectedTemplate === 'janur-floral' && (
                <div className="relative flex min-h-[420px] flex-col items-center justify-between overflow-hidden rounded-xl border border-[#C6D5C3] bg-gradient-to-b from-[#EAF0E8] via-[#F7F9F5] to-[#FAF6EE] p-7 text-center text-[#231915]">
                  <div className="relative z-10 flex flex-col items-center">
                    <JanurSprig className="h-8 w-20 text-[#4A634A]" />
                    <p className="mt-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#4A634A]">
                      The Wedding of
                    </p>
                  </div>
                  <div className="relative z-10">
                    <h2 className="font-display text-3xl font-semibold italic">
                      {brideName || 'Mempelai'} &amp; {groomName || 'Pasangan'}
                    </h2>
                    <p className="mt-3 text-sm text-[#5C4D45]">{eventDate}</p>
                    <p className="mt-1 text-xs text-[#5C4D45]">{venue}</p>
                  </div>
                  <div className="relative z-10 w-full rounded-lg border border-[#D4E0D1] bg-white p-3.5">
                    <p className="text-[11px] text-[#4A634A]">Khusus Untuk</p>
                    <p className="mt-0.5 font-display text-base font-semibold text-[#231915]">
                      {guestSample || 'Tamu Undangan'}
                    </p>
                  </div>
                </div>
              )}

              {selectedTemplate === 'genz-minimal' && (
                <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-xl border border-[#D9CCB9] bg-white p-7 text-[#231915]">
                  <BatikKawungPattern className="absolute inset-0 text-[#231915]" opacity={0.04} />
                  <div className="relative z-10 flex items-center justify-between border-b border-[#E5DAC9] pb-3 text-xs text-[#5C4D45]">
                    <span>Kamu diundang kondangan!</span>
                    <span>{eventDate}</span>
                  </div>
                  <div className="relative z-10 my-auto">
                    <h2 className="font-display text-4xl font-semibold leading-tight">
                      {brideName || 'Mempelai'}
                      <br />
                      &amp; {groomName || 'Pasangan'}
                    </h2>
                    <p className="mt-3 text-sm text-[#5C4D45]">{venue}</p>
                  </div>
                  <div className="relative z-10 rounded-lg bg-[#FAF6EE] border border-[#E5DAC9] p-3.5">
                    <p className="text-[11px] text-[#5C4D45]">Tamu Spesial:</p>
                    <p className="mt-0.5 font-display text-base font-semibold text-[#A93B26]">
                      {guestSample || 'Tamu Undangan'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
