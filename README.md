# Sorriso Vivo - Landing Page

Uma landing page completa para a clínica odontológica Sorriso Vivo, construída com Next.js, TypeScript e Tailwind CSS.

## Passos para rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Instruções opcionais para instalar bibliotecas extras

Para funcionalidades adicionais, instale as seguintes bibliotecas:

```bash
npm install @shadcn/ui lucide-react framer-motion class-variance-authority
```

**Nota:** Sem instalar essas bibliotecas, o projeto utiliza componentes locais simulando a API do shadcn/ui. Os ícones são representados por emojis e as animações são básicas.

## Estrutura do Projeto

- `app/`: Páginas Next.js (layout.tsx, page.tsx)
- `components/`: Componentes organizados por seções
- `data/`: Dados mock (serviços, equipe, depoimentos)
- `lib/`: Utilitários (cn.ts para classes, types.ts para tipos)
- `public/images/`: Imagens da aplicação

## Funcionalidades

- Design responsivo e acessível
- Formulários de agendamento e contato com validação
- Seções: Hero, Serviços, Equipe, Depoimentos, Agendamento, Contato, Footer
- Paleta de cores personalizada (azul primário, dourado secundário)

## Tecnologias

- Next.js 15
- TypeScript
- Tailwind CSS v4
- Componentes UI simulando shadcn/ui
