export function ContactDetails() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Informações de Contato</h3>
      <div className="space-y-2 text-gray-600">
        <p><strong>Endereço:</strong> Rua das Flores, 123 - Centro, São Paulo - SP</p>
        <p><strong>Telefone:</strong> (11) 99999-9999</p>
        <p><strong>Email:</strong> contato@sorrisovivo.com</p>
        <p><strong>Horário:</strong> Seg-Sex: 8h-18h | Sáb: 8h-12h</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-primary hover:text-primary/80" aria-label="Facebook">Facebook</a>
        <a href="#" className="text-primary hover:text-primary/80" aria-label="Instagram">Instagram</a>
        <a href="#" className="text-primary hover:text-primary/80" aria-label="LinkedIn">LinkedIn</a>
      </div>
    </div>
  );
}