# 🦷 Sorriso Vivo - Clínica Odontológica# Sorriso Vivo - Landing Page Profissional



![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)Uma landing page completa e profissional para a clínica odontológica Sorriso Vivo, construída com as melhores práticas de desenvolvimento web moderno.

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)## ✨ Características

![Anime.js](https://img.shields.io/badge/Anime.js-4.2.0-red)

- **Design Profissional**: Interface moderna com shadcn/ui e Tailwind CSS v4

Site moderno e profissional para clínica odontológica com animações suaves e design responsivo.- **Animações Suaves**: Transições fluidas com Framer Motion

- **Responsivo**: Otimizado para desktop, tablet e mobile

## ✨ Características- **Acessível**: Componentes com suporte completo a acessibilidade

- **Performance**: Build otimizado com Next.js 15 e Turbopack

- 🎨 **Design Profissional**: Interface moderna e limpa focada em odontologia- **TypeScript**: Tipagem completa para maior segurança

- 🚀 **Performance**: Next.js 15 com Turbopack para builds ultrarrápidos

- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos## 🚀 Tecnologias

- ✨ **Animações Suaves**: Animações profissionais com Anime.js v4

- 🎯 **SEO Otimizado**: Meta tags e estrutura otimizada para motores de busca- **Next.js 15** - Framework React com App Router

- ♿ **Acessível**: Componentes acessíveis com Radix UI- **TypeScript** - Tipagem estática

- **Tailwind CSS v4** - Framework CSS utilitário

## 🏗️ Estrutura do Projeto- **shadcn/ui** - Biblioteca de componentes UI

- **Framer Motion** - Animações e transições

```- **Lucide React** - Ícones modernos

src/- **ESLint** - Linting e qualidade de código

├── app/                      # Next.js App Router

│   ├── layout.tsx           # Layout principal## 📦 Instalação e Execução

│   ├── page.tsx             # Página inicial

│   └── globals.css          # Estilos globais1. **Clone o repositório:**

├── components/   ```bash

│   ├── landing/             # Componentes da landing page   git clone <repository-url>

│   │   ├── navbar.tsx       # Navegação principal   cd sorriso-vivo

│   │   ├── hero.tsx         # Seção hero   ```

│   │   ├── services.tsx     # Seção de serviços

│   │   ├── team.tsx         # Seção da equipe2. **Instale as dependências:**

│   │   ├── testimonials.tsx # Depoimentos   ```bash

│   │   ├── booking-form.tsx # Formulário de agendamento   npm install

│   │   ├── contact-form.tsx # Formulário de contato   ```

│   │   └── footer.tsx       # Rodapé

│   └── ui/                  # Componentes UI reutilizáveis3. **Execute o servidor de desenvolvimento:**

│       ├── button.tsx   ```bash

│       ├── card.tsx   npm run dev

│       ├── input.tsx   ```

│       └── ...

├── helpers/                 # Funções auxiliares4. **Abra no navegador:**

│   └── landing-helper.ts    # Dados de serviços, equipe, depoimentos   [http://localhost:3000](http://localhost:3000)

├── lib/                     # Bibliotecas e utilitários

│   ├── anime.ts            # Wrapper do Anime.js## 🛠️ Scripts Disponíveis

│   └── cn.ts               # Utilitário classnames

└── types/                   # Definições TypeScript- `npm run dev` - Servidor de desenvolvimento

    └── landing.d.ts        # Interfaces da landing page- `npm run build` - Build de produção

```- `npm run start` - Servidor de produção

- `npm run lint` - Verificação de código com ESLint

## 🚀 Começando

## 📁 Estrutura do Projeto

### Pré-requisitos

```

- Node.js 20+src/

- npm ou yarn├── app/                    # Páginas Next.js (App Router)

│   ├── layout.tsx         # Layout principal com metadados

### Instalação│   ├── page.tsx           # Página inicial

│   └── globals.css        # Estilos globais e animações

```bash├── components/            # Componentes organizados por domínio

# Clone o repositório│   ├── ui/               # Componentes base (shadcn/ui)

git clone <repository-url>│   ├── booking/          # Formulário de agendamento

│   ├── contact/          # Formulários e detalhes de contato

# Entre na pasta do projeto│   ├── footer/           # Rodapé da aplicação

cd sorriso-vivo│   ├── hero/             # Seção principal

│   ├── nav/              # Barra de navegação

# Instale as dependências│   ├── services/         # Serviços oferecidos

npm install│   ├── team/             # Equipe médica

│   └── testimonials/     # Depoimentos de pacientes

# Inicie o servidor de desenvolvimento├── constants/            # Dados constantes e mock

npm run dev│   ├── services.ts       # Dados dos serviços

```│   ├── team.ts           # Dados da equipe

│   └── testimonials.ts   # Dados dos depoimentos

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.├── types/                # Definições TypeScript

│   └── types.ts          # Interfaces e tipos

## 📝 Scripts Disponíveis└── utils/                # Utilitários e helpers

    ├── cn.ts             # Função para combinar classes CSS

```bash    └── utils.ts          # Funções utilitárias

npm run dev         # Inicia o servidor de desenvolvimento com Turbopack```

npm run build       # Cria build de produção

npm run start       # Inicia o servidor de produção## 🎨 Paleta de Cores

npm run lint        # Executa o linter

npm run lint:fix    # Executa o linter e corrige automaticamente- **Primária**: Azul céu (#0ea5e9) - Confiança e profissionalismo

```- **Secundária**: Âmbar (#f59e0b) - Energia e vitalidade

- **Background**: Tons neutros para legibilidade

## 🎨 Seções do Site

## 📱 Seções da Landing Page

### 1. **Hero Section**

- Apresentação principal com CTA1. **Hero** - Apresentação com chamada para ação

- Estatísticas da clínica2. **Serviços** - Tratamentos odontológicos oferecidos

- Imagem destaque com cards flutuantes3. **Equipe** - Profissionais qualificados com fotos

4. **Depoimentos** - Avaliações de pacientes satisfeitos

### 2. **Serviços**5. **Agendamento** - Formulário para marcar consultas

- Grid de cards com serviços odontológicos6. **Contato** - Informações e formulário de contato

- Ícones personalizados7. **Footer** - Links úteis e informações da clínica

- Features detalhadas de cada serviço

## � Convenções do Projeto

### 3. **Equipe**

- Apresentação dos dentistas### Nomenclatura de Arquivos

- Especialidades e CRO- **Componentes**: `kebab-case.tsx` (ex: `hero-section.tsx`, `booking-form.tsx`)

- Fotos e biografias- **Pastas**: `kebab-case` (ex: `contact-details`, `team-members`)

- **Índices**: `index.ts` para exportar módulos

### 4. **Depoimentos**- **Tipos**: `PascalCase` para interfaces (ex: `TeamMember`, `Service`)

- Avaliações de pacientes

- Sistema de rating com estrelas### Estrutura de Componentes

- Tratamentos realizados- Cada componente tem sua própria pasta

- `index.ts` para exportar o componente principal

### 5. **Agendamento**- Componentes relacionados ficam na mesma pasta

- Formulário completo de agendamento- Separação clara entre UI base e componentes de negócio

- Seleção de serviço e data

- Validação de campos### Padrões de Código

- **TypeScript** obrigatório em todos os arquivos

### 6. **Contato**- **ESLint** configurado para qualidade de código

- Formulário de contato- **Prettier** para formatação consistente

- Informações da clínica- Diretiva `'use client'` para componentes que usam hooks/Framer Motion

- Horários de atendimento

## 📄 Licença

## 🛠️ Tecnologias Utilizadas

Este projeto é propriedade da Clínica Sorriso Vivo.

- **Framework**: Next.js 15.5.3
- **Linguagem**: TypeScript 5
- **Estilização**: TailwindCSS 4
- **Animações**: Anime.js 4.2.0
- **Componentes**: Radix UI
- **Ícones**: Lucide React
- **Fontes**: Geist (Sans & Mono)

## 📦 Principais Dependências

```json
{
  "animejs": "^4.2.0",
  "next": "15.5.3",
  "react": "19.1.0",
  "lucide-react": "^0.544.0",
  "@radix-ui/react-avatar": "^1.1.10",
  "tailwind-merge": "^3.3.1"
}
```

## 🎯 Personalizações

### Atualizar Informações da Clínica

Edite o arquivo `src/helpers/landing-helper.ts` para atualizar:
- Serviços oferecidos
- Informações da equipe
- Depoimentos de pacientes

### Customizar Cores e Estilo

As cores principais podem ser ajustadas no arquivo `src/app/globals.css`:
- Azul primário: `#3B82F6`
- Gradientes e sombras personalizados

### Adicionar Mais Seções

1. Crie um novo componente em `src/components/landing/`
2. Importe e adicione ao `src/app/page.tsx`
3. Atualize a navegação em `navbar.tsx`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- **Turbopack**: Builds 10x mais rápidos
- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Bundles otimizados automaticamente
- **Static Generation**: Páginas pré-renderizadas

---

Desenvolvido com ❤️ para **Sorriso Vivo**
