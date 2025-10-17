import { useTranslations } from "next-intl";
import { type IService } from "@/types/landings";
import { Button } from "@/components/commons/button";

interface ServiceCardProps {
  service: IService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const t = useTranslations("services");
  const tGlobal = useTranslations();

  const title = service.titleKey ? tGlobal(service.titleKey) : service.title || "Serviço";
  const description = service.descriptionKey
    ? tGlobal(service.descriptionKey)
    : service.description || "";
  const features = service.featuresKeys
    ? service.featuresKeys.map((key) => tGlobal(key))
    : service.features || [];

  return (
    <div className="service-card group relative opacity-0">
      {/* Icon Container with Gradient */}
      <div className="absolute -top-8 left-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-teal-600 to-blue-700 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
        <span className="text-5xl drop-shadow-lg filter">{service.icon}</span>
      </div>

      {/* Card Content */}
      <div className="rounded-2xl bg-white px-6 pt-16 pb-6 transition-all duration-300">
        <div className="mb-2">
          <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
          <p className="mb-6 text-base leading-relaxed text-gray-600">{description}</p>
        </div>

        {/* Features List */}
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <div className="mt-0.5 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-500">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className="group/btn w-full rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 py-3 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-teal-700 hover:shadow-lg"
          asChild
        >
          <a href="#agendamento" className="flex items-center justify-center gap-2">
            {t("learnMore")}
            <svg
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Button>
      </div>
    </div>
  );
}
