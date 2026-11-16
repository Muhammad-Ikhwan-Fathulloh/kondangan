import React, { useState } from 'react';
import { ArrowRight, Calendar, Check, MapPin, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../../content/landing';
import { navigateTo } from '../../lib/router';
import { BatikKawungPattern, JanurSprig } from './BatikPatterns';
import { triggerConfettiAtElement } from './ConfettiBurst';

export const Hero: React.FC = () => {
  const [guestName, setGuestName] = useState(HERO_DATA.sampleGuestPresets[0]);
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [rsvpChoice, setRsvpChoice] = useState<'hadir' | 'berhalangan' | null>(null);

  const handlePrimaryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerConfettiAtElement(e.currentTarget);
    window.setTimeout(() => {
      navigateTo(HERO_DATA.primaryCta.href);
    }, 180);
  };

  return (
    <section className="relative overflow-hidden border-b border-[#E5DAC9] bg-[#FAF6EE] py-14 sm:py-20 lg:py-24">
      {/* Subtle Batik Kawung texture in background */}
      <BatikKawungPattern
        className="absolute inset-0 text-[#9A6B16]"
        opacity={0.07}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Copy Column */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-[#9A6B16]">
              <JanurSprig className="h-6 w-14 text-[#4A634A]" />
              <span>{HERO_DATA.eyebrow}</span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-[#231915] sm:text-5xl lg:text-[3.65rem] [text-wrap:balance]">
              {HERO_DATA.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C4D45] sm:text-lg">
              {HERO_DATA.subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[#A93B26] px-6 py-3 text-base font-semibold text-white whitespace-nowrap transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#8C2D1B] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A93B26] cursor-pointer"
              >
                <span>{HERO_DATA.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={HERO_DATA.secondaryCta.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(HERO_DATA.secondaryCta.href);
                }}
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#D4C5B0] bg-white/80 px-6 py-3 text-base font-semibold text-[#231915] whitespace-nowrap transition-colors duration-150 hover:border-[#A93B26] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A93B26]"
              >
                {HERO_DATA.secondaryCta.label}
              </a>
            </div>

            {/* Interactive Guest Personalization Demo Controls */}
            <div className="mt-10 max-w-xl border-t border-[#E5DAC9] pt-6">
              <label
                htmlFor="hero-guest-input"
                className="block text-xs font-semibold tracking-wide text-[#5C4D45]"
              >
                Coba ganti nama tamu di pratinjau ponsel sebelah:
              </label>
              <div className="mt-2.5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <input
                  id="hero-guest-input"
                  type="text"
                  value={guestName}
                  maxLength={34}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Ketik nama tamu..."
                  className="h-10 w-full rounded-lg border border-[#D4C5B0] bg-white px-3.5 text-sm text-[#231915] placeholder:text-[#8E7D72] focus:border-[#A93B26] focus:outline-none sm:max-w-[240px]"
                />
                <div className="flex flex-wrap gap-1.5" role="group" aria-label="Pilihan nama tamu contoh">
                  {HERO_DATA.sampleGuestPresets.map((preset) => {
                    const active = guestName === preset;
                    return (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setGuestName(preset)}
                        className={`rounded-md px-2.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A93B26] ${
                          active
                            ? 'bg-[#231915] text-[#FAF6EE]'
                            : 'bg-[#F3ECE0] text-[#5C4D45] hover:bg-[#E5DAC9] hover:text-[#231915]'
                        }`}
                      >
                        {preset}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup Column */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[330px]">
              {/* Soft sage ornamental backdrop behind phone */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[#EAF0E8] border border-[#D4E0D1]"
              />

              {/* Phone Frame */}
              <div className="overflow-hidden rounded-[2.2rem] border-[6px] border-[#231915] bg-[#FAF6EE] shadow-xl">
                {/* Speaker Notch */}
                <div className="flex items-center justify-center bg-[#231915] py-2">
                  <div className="h-1.5 w-16 rounded-full bg-[#4A3C35]" />
                </div>

                {/* Mockup Screen Content */}
                {!invitationOpened ? (
                  <div className="relative flex min-h-[470px] flex-col justify-between bg-[#FAF6EE] p-6 text-center">
                    <BatikKawungPattern
                      className="absolute inset-0 text-[#9A6B16]"
                      opacity={0.09}
                    />

                    <div className="relative z-10 pt-2">
                      <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9A6B16]">
                        {HERO_DATA.phoneSample.greeting}
                      </p>
                      <div className="mx-auto mt-3 flex justify-center">
                        <JanurSprig className="h-8 w-20 text-[#4A634A]" />
                      </div>
                    </div>

                    <div className="relative z-10 my-4">
                      <p className="text-xs font-medium text-[#5C4D45]">
                        {HERO_DATA.phoneSample.eventLabel}
                      </p>
                      <h2 className="mt-1 font-display text-3xl font-semibold text-[#231915]">
                        {HERO_DATA.phoneSample.couple}
                      </h2>
                      <p className="mt-2 text-xs text-[#5C4D45]">
                        {HERO_DATA.phoneSample.date}
                      </p>
                    </div>

                    <div className="relative z-10 rounded-xl border border-[#E5DAC9] bg-white/95 p-4 text-center">
                      <p className="text-[11px] font-medium text-[#5C4D45]">
                        Kepada Yth. Bapak/Ibu/Saudara/i
                      </p>
                      <p className="mt-1 truncate font-display text-lg font-semibold text-[#A93B26]">
                        {guestName.trim() || 'Tamu Undangan'}
                      </p>
                      <button
                        type="button"
                        onClick={() => setInvitationOpened(true)}
                        className="mt-3.5 inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-lg bg-[#A93B26] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#8C2D1B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A93B26]"
                      >
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Buka Undangan</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex min-h-[470px] flex-col justify-between bg-white p-5">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#E5DAC9] pb-3">
                        <span className="font-display text-base font-semibold text-[#231915]">
                          {HERO_DATA.phoneSample.couple}
                        </span>
                        <button
                          type="button"
                          onClick={() => setInvitationOpened(false)}
                          className="text-xs font-medium text-[#A93B26] hover:underline cursor-pointer"
                        >
                          Sampul
                        </button>
                      </div>

                      {/* Countdown strip */}
                      <div className="mt-4 rounded-xl bg-[#FAF6EE] border border-[#E5DAC9] p-3.5 text-center">
                        <p className="text-[11px] font-medium text-[#5C4D45]">
                          Menuju Hari Bahagia
                        </p>
                        <p className="mt-1 font-display text-2xl font-semibold tabular-nums text-[#A93B26]">
                          {HERO_DATA.phoneSample.countdownDays} Hari Lagi
                        </p>
                      </div>

                      {/* Venue Info */}
                      <div className="mt-3.5 space-y-2.5 rounded-xl border border-[#E5DAC9] p-3.5 text-left">
                        <div className="flex items-start gap-2.5 text-xs text-[#231915]">
                          <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#9A6B16]" aria-hidden="true" />
                          <div>
                            <p className="font-semibold">{HERO_DATA.phoneSample.date}</p>
                            <p className="text-[#5C4D45]">{HERO_DATA.phoneSample.time}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 text-xs text-[#231915]">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#4A634A]" aria-hidden="true" />
                          <div>
                            <p className="font-semibold">Pendopo Sasana Asri</p>
                            <p className="text-[#5C4D45]">Yogyakarta</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Mini RSVP */}
                    <div className="mt-4 rounded-xl bg-[#EAF0E8] p-3.5">
                      <p className="text-xs font-semibold text-[#231915]">
                        Konfirmasi untuk {guestName.trim() || 'Tamu'}:
                      </p>
                      <div className="mt-2.5 grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            triggerConfettiAtElement(e.currentTarget);
                            setRsvpChoice('hadir');
                          }}
                          className={`inline-flex min-h-[36px] items-center justify-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                            rsvpChoice === 'hadir'
                              ? 'bg-[#4A634A] text-white'
                              : 'bg-white text-[#231915] border border-[#D4E0D1] hover:bg-[#F3ECE0]'
                          }`}
                        >
                          {rsvpChoice === 'hadir' && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                          <span>Hadir</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setRsvpChoice('berhalangan')}
                          className={`inline-flex min-h-[36px] items-center justify-center rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                            rsvpChoice === 'berhalangan'
                              ? 'bg-[#231915] text-white'
                              : 'bg-white text-[#5C4D45] border border-[#D4E0D1] hover:bg-[#F3ECE0]'
                          }`}
                        >
                          Berhalangan
                        </button>
                      </div>
                      {rsvpChoice && (
                        <p className="mt-2 text-[11px] font-medium text-[#4A634A]">
                          {rsvpChoice === 'hadir'
                            ? 'Terima kasih! Kehadiranmu tercatat otomatis.'
                            : 'Terima kasih atas konfirmasinya.'}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
