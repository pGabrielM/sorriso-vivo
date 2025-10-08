import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons/card';

export function ContactDetails() {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Endereço',
      details: 'Rua das Flores, 123 - Centro\nSão Paulo - SP, 01234-567'
    },
    {
      icon: '📞',
      title: 'Telefone',
      details: '(11) 3456-7890\n(11) 98765-4321'
    },
    {
      icon: '📧',
      title: 'Email',
      details: 'contato@sorrisovivo.com.br\natendimento@sorrisovivo.com.br'
    },
    {
      icon: '🕐',
      title: 'Horário de Atendimento',
      details: 'Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações de Contato</CardTitle>
          <CardDescription>Entre em contato através de qualquer um dos canais abaixo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">{item.details}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-2">Pronto para transformar seu sorriso?</h3>
          <p className="text-blue-100 mb-4">
            Agende sua avaliação gratuita e descubra como podemos ajudar você!
          </p>
          <a
            href="#agendamento"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Agendar Avaliação Gratuita
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
