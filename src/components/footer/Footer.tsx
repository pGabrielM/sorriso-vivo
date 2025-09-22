export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sorriso Vivo</h3>
            <p className="text-gray-400">Cuidando do seu sorriso com dedicação e tecnologia.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white">Serviços</a></li>
              <li><a href="#team" className="hover:text-white">Equipe</a></li>
              <li><a href="#testimonials" className="hover:text-white">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-gray-400">Rua das Flores, 123<br />Centro, São Paulo - SP</p>
            <p className="text-gray-400 mt-2">(11) 99999-9999</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">📘</a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">📷</a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sorriso Vivo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}