import { Navbar } from "@/components/resources/landing/navbar";
import { Hero } from "@/components/resources/landing/hero";
import { Services } from "@/components/resources/landing/services";
import { Team } from "@/components/resources/landing/team";
import { Testimonials } from "@/components/resources/landing/testimonials";
import { BookingForm } from "@/components/resources/landing/booking-form";
import { ContactForm } from "@/components/resources/landing/contact-form";
import { ContactDetails } from "@/components/resources/landing/contact-details";
import { Footer } from "@/components/resources/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <BookingForm />
        <section id="contato" className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-teal-200 bg-teal-100 px-4 py-2">
                <span className="text-sm font-semibold text-teal-700">📞 Entre em Contato</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Estamos Aqui Para Você
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Nossa equipe está pronta para atender você com excelência. Entre em contato ou
                visite nossa clínica no coração do Batel em Curitiba.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <ContactForm />
              <ContactDetails />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
