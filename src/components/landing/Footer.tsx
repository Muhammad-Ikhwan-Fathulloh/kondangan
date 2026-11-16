import React, { useState } from 'react';
import { X } from 'lucide-react';
import { FOOTER_DATA, NAVBAR_DATA, SITE_BRAND } from '../../content/landing';
import { navigateTo } from '../../lib/router';
import { KondanganMark } from './BatikPatterns';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigateTo(`/${href}`);
    }
  };

  return (
    <footer className="border-t border-[#E5DAC9] bg-[#FAF6EE] py-12 text-[#231915] sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/');
              }}
              className="inline-flex items-center gap-2 font-display text-xl font-semibold text-[#231915]"
            >
              <KondanganMark className="h-5 w-5 text-[#A93B26]" />
              <span>{SITE_BRAND.name}</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-[#5C4D45]">
              {FOOTER_DATA.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#231915]">
              {FOOTER_DATA.navigationTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#5C4D45]">
              {NAVBAR_DATA.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#A93B26] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#231915]">
              {FOOTER_DATA.legalTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#5C4D45]">
              {FOOTER_DATA.legalLinks.map((item) => (
                <li key={item.slug}>
                  <button
                    type="button"
                    onClick={() => setLegalModal(item.slug)}
                    className="hover:text-[#A93B26] transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold text-[#231915]">
              {FOOTER_DATA.contactTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#5C4D45]">
              {FOOTER_DATA.contacts.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="hover:text-[#A93B26] transition-colors"
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
              {FOOTER_DATA.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#A93B26] transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E5DAC9] pt-6 text-xs text-[#5C4D45]">
          <p>{SITE_BRAND.copyright}</p>
        </div>
      </div>

      {/* Placeholder Legal Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#231915]/60 p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-[#E5DAC9] bg-[#FAF6EE] p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E5DAC9] pb-3">
              <h3
                id="legal-modal-title"
                className="font-display text-xl font-semibold text-[#231915]"
              >
                {legalModal === 'privacy' ? 'Kebijakan Privasi' : 'Syarat Layanan'}
              </h3>
              <button
                type="button"
                aria-label="Tutup"
                onClick={() => setLegalModal(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5DAC9] bg-white text-[#231915] hover:bg-[#F3ECE0] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#5C4D45]">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Data nama mempelai, jadwal acara, dan daftar tamu yang kamu masukkan
                    hanya digunakan untuk menampilkan undangan pernikahan digitalmu.
                  </p>
                  <p>
                    Kondangan tidak menjual atau membagikan nomor kontak tamu undanganmu
                    kepada pihak ketiga mana pun. (Teks ini merupakan contoh kebijakan
                    privasi awal).
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Pengguna bertanggung jawab atas keakuratan tanggal, lokasi, serta
                    konten teks yang ditampilkan pada undangan pernikahan digital.
                  </p>
                  <p>
                    Paket Gratis dan Premium berlaku sesuai masa aktif yang tertera pada
                    halaman harga. (Teks ini merupakan contoh syarat layanan awal).
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
