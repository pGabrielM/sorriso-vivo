import { type IService, type ITeamMember, type ITestimonial } from "@/types/landings";

export const services: IService[] = [
  {
    icon: "🦷",
    title: "Clareamento Dental",
    description:
      "Recupere o branco natural dos seus dentes com tratamentos modernos, seguros e indolores",
    features: [
      "Clareamento a laser de última geração",
      "Clareamento caseiro supervisionado",
      "Resultado duradouro e natural",
    ],
  },
  {
    icon: "✨",
    title: "Lentes de Contato Dental",
    description: "Transforme seu sorriso com lentes ultra-finas de porcelana de alta qualidade",
    features: [
      "Design 100% personalizado",
      "Aspecto natural e harmônico",
      "Procedimento minimamente invasivo",
    ],
  },
  {
    icon: "🔧",
    title: "Implantes Dentários",
    description: "Solução definitiva e segura para substituição de dentes com tecnologia avançada",
    features: [
      "Implantes de titânio premium",
      "Alta taxa de sucesso comprovada",
      "Aparência e função naturais",
    ],
  },
  {
    icon: "😊",
    title: "Ortodontia Moderna",
    description: "Alinhe seus dentes com aparelhos de última geração, confortáveis e eficientes",
    features: [
      "Aparelhos fixos estéticos",
      "Alinhadores invisíveis (tipo Invisalign)",
      "Planejamento digital 3D",
    ],
  },
  {
    icon: "🛡️",
    title: "Prevenção e Check-up Completo",
    description:
      "Mantenha sua saúde bucal impecável com avaliações periódicas e cuidados preventivos",
    features: [
      "Limpeza profissional detalhada",
      "Avaliação odontológica completa",
      "Plano preventivo personalizado",
    ],
  },
  {
    icon: "💉",
    title: "Endodontia (Tratamento de Canal)",
    description: "Tratamento endodôntico moderno, praticamente indolor e com recuperação rápida",
    features: [
      "Tecnologia de ponta com microscopia",
      "Procedimento confortável",
      "Acompanhamento pós-tratamento",
    ],
  },
];

export const team: ITeamMember[] = [
  {
    name: "Dra. Ana Paula Ferreira",
    role: "Cirurgiã-Dentista",
    specialty: "Implantodontia e Prótese Dentária",
    image: "/images/team/ana-paula-ferreira.jpg",
    cro: "CRO-PR 28.452",
    bio: "Especialista em implantes dentários e reabilitação oral com mais de 15 anos de experiência. Pós-graduada pela ABO-PR.",
  },
  {
    name: "Dr. Carlos Eduardo Mendes",
    role: "Cirurgião-Dentista",
    specialty: "Ortodontia e Ortopedia Facial",
    image: "/images/team/carlos-eduardo-mendes.jpg",
    cro: "CRO-PR 31.789",
    bio: "Especialista em ortodontia moderna e alinhadores invisíveis. Membro da Sociedade Brasileira de Ortodontia.",
  },
  {
    name: "Dra. Mariana Costa Lima",
    role: "Cirurgiã-Dentista",
    specialty: "Estética Dental e Harmonização Orofacial",
    image: "/images/team/mariana-costa-lima.jpg",
    cro: "CRO-PR 29.634",
    bio: "Especialista em odontologia estética, lentes de contato dental e harmonização orofacial. Certificação internacional em design de sorriso.",
  },
  {
    name: "Dr. Rafael Oliveira Santos",
    role: "Cirurgião-Dentista",
    specialty: "Endodontia e Dentística",
    image: "/images/team/rafael-oliveira-santos.jpg",
    cro: "CRO-PR 33.217",
    bio: "Especialista em tratamentos de canal com microscopia operatória. Certificado pela Sociedade Brasileira de Endodontia.",
  },
];

export const testimonials: ITestimonial[] = [
  {
    name: "Maria Helena Santos",
    image: "/images/testimonials/maria-helena-santos.jpg",
    rating: 5,
    text: "Excelente atendimento! Fiz dois implantes dentários com a Dra. Ana Paula e o resultado superou minhas expectativas. Clínica moderna, equipe atenciosa e muito profissional. Recomendo de olhos fechados!",
    date: "2024-10-01",
    treatment: "Implantes Dentários",
  },
  {
    name: "João Pedro Silva",
    image: "/images/testimonials/joao-pedro-silva.jpg",
    rating: 5,
    text: "Realizei o clareamento dental a laser e estou impressionado com o resultado. Procedimento rápido, indolor e meu sorriso ficou muito mais bonito. A equipe é extremamente competente!",
    date: "2024-09-28",
    treatment: "Clareamento Dental a Laser",
  },
  {
    name: "Ana Carolina Ribeiro",
    image: "/images/testimonials/ana-carolina-ribeiro.jpg",
    rating: 5,
    text: "Fiz lentes de contato dental com a Dra. Mariana e meu sorriso ficou incrível! O atendimento foi impecável desde a primeira consulta. Clínica linda, limpa e muito bem equipada. Vale cada centavo!",
    date: "2024-09-20",
    treatment: "Lentes de Contato Dental",
  },
  {
    name: "Roberto Almeida Costa",
    image: "/images/testimonials/roberto-almeida-costa.jpg",
    rating: 5,
    text: "Estava com medo de fazer tratamento de canal, mas o Dr. Rafael foi excepcional. Procedimento sem dor, muito cuidadoso e com toda tecnologia. Mudou minha percepção sobre dentistas!",
    date: "2024-09-15",
    treatment: "Tratamento de Canal (Endodontia)",
  },
  {
    name: "Juliana Martins Prado",
    image: "/images/testimonials/juliana-martins-prado.jpg",
    rating: 5,
    text: "Comecei meu tratamento ortodôntico com alinhadores invisíveis e já vejo muita diferença! Dr. Carlos é muito atencioso e explica tudo detalhadamente. Adorei a experiência na clínica!",
    date: "2024-09-10",
    treatment: "Ortodontia com Alinhadores Invisíveis",
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
