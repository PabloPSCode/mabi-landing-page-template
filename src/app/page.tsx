"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import Footer from "@/components/elements/Footer";
import { HeroSection } from "@/components/elements/HeroSection";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import BrandMarquee from "@/components/marketing/BrandMarquee";
import MobileSeal from "@/components/marketing/MobileSeal";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  nutreLandingBottomCta,
  nutreLandingBrandLogos,
  nutreLandingFooterLinks,
  nutreLandingHero,
  nutreLandingMidHero,
  nutreLandingNavItems,
  nutreLandingShowcaseSections,
  nutreLandingSocialLinks,
  type NutreLandingShowcaseSection,
} from "@/mocks/nutreLanding";

const darkSurfaceStyle: CSSProperties = {
  "--color-foreground": "#F8FAFC",
  "--color-background": "#08112A",
} as CSSProperties;

function ShowcaseVisual({ section }: { section: NutreLandingShowcaseSection }) {
  if (section.visual === "dual-phone") {
    return (
      <div className="relative mx-auto w-full max-w-md">
        <Image
          src={section.mainImage}
          alt={section.mainAlt}
          width={560}
          height={760}
          className="w-[62%] h-auto"
        />
        {section.secondaryImage && section.secondaryAlt && (
          <Image
            src={section.secondaryImage}
            alt={section.secondaryAlt}
            width={420}
            height={680}
            className="absolute bottom-0 right-0 w-[58%] h-auto"
          />
        )}
        {section.overlayImage && section.overlayAlt && (
          <Image
            src={section.overlayImage}
            alt={section.overlayAlt}
            width={760}
            height={520}
            className="hidden sm:block absolute top-[26%] right-0 w-[48%] rounded-xl border-2 border-[#0D152A] shadow-xl"
          />
        )}
      </div>
    );
  }

  if (section.visual === "phone-overlay") {
    return (
      <div className="relative mx-auto w-full max-w-sm">
        <Image
          src={section.mainImage}
          alt={section.mainAlt}
          width={420}
          height={680}
          className="w-[72%] h-auto mx-auto rounded-xl"
        />
        {section.overlayImage && section.overlayAlt && (
          <Image
            src={section.overlayImage}
            alt={section.overlayAlt}
            width={760}
            height={520}
            className="hidden sm:block absolute left-0 top-[32%] w-[62%] rounded-xl border-2 border-[#0D152A] shadow-xl"
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full">
      <Image
        src={section.mainImage}
        alt={section.mainAlt}
        width={920}
        height={580}
        className="w-full h-auto"
      />
      {section.overlayImage && section.overlayAlt && (
        <Image
          src={section.overlayImage}
          alt={section.overlayAlt}
          width={760}
          height={520}
          className="hidden sm:block absolute right-0 top-0 w-[36%] rounded-xl border-2 border-[#0D152A] shadow-xl"
        />
      )}
    </div>
  );
}

function HeroWires() {
  return (
    <>
      <div className="pointer-events-none absolute left-[42%] top-[20%] hidden lg:block h-[44%] w-[16%] rounded-[34px] border-[10px] border-[#C026D3] opacity-95" />
      <div className="pointer-events-none absolute left-[47%] top-[20%] hidden lg:block h-[44%] w-[14%] rounded-[34px] border-[10px] border-[#EAB308] opacity-95" />
      <div className="pointer-events-none absolute left-[52%] top-[20%] hidden lg:block h-[44%] w-[14%] rounded-[34px] border-[10px] border-[#7C3AED] opacity-95" />

      <div className="pointer-events-none absolute -right-8 top-[22%] h-4 w-[74%] bg-[#C026D3] opacity-95" />
      <div className="pointer-events-none absolute -right-20 top-[26%] h-4 w-[82%] bg-[#EAB308] opacity-95" />
      <div className="pointer-events-none absolute -right-28 top-[30%] h-4 w-[90%] bg-[#7C3AED] opacity-95" />
    </>
  );
}

function CtaWires() {
  return (
    <>
      <div className="pointer-events-none absolute left-[20%] top-[26%] hidden lg:block h-[46%] w-[22%] rounded-[34px] border-[10px] border-[#C026D3] opacity-95" />
      <div className="pointer-events-none absolute left-[24%] top-[30%] hidden lg:block h-[42%] w-[22%] rounded-[34px] border-[10px] border-[#EAB308] opacity-95" />
      <div className="pointer-events-none absolute left-[28%] top-[34%] hidden lg:block h-[38%] w-[22%] rounded-[34px] border-[10px] border-[#7C3AED] opacity-95" />

      <div className="pointer-events-none absolute -right-10 bottom-[18%] h-4 w-[76%] bg-[#C026D3] opacity-95" />
      <div className="pointer-events-none absolute -right-20 bottom-[12%] h-4 w-[84%] bg-[#7C3AED] opacity-95" />
    </>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <div
        className="relative overflow-hidden bg-gradient-to-r from-[#071027] via-[#0A1432] to-[#2A1448]"
        style={darkSurfaceStyle}
      >
        <HeroWires />

        <LandingHeader.Root
          className="bg-transparent border-foreground/10"
          style={darkSurfaceStyle}
        >
          <LandingHeader.Left>
            <LandingHeader.Logo
              src="/logo.svg"
              alt="NutrePlus"
            />
          </LandingHeader.Left>
          <LandingHeader.Center>
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
              className="hidden sm:inline-flex bg-primary-700"
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
                  className="w-full bg-white text-primary-700"
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

        <HeroSection
          size="full"
          sectionClassName="relative bg-transparent items-stretch pt-8 pb-14 md:pb-20"
        >
          <div
            id="inicio"
            className="w-full max-w-7xl mx-auto grid gap-10 md:grid-cols-[1fr_0.85fr] items-center"
          >
            <RevealContainer once className="flex flex-col gap-4">
              <Title
                content={nutreLandingHero.title}
                className="text-white text-5xl sm:text-6xl"
              />
              <Subtitle
                content={nutreLandingHero.subtitle}
                className="text-white/85 text-2xl"
              />
              <Paragraph
                content={nutreLandingHero.description}
                className="text-white/70 max-w-lg"
              />
              <div className="flex flex-wrap gap-3 mt-2">
                <Button
                  label={nutreLandingHero.primaryCta}
                  variant="outlined"
                  className="bg-white text-primary-700 hover:bg-white/90"
                />
              </div>
            </RevealContainer>

            <ZoomContainer
              once
              scale={1}
              className="flex justify-center md:justify-end"
            >
              <Image
                src="/images/mobile1.png"
                alt="Tela inicial do aplicativo NutrePlus"
                width={560}
                height={760}
                className="w-full max-w-[260px] sm:max-w-[320px] h-auto drop-shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
              />
            </ZoomContainer>
          </div>

          <ZoomContainer
            once
            scale={1}
            className="w-full max-w-6xl mx-auto mt-10 md:mt-14"
          >
            <Image
              src="/images/tablet2.png"
              alt="Painel desktop NutrePlus"
              width={920}
              height={580}
              className="w-full h-auto"
            />
          </ZoomContainer>

          <div className="w-full max-w-6xl mx-auto mt-10 md:mt-14 grid gap-8 md:grid-cols-[0.65fr_1fr] items-center">
            <ZoomContainer
              once
              scale={1}
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/images/mobile4.png"
                alt="Aplicativo NutrePlus em visual mobile"
                width={420}
                height={680}
                className="w-full max-w-[210px] sm:max-w-[240px] h-auto rounded-xl"
              />
            </ZoomContainer>

            <RevealContainer once className="flex flex-col gap-5 md:pl-10">
              <Title
                content={nutreLandingMidHero.title}
                className="text-white text-4xl"
              />
              <Paragraph
                content={nutreLandingMidHero.description}
                className="text-white/70 max-w-md"
              />
              <div className="flex flex-wrap gap-3">
                <Button
                  label={nutreLandingMidHero.primaryCta}
                  variant="outlined"
                  className="bg-white text-primary-700 hover:bg-white/90"
                />
              </div>
            </RevealContainer>
          </div>
        </HeroSection>
      </div>

      <Section size="full" sectionClassName="bg-[#ECEEF2] items-stretch py-14">
        <div
          id="parceiros"
          className="w-full max-w-7xl mx-auto flex flex-col items-center gap-4"
        >
          <Title
            content="Nossos principais parceiros"
            className="text-4xl sm:text-5xl text-center"
          />
          <FadeContainer once className="w-full mt-2">
            <BrandMarquee
              logos={nutreLandingBrandLogos}
              speed={30}
              itemsGap="close"
            />
          </FadeContainer>
        </div>
      </Section>

      {nutreLandingShowcaseSections.map((section, index) => (
        <Section
          key={section.title}
          size="full"
          sectionClassName="bg-[#E3E8EF] items-stretch py-14"
        >
          <div
            id={section.anchor}
            className="w-full max-w-7xl mx-auto grid gap-10 md:grid-cols-2 items-center"
          >
            <RevealContainer
              once={index === 0}
              className={section.align === "image-left" ? "order-2" : "order-1"}
            >
              <Title content={section.title} className="text-5xl" />
              <Paragraph
                content={section.description}
                className="text-foreground/75 mt-4 max-w-xl"
              />
            </RevealContainer>

            <ZoomContainer
              once={index !== 1}
              scale={1}
              className={section.align === "image-left" ? "order-1" : "order-2"}
            >
              <ShowcaseVisual section={section} />
            </ZoomContainer>
          </div>
        </Section>
      ))}

      <Section
        size="full"
        sectionClassName="relative overflow-hidden bg-gradient-to-r from-[#08112A] via-[#0E1839] to-[#2A1448] text-white items-stretch py-16"
      >
        <CtaWires />

        <div
          id="contato"
          className="w-full max-w-7xl mx-auto grid gap-10 md:grid-cols-[0.7fr_1fr] items-center relative z-10"
        >
          <ZoomContainer
            once
            scale={1}
            className="flex justify-center md:justify-start"
          >
            <Image
              src="/images/mobile1.png"
              alt="Aplicativo NutrePlus em destaque final"
              width={420}
              height={680}
              className="w-full max-w-[210px] sm:max-w-[240px] h-auto"
            />
          </ZoomContainer>
          <RevealContainer once className="flex flex-col gap-6 md:pl-8">
            <Title
              content={nutreLandingBottomCta.title}
              className="text-white text-4xl"
            />
            <Paragraph
              content={nutreLandingBottomCta.description}
              className="text-white/70 max-w-md"
            />
            <Button
              label={nutreLandingBottomCta.primaryCta}
              variant="outlined"
              className="bg-white text-primary-700 hover:bg-white/90"
            />
          </RevealContainer>
        </div>
      </Section>

      <Footer.Root
        className="bg-[#08112A] text-white"
        bordered
        style={darkSurfaceStyle}
      >
        <Footer.Top columns={5}>
          {nutreLandingFooterLinks.map((column) => (
            <Footer.Column key={column.title} className="items-start">
              <Subtitle
                content={column.title}
                element="h4"
                className="text-sm text-white"
              />
              <div className="flex flex-col gap-2 mt-3">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Footer.Column>
          ))}
          <Footer.Column>
            <div className="flex items-center gap-2">
              <MobileSeal />
            </div>
          </Footer.Column>
        </Footer.Top>

        <Footer.SocialRow
          items={nutreLandingSocialLinks}
          iconsClassName="text-white"
          iconsWeight="fill"
          className="bg-transparent"
          bordered
        ></Footer.SocialRow>
      </Footer.Root>
    </div>
  );
}
