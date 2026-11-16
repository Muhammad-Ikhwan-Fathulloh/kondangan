import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVBAR_DATA, SITE_BRAND } from '../../content/landing';
import { navigateTo } from '../../lib/router';
import { KondanganMark } from './BatikPatterns';
import { triggerConfettiAtElement } from './ConfettiBurst';

interface NavbarProps {
  isSubpage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isSubpage = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isSubpage) {
      navigateTo(`/${href}`);
      window.setTimeout(() => {
        const target = document.getElementById(href.slice(1));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrimaryAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerConfettiAtElement(e.currentTarget);
    setMobileMenuOpen(false);
    navigateTo(NAVBAR_DATA.ctaHref);
  };

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-[#E5DAC9] bg-[#FAF6EE]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text-element Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            navigateTo('/');
          }}
          className="inline-flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-[#231915] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A93B26] rounded"
        >
          <KondanganMark className="h-5 w-5 text-[#A93B26]" />
          <span>{SITE_BRAND.name}</span>
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C4D45]"
        >
          {NAVBAR_DATA.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#A93B26] hover:text-[#231915] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A93B26] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrimaryAction}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#A93B26] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#8C2D1B] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A93B26] cursor-pointer"
          >
            {NAVBAR_DATA.ctaLabel}
          </button>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5DAC9] text-[#231915] md:hidden hover:bg-[#F3ECE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A93B26] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-b border-[#E5DAC9] bg-[#FAF6EE] px-4 pb-5 pt-3 shadow-sm md:hidden"
        >
          <nav aria-label="Navigasi mobile" className="flex flex-col gap-1">
            {NAVBAR_DATA.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#231915] hover:bg-[#F3ECE0] focus-visible:outline-2 focus-visible:outline-[#A93B26]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handlePrimaryAction}
              className="mt-3 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#A93B26] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#8C2D1B] cursor-pointer"
            >
              {NAVBAR_DATA.ctaLabel}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
