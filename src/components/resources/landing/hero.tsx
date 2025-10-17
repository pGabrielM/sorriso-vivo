"use client";

import { Button } from "@/components/commons/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import anime from "@/lib/anime";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = anime.timeline();

    if (titleRef.current) {
      tl.add(titleRef.current, {
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "out-expo",
      });
    }

    if (descRef.current) {
      tl.add(
        descRef.current,
        {
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 700,
          easing: "out-expo",
        },
        "-=400"
      );
    }

    if (buttonsRef.current) {
      tl.add(
        buttonsRef.current,
        {
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 600,
          easing: "out-expo",
        },
        "-=300"
      );
    }

    if (imageRef.current) {
      tl.add(
        imageRef.current,
        {
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 800,
          easing: "out-expo",
        },
        "-=600"
      );
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2">
              <span className="text-sm font-semibold text-teal-700">{t("badge")}</span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl leading-tight font-bold text-gray-900 opacity-0 md:text-5xl lg:text-6xl"
            >
              {t("title1")}
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {t("title2")}
              </span>
            </h1>

            <p ref={descRef} className="text-xl leading-relaxed text-gray-600 opacity-0">
              {t("subtitle")}
            </p>

            <div ref={buttonsRef} className="flex flex-col gap-4 opacity-0 sm:flex-row">
              <Button
                size="lg"
                className="bg-teal-600 text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl"
                asChild
              >
                <a href="#agendamento">{t("cta1")}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-700 hover:bg-teal-50"
                asChild
              >
                <a href="#servicos">{t("cta2")}</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div>
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl font-bold text-transparent">
                  15+
                </div>
                <div className="text-sm text-gray-600">{t("stats.experience")}</div>
              </div>
              <div>
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl font-bold text-transparent">
                  8.500+
                </div>
                <div className="text-sm text-gray-600">{t("stats.smilesMade")}</div>
              </div>
              <div>
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl font-bold text-transparent">
                  98%
                </div>
                <div className="text-sm text-gray-600">{t("stats.satisfaction")}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative h-[500px] opacity-0 lg:h-[600px]">
            <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-gradient-to-br from-teal-400 to-cyan-500" />
            <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero/dentista-clinica.jpg"
                alt="Clínica Odontológica Sorriso Vivo - Batel Curitiba"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-gray-100 bg-white p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t("floatingCards.modern")}</div>
                  <div className="text-sm text-gray-600">{t("floatingCards.modernDesc")}</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 rounded-xl border border-gray-100 bg-white p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t("floatingCards.humanized")}</div>
                  <div className="text-sm text-gray-600">{t("floatingCards.humanizedDesc")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
