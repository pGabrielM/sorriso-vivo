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
        <section id="contato" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Entre em Contato
              </h2>
              <p className="text-xl text-gray-600">
                Estamos aqui para ajudar. Envie uma mensagem ou visite-nos.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
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
