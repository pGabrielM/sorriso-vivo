import { type IService, type ITeamMember, type ITestimonial } from "@/types/landings";

export const services: IService[] = [
  {
    icon: "🦷",
    titleKey: "services_data.1.title",
    descriptionKey: "services_data.1.description",
    featuresKeys: [
      "services_data.1.features.1",
      "services_data.1.features.2",
      "services_data.1.features.3",
    ],
  },
  {
    icon: "✨",
    titleKey: "services_data.2.title",
    descriptionKey: "services_data.2.description",
    featuresKeys: [
      "services_data.2.features.1",
      "services_data.2.features.2",
      "services_data.2.features.3",
    ],
  },
  {
    icon: "🔧",
    titleKey: "services_data.3.title",
    descriptionKey: "services_data.3.description",
    featuresKeys: [
      "services_data.3.features.1",
      "services_data.3.features.2",
      "services_data.3.features.3",
    ],
  },
  {
    icon: "😊",
    titleKey: "services_data.4.title",
    descriptionKey: "services_data.4.description",
    featuresKeys: [
      "services_data.4.features.1",
      "services_data.4.features.2",
      "services_data.4.features.3",
    ],
  },
  {
    icon: "🛡️",
    titleKey: "services_data.5.title",
    descriptionKey: "services_data.5.description",
    featuresKeys: [
      "services_data.5.features.1",
      "services_data.5.features.2",
      "services_data.5.features.3",
    ],
  },
  {
    icon: "💉",
    titleKey: "services_data.6.title",
    descriptionKey: "services_data.6.description",
    featuresKeys: [
      "services_data.6.features.1",
      "services_data.6.features.2",
      "services_data.6.features.3",
    ],
  },
];

export const team: ITeamMember[] = [
  {
    nameKey: "team_data.1.name",
    roleKey: "team_data.1.role",
    specialtyKey: "team_data.1.specialty",
    image: "/images/team/ana-paula-ferreira.jpg",
    croKey: "team_data.1.cro",
    bioKey: "team_data.1.bio",
  },
  {
    nameKey: "team_data.2.name",
    roleKey: "team_data.2.role",
    specialtyKey: "team_data.2.specialty",
    image: "/images/team/carlos-eduardo-mendes.jpg",
    croKey: "team_data.2.cro",
    bioKey: "team_data.2.bio",
  },
  {
    nameKey: "team_data.3.name",
    roleKey: "team_data.3.role",
    specialtyKey: "team_data.3.specialty",
    image: "/images/team/mariana-costa-lima.jpg",
    croKey: "team_data.3.cro",
    bioKey: "team_data.3.bio",
  },
  {
    nameKey: "team_data.4.name",
    roleKey: "team_data.4.role",
    specialtyKey: "team_data.4.specialty",
    image: "/images/team/rafael-oliveira-santos.jpg",
    croKey: "team_data.4.cro",
    bioKey: "team_data.4.bio",
  },
];

export const testimonials: ITestimonial[] = [
  {
    nameKey: "testimonials_data.1.name",
    image: "/images/testimonials/maria-helena-santos.jpg",
    rating: "testimonials_data.1.rating",
    textKey: "testimonials_data.1.text",
    date: "2024-10-01",
    treatmentKey: "testimonials_data.1.treatment",
  },
  {
    nameKey: "testimonials_data.2.name",
    image: "/images/testimonials/joao-pedro-silva.jpg",
    rating: "testimonials_data.2.rating",
    textKey: "testimonials_data.2.text",
    date: "2024-09-28",
    treatmentKey: "testimonials_data.2.treatment",
  },
  {
    nameKey: "testimonials_data.3.name",
    image: "/images/testimonials/ana-carolina-ribeiro.jpg",
    rating: "testimonials_data.3.rating",
    textKey: "testimonials_data.3.text",
    date: "2024-09-20",
    treatmentKey: "testimonials_data.3.treatment",
  },
  {
    nameKey: "testimonials_data.4.name",
    image: "/images/testimonials/roberto-almeida-costa.jpg",
    rating: "testimonials_data.4.rating",
    textKey: "testimonials_data.4.text",
    date: "2024-09-15",
    treatmentKey: "testimonials_data.4.treatment",
  },
  {
    nameKey: "testimonials_data.5.name",
    image: "/images/testimonials/juliana-martins-prado.jpg",
    rating: "testimonials_data.5.rating",
    textKey: "testimonials_data.5.text",
    date: "2024-09-10",
    treatmentKey: "testimonials_data.5.treatment",
  },
];

export const contactInfo = {
  clinic: "Sorriso Vivo Odontologia",
  address: {
    street: "Rua Visconde de Nácar, 1440",
    neighborhood: "Batel",
    city: "Curitiba",
    state: "PR",
    zipCode: "80410-201",
    full: "Rua Visconde de Nácar, 1440 - Batel, Curitiba - PR, 80410-201",
  },
  contact: {
    phone: "(41) 3025-4890",
    whatsapp: "(41) 99876-5432",
    email: "contato@sorrisovivo.odonto.br",
  },
  hours: {
    weekdays: "Segunda a Sexta: 8h às 19h",
    saturday: "Sábado: 8h às 13h",
    sunday: "Domingo: Fechado",
  },
  social: {
    instagram: "@sorrisovivoct",
    facebook: "sorrisovivoOdontologia",
    linkedin: "sorriso-vivo-odontologia",
  },
  mapUrl: "https://maps.google.com/?q=Rua+Visconde+de+Nácar+1440+Batel+Curitiba",
};
