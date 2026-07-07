"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import LandingHeader from "@/components/elements/LandingHeader";
import BrandMarquee from "@/components/marketing/BrandMarquee";
import { CheckIcon } from "@phosphor-icons/react";
import {
  nutreLandingBottomCta,
  nutreLandingBrandLogos,
  nutreLandingFooterLinks,
  nutreLandingHero,
  nutreLandingNavItems,
  nutreLandingShowcaseSections,
  whatsappCtaHref,
} from "@/mocks/nutreLanding";

/* Global nav renders on true black — the only pure black on the page. */
const navSurface: CSSProperties = {
  "--color-background": "#000000",
  "--color-foreground": "#ffffff",
} as CSSProperties;

/* Hero feature chips. */
const heroHighlights = [
  "Bioimpedância INBODY",
  "Presencial e online",
  "Método ReConnect exclusivo",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-canvas text-ink">
      {/* ── Global nav — slim true-black bar ─────────────────────────── */}
      <LandingHeader.Root
        size="sm"
        className="bg-black text-white border-white/10"
        style={navSurface}
      >

        <LandingHeader.Center className="gap-2 sm:gap-3 w-full max-w-3xl">
          <LandingHeader.Nav>
            {nutreLandingNavItems.map((item, index) => (
              <LandingHeader.Nav.Item
                key={item.label}
                href={item.href}
                active={index === 0}
              >
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>
        <LandingHeader.Right className="gap-2 sm:gap-3">
          <LandingHeader.CTA
            label={nutreLandingHero.primaryCta}
            onClick={() => window.open(whatsappCtaHref, "_blank", "noopener")}
            className="hidden sm:inline-flex rounded-full bg-primary-500 hover:bg-action-blue-focus"
          />
          <LandingHeader.MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={setMobileMenuOpen as never}
            className="text-white"
          />
          <LandingHeader.MobileMenuPanel
            open={mobileMenuOpen}
            cta={
              <LandingHeader.CTA
                label={nutreLandingHero.primaryCta}
                onClick={() => window.open(whatsappCtaHref, "_blank", "noopener")}
                className="w-full rounded-full bg-primary-500"
              />
            }
          >
            {nutreLandingNavItems.map((item) => (
              <LandingHeader.Nav.Item key={item.label} href={item.href}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>
        </LandingHeader.Right>
      </LandingHeader.Root>

      {/* ── Hero · two columns (content + photo) ─────────────────────── */}
      <section id="inicio" className="w-full bg-canvas text-ink px-6 py-16 ">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left · content */}
          <RevealContainer once className="flex flex-col">
            <p className="type-eyebrow uppercase tracking-[0.18em] text-primary-600">
              {nutreLandingHero.eyebrow}
            </p>
            <h1 className="type-hero mt-4">{nutreLandingHero.title}</h1>
            <p className="type-lead mt-4 text-ink">{nutreLandingHero.subtitle}</p>
            <p className="type-body mt-4 max-w-xl text-ink-muted-80">
              {nutreLandingHero.description}
            </p>

            {/* Email capture + CTA */}
            <div className="mt-8 max-w-md">
              <label htmlFor="hero-email" className="type-caption font-semibold text-ink">
                Seu e-mail
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  id="hero-email"
                  type="email"
                  placeholder="voce@email.com"
                  className="type-body w-full flex-1 rounded-full border border-hairline bg-white px-5 py-3 text-ink outline-none placeholder:text-ink-muted-48 focus:border-primary-500"
                />
                <button
                  className="btn-pill btn-pill-primary shrink-0"
                >
                  {nutreLandingHero.primaryCta}
                </button>
              </div>
            </div>

            {/* Highlights */}
            <ul className="mt-6 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-parchment px-4 py-2"
                >
                  <CheckIcon weight="bold" className="h-4 w-4 text-primary-600" />
                  <span className="type-caption font-semibold text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </RevealContainer>

          {/* Right · photo */}
          <ZoomContainer once scale={1} className="w-full">
            <div className="relative aspect-5/4 w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/nutre6.jpg"
                alt="Juliana Alvarenga — nutrição funcional e esportiva"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </ZoomContainer>
        </div>
      </section>


      {/* ── Tile 3 · Partners (parchment) ────────────────────────────── */}
      <section
        id="parceiros"
        className="w-full bg-parchment text-ink px-6 py-16 md:py-20"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
          <h2 className="type-display text-center">Trajetória em grandes marcas</h2>
          <FadeContainer once className="w-full">
            <BrandMarquee
              logos={nutreLandingBrandLogos}
              speed={30}
              itemsGap="close"
              imageFilter="grayscale"
            />
          </FadeContainer>
        </div>
      </section>

      {/* ── Showcase tiles · alternating white ↔ dark ────────────────── */}
      {nutreLandingShowcaseSections.map((section, index) => {
        const dark = index % 2 === 1;
        return (
          <section
            key={section.title}
            id={section.anchor}
            className={
              dark
                ? "w-full bg-tile-dark-3 text-white px-6 py-14 md:py-20"
                : "w-full bg-canvas text-ink px-6 py-14 md:py-20"
            }
          >
            <RevealContainer
              once
              className="mx-auto flex max-w-3xl flex-col items-center text-center"
            >
              <h2 className="type-display">{section.title}</h2>
              <p
                className={
                  dark
                    ? "type-body mt-4 max-w-2xl text-body-muted"
                    : "type-body mt-4 max-w-2xl text-ink-muted-80"
                }
              >
                {section.description}
              </p>
              <a
                href={whatsappCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={dark ? "link-sky type-body mt-6" : "link-action type-body mt-6"}
              >
                Agendar consulta ›
              </a>
            </RevealContainer>

            <ZoomContainer once scale={1} className="mx-auto mt-14 flex justify-center">
              <Image
                src={section.mainImage}
                alt={section.mainAlt}
                width={480}
                height={720}
                className="product-shadow h-auto w-full max-w-60 sm:max-w-70"
              />
            </ZoomContainer>
          </section>
        );
      })}

      {/* ── Tile · Closing CTA (dark) ────────────────────────────────── */}
      <section
        id="planos"
        className="w-full bg-tile-dark text-white px-6 py-14 md:py-20"
      >
        <RevealContainer once className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="type-display">{nutreLandingBottomCta.title}</h2>
          <p className="type-body mt-4 max-w-2xl text-body-muted">
            {nutreLandingBottomCta.description}
          </p>
          <p className="type-caption mt-6 text-body-muted">
            Alpha Green Business Tower · Av. Cauaxi, 293 — Alphaville, Barueri/SP
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-primary"
            >
              {nutreLandingBottomCta.primaryCta}
            </a>
          </div>
        </RevealContainer>
      </section>

      {/* ── Footer (parchment) ───────────────────────────────────────── */}
      <footer
        id="contato"
        className="w-full bg-parchment text-ink-muted-80"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
          {nutreLandingFooterLinks.map((column) => (
            <div key={column.title} className="flex flex-col">
              <h4 className="type-caption font-semibold text-ink">{column.title}</h4>
              <ul className="mt-2 flex flex-col">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="type-caption leading-[2.2] text-ink-muted-80 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-hairline">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-fine text-ink-muted-48">
              © {new Date().getFullYear()} Juliana Alvarenga Nutricionista · CRN 54483. Todos os direitos reservados.
            </p>
            <p className="type-fine max-w-xl text-ink-muted-48">
              As informações deste site têm cunho educacional e não substituem uma
              consulta. Não use o conteúdo para autodiagnóstico ou autotratamento.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
