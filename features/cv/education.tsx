import {
  Experience,
  ExperienceProps,
} from '@/features/cv/experience/experience';
import { useTranslations } from 'next-intl';

export const Education = () => {
  const t = useTranslations('CV.Experience.Education');

  const experiences: ExperienceProps['experiences'] = [
    {
      title: t('ALevel.title'),
      institution: t('ALevel.institution'),
      furtherInformation: [t('ALevel.furtherInformation', { gdp: 1.7 })],
      timeStart: new Date(2006, 8),
      timeEnd: new Date(2014, 8),
    },
    {
      title: t('Bachelor.title'),
      institution: t('Bachelor.institution'),
      furtherInformation: [t('Bachelor.furtherInformation', { gdp: 1.9 })],
      timeStart: new Date(2014, 9),
      timeEnd: new Date(2018, 8),
      details: [
        t('Bachelor.Details.itBasics'),
        t('Bachelor.Details.variousProgrammingLanguages'),
        t('Bachelor.Details.bachelorTitle'),
      ],
    },
    {
      title: t('Master.title'),
      institution: t('Master.institution'),
      furtherInformation: [t('Master.furtherInformation', { gdp: 1.9 })],
      timeStart: new Date(2014, 9),
      timeEnd: new Date(2018, 8),
      details: [
        t('Master.Details.focus'),
        t('Master.Details.specializing'),
        t('Master.Details.scientificWorking'),
        t('Master.Details.masterTitle'),
      ],
    },
  ];

  return <Experience experiences={experiences} />;
};
