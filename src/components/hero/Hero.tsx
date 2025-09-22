import Image from 'next/image';
import { Button } from '../ui';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sorriso Vivo: <span className="text-primary">Odontologia Moderna</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cuidamos do seu sorriso com tecnologia de ponta e profissionais especializados. Seu bem-estar é nossa prioridade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Agende agora</Button>
              <Button variant="outline" size="lg">Conheça nossa equipe</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/clinic-hero.jpg"
              alt="Clínica Sorriso Vivo - Dentista atendendo paciente"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}