import { Navbar } from '../components/nav';
import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { Team } from '../components/team';
import { Testimonials } from '../components/testimonials';
import { BookingForm } from '../components/booking';
import { ContactForm, ContactDetails } from '../components/contact';
import { Footer } from '../components/footer';

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
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-600">Estamos aqui para ajudar. Envie uma mensagem ou visite-nos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
