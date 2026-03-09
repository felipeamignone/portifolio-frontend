import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

type Stack = {
  name: string;
  yearsOfExperience?: number;
};

type StackCategory = {
  name: string;
  icon: string;
  stacks: Stack[];
};

type CompanyExperience = {
  companyName: string;
  startDate: Date;
  endDate?: Date;
  position: string;
  description: string;
};

@Component({
  selector: 'app-experience',
  imports: [NgClass],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  stackCategories: StackCategory[] = [
    {
      name: 'Front-End',
      icon: 'frontend',
      stacks: [
        { name: 'React', yearsOfExperience: 5 },
        { name: 'Angular', yearsOfExperience: 1 },
        { name: 'Next.js', yearsOfExperience: 3 },
      ],
    },

    {
      name: 'Back-End',
      icon: 'backend',
      stacks: [
        { name: 'Node.js', yearsOfExperience: 3 },
        { name: 'Express', yearsOfExperience: 3 },
        { name: 'Spring Boot', yearsOfExperience: 1 },
      ],
    },

    {
      name: 'Database',
      icon: 'database',
      stacks: [
        { name: 'MySQL', yearsOfExperience: 3 },
        { name: 'PostgreSQL', yearsOfExperience: 3 },
        { name: 'MongoDB', yearsOfExperience: 3 },
      ],
    },

    {
      name: 'Cloud e DevOps',
      icon: 'cloud',
      stacks: [
        { name: 'Docker', yearsOfExperience: 1 },
        { name: 'Oracle Cloud', yearsOfExperience: 3 },
        { name: 'AWS', yearsOfExperience: 3 },
        { name: 'GitHub Actions', yearsOfExperience: 3 },
      ],
    },
  ];

  companyExperiences: CompanyExperience[] = [
    {
      companyName: 'NossoVerde Mototuring',
      startDate: new Date('2025-11-01'),
      endDate: new Date('2026-01-01'),
      position: 'Desenvolvedor Fullstack (Freelancer)',
      description:
        'Atuação Fullstack em todas as etapas do projeto, desde o levantamento de requisitos até a homologação do sistema, participando da definição de regras de negócio, arquitetura da solução e validações finais. Desenvolvimento de um CMS com suporte a conteúdo traduzível e internacionalização (i18n), permitindo a gestão de múltiplos idiomas e adaptação do conteúdo para diferentes regiões, com foco em escalabilidade e boas práticas de SEO.',
    },
    {
      companyName: 'Storer Sistemas',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-07-01'),
      position: 'Desenvolvedor Mobile (Freelancer)',
      description:
        'Liderança técnica e arquitetura de aplicativo de controle de ponto, definindo escalabilidade e segurança. Implementação de pipelines de CI/CD com Azure DevOps e Fastlane para automação de deploy. Integração complexa de reconhecimento facial e validações de segurança nativas (Android com Gradle e iOS com Pods).',
    },
    {
      companyName: 'Assertiva',
      startDate: new Date('2024-04-01'),
      endDate: new Date('2025-10-01'),
      position: 'Desenvolvedor Front-end Pleno',
      description:
        'Desenvolvimento e sustentação de sistema de gestão financeira e réguas de cobrança. Implementação de Testes A/B e Feature Flags com Unleash e monitoramento via Google Analytics. Automação de processos manuais de importação de arquivos para otimização do fluxo do cliente.',
    },
    {
      companyName: 'Cinemark Brasil',
      startDate: new Date('2023-02-01'),
      endDate: new Date('2024-04-01'),
      position: 'Desenvolvedor Front-end Pleno',
      description:
        'Planejamento técnico e supervisão da migração do e-commerce legado para Next.js. Implementação de rastreamento de usuário e interface com equipe internacional de dados para Analytics.',
    },
    {
      companyName: 'Assertiva',
      startDate: new Date('2021-04-01'),
      endDate: new Date('2023-01-01'),
      position: 'Desenvolvedor Front-end Júnior',
      description:
        'Introdução da cultura de testes unitários no fluxo de desenvolvimento, aumentando a confiabilidade do código em um sistema crítico de comunicação (SMS/Email) e prospecção.',
    },
    {
      companyName: 'Marttech',
      startDate: new Date('2020-10-01'),
      endDate: new Date('2021-03-01'),
      position: 'Desenvolvedor Front-end Júnior',
      description:
        'Desenvolvimento de biblioteca JavaScript Vanilla publicada no NPM para cálculos financeiros, utilizada em ambientes Web e Mobile.',
    },
  ];
}
