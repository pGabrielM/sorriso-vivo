import { IService, ITeamMember, ITestimonial } from '@/types/landing';

export const services: IService[] = [
  {
    icon: '🦷',
    title: 'Clareamento Dental',
    description: 'Recupere o branco natural dos seus dentes com técnicas modernas e seguras',
    features: ['Clareamento a laser', 'Clareamento caseiro', 'Resultado duradouro']
  },
  {
    icon: '✨',
    title: 'Lentes de Contato Dental',
    description: 'Transforme seu sorriso com lentes ultra-finas de porcelana',
    features: ['Design personalizado', 'Resultado natural', 'Procedimento rápido']
  },
  {
    icon: '🔧',
    title: 'Implantes Dentários',
    description: 'Solução definitiva para substituição de dentes perdidos',
    features: ['Implantes de titânio', 'Alta durabilidade', 'Aparência natural']
  },
  {
    icon: '😊',
    title: 'Ortodontia',
    description: 'Alinhe seus dentes com aparelhos modernos e discretos',
    features: ['Aparelho fixo', 'Alinhadores invisíveis', 'Tratamento personalizado']
  },
  {
    icon: '🛡️',
    title: 'Prevenção e Check-up',
    description: 'Mantenha sua saúde bucal em dia com avaliações regulares',
    features: ['Limpeza profissional', 'Avaliação completa', 'Orientação preventiva']
  },
  {
    icon: '💉',
    title: 'Tratamento de Canal',
    description: 'Tratamento endodôntico com tecnologia de ponta',
    features: ['Procedimento indolor', 'Tecnologia moderna', 'Recuperação rápida']
  }
];

export const team: ITeamMember[] = [
  {
    name: 'Dra. Ana Paula Silva',
    role: 'Cirurgiã-Dentista',
    specialty: 'Implantodontia e Prótese',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80',
    cro: 'CRO-SP 12345',
    bio: 'Especialista em implantes dentários com mais de 15 anos de experiência'
  },
  {
    name: 'Dr. Carlos Eduardo Santos',
    role: 'Cirurgião-Dentista',
    specialty: 'Ortodontia',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80',
    cro: 'CRO-SP 23456',
    bio: 'Especialista em ortodontia e alinhadores invisíveis'
  },
  {
    name: 'Dra. Mariana Costa',
    role: 'Cirurgiã-Dentista',
    specialty: 'Estética Dental',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=80',
    cro: 'CRO-SP 34567',
    bio: 'Especialista em lentes de contato e harmonização orofacial'
  }
];

export const testimonials: ITestimonial[] = [
  {
    name: 'Maria Santos',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
    rating: 5,
    text: 'Excelente atendimento! Fiz implantes e o resultado ficou perfeito. Equipe muito atenciosa e profissional.',
    date: '2024-10-01',
    treatment: 'Implantes Dentários'
  },
  {
    name: 'João Silva',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
    rating: 5,
    text: 'Realizei o clareamento dental e estou muito satisfeito com o resultado. Recomendo!',
    date: '2024-09-15',
    treatment: 'Clareamento Dental'
  },
  {
    name: 'Ana Paula',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80',
    rating: 5,
    text: 'Fiz lentes de contato dental e meu sorriso ficou incrível! Equipe super capacitada.',
    date: '2024-09-20',
    treatment: 'Lentes de Contato'
  }
];
