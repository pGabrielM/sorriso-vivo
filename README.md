# Sorriso Vivo - Landing Page Profissional

Uma landing page completa e profissional para a clínica odontológica Sorriso Vivo, construída com as melhores práticas de desenvolvimento web moderno.

## ✨ Características

- **Design Profissional**: Interface moderna com shadcn/ui e Tailwind CSS v4
- **Animações Suaves**: Transições fluidas com Framer Motion
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Acessível**: Componentes com suporte completo a acessibilidade
- **Performance**: Build otimizado com Next.js 15 e Turbopack
- **TypeScript**: Tipagem completa para maior segurança

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes UI
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **ESLint** - Linting e qualidade de código

## 📦 Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone <repository-url>
   cd sorriso-vivo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no navegador:**
   [http://localhost:3000](http://localhost:3000)

## 🛠️ Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código com ESLint

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas Next.js (App Router)
│   ├── layout.tsx         # Layout principal com metadados
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais e animações
├── components/            # Componentes organizados por domínio
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── booking/          # Formulário de agendamento
│   ├── contact/          # Formulários e detalhes de contato
│   ├── footer/           # Rodapé da aplicação
│   ├── hero/             # Seção principal
│   ├── nav/              # Barra de navegação
│   ├── services/         # Serviços oferecidos
│   ├── team/             # Equipe médica
│   └── testimonials/     # Depoimentos de pacientes
├── constants/            # Dados constantes e mock
│   ├── services.ts       # Dados dos serviços
│   ├── team.ts           # Dados da equipe
│   └── testimonials.ts   # Dados dos depoimentos
├── types/                # Definições TypeScript
│   └── types.ts          # Interfaces e tipos
└── utils/                # Utilitários e helpers
    ├── cn.ts             # Função para combinar classes CSS
    └── utils.ts          # Funções utilitárias
```

## 🎨 Paleta de Cores

- **Primária**: Azul céu (#0ea5e9) - Confiança e profissionalismo
- **Secundária**: Âmbar (#f59e0b) - Energia e vitalidade
- **Background**: Tons neutros para legibilidade

## 📱 Seções da Landing Page

1. **Hero** - Apresentação com chamada para ação
2. **Serviços** - Tratamentos odontológicos oferecidos
3. **Equipe** - Profissionais qualificados com fotos
4. **Depoimentos** - Avaliações de pacientes satisfeitos
5. **Agendamento** - Formulário para marcar consultas
6. **Contato** - Informações e formulário de contato
7. **Footer** - Links úteis e informações da clínica

## � Convenções do Projeto

### Nomenclatura de Arquivos
- **Componentes**: `kebab-case.tsx` (ex: `hero-section.tsx`, `booking-form.tsx`)
- **Pastas**: `kebab-case` (ex: `contact-details`, `team-members`)
- **Índices**: `index.ts` para exportar módulos
- **Tipos**: `PascalCase` para interfaces (ex: `TeamMember`, `Service`)

### Estrutura de Componentes
- Cada componente tem sua própria pasta
- `index.ts` para exportar o componente principal
- Componentes relacionados ficam na mesma pasta
- Separação clara entre UI base e componentes de negócio

### Padrões de Código
- **TypeScript** obrigatório em todos os arquivos
- **ESLint** configurado para qualidade de código
- **Prettier** para formatação consistente
- Diretiva `'use client'` para componentes que usam hooks/Framer Motion

## 📄 Licença

Este projeto é propriedade da Clínica Sorriso Vivo.
