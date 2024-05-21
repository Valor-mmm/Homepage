import {
  Experience,
  ExperienceProps,
} from '@/features/cv/experience/experience';
import { useTranslations } from 'next-intl';

export const Work = () => {
  const t = useTranslations('CV.Experience.Work');

  const experiences: ExperienceProps['experiences'] = [
    {
      title: t('Internship.title'),
      institution: t('Internship.institution'),
      timeStart: new Date(2016, 8),
      timeEnd: new Date(2017, 1),
      details: [
        t('Internship.Details.scrumTeam'),
        t('Internship.Details.infrastructureScripting'),
        t('Internship.Details.javaFeatureDevelopment'),
        t('Internship.Details.frontendDevelopment'),
      ],
      furtherInformation: [
        'Python',
        'Jenkins',
        'Java',
        'JavaScript',
        'HTML/CSS',
        'Dojo v1',
      ],
    },
    {
      title: t('WorkingStudent.title'),
      institution: t('WorkingStudent.institution'),
      timeStart: new Date(2017, 2),
      timeEnd: new Date(2020, 2),
      details: [
        t('WorkingStudent.Details.scrumTeam'),
        t('WorkingStudent.Details.onboarding'),
        t('WorkingStudent.Details.frontendDev'),
      ],
      furtherInformation: [
        'Python',
        'Jenkins',
        'JavaScript',
        'HTML/CSS',
        'Dojo v1',
        'React',
        'MobX',
      ],
    },
    {
      title: t('FrontendDeveloper.title'),
      institution: t('FrontendDeveloper.institution'),
      timeStart: new Date(2020, 3),
      timeEnd: new Date(2022, 10),
      details: [
        t('FrontendDeveloper.Details.scrumTeam'),
        t('FrontendDeveloper.Details.frontendDev'),
        t('FrontendDeveloper.Details.onboardingAndPair'),
        t('FrontendDeveloper.Details.projectLead'),
      ],
      furtherInformation: [
        'JavaScript',
        'Typescript',
        'HTML/CSS',
        'React',
        'Next.js',
        'GraphQL',
        'express',
        'Cypress',
        'and more...',
      ],
    },
    {
      title: t('SolutionArchitect.title'),
      institution: t('SolutionArchitect.institution'),
      timeStart: new Date(2022, 11),
      timeEnd: new Date(2023, 8),
      details: [
        t('SolutionArchitect.Details.previousResponsibilities'),
        t('SolutionArchitect.Details.interTeamCommunication'),
        t('SolutionArchitect.Details.frontendOrga'),
      ],
      furtherInformation: [
        'JavaScript',
        'Typescript',
        'HTML/CSS',
        'React',
        'Next.js',
        'GraphQL',
        'express',
        'Cypress',
        'and more...',
      ],
    },
    {
      title: t('TechnicalLead.title'),
      institution: t('TechnicalLead.institution'),
      timeStart: new Date(2023, 9),
      details: [
        t('TechnicalLead.Details.previousResponsibilities'),
        t('TechnicalLead.Details.technicalResponsibility'),
        t('TechnicalLead.Details.poForTechnicalStories'),
        t('TechnicalLead.Details.technicalSparringPartner'),
      ],
      furtherInformation: [
        'JavaScript',
        'Typescript',
        'HTML/CSS',
        'React',
        'Next.js',
        'GraphQL',
        'express',
        'Cypress',
        'and more...',
      ],
    },
  ];

  return <Experience experiences={experiences} />;
};
