import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionProps,
} from '@/components/accordion/clientAccordion';
import { ReactNode } from 'react';

interface AccordionItemDefinition {
  titleKey: string;
  subtitleKey?: string;
  content: ReactNode;
}

export const Skills = () => {
  const t = useTranslations('Skills.General');

  const accordionItems: AccordionItemDefinition[] = [
    { titleKey: 'mainSkills', content: <div>Hello1</div> },
    { titleKey: 'softSkills', content: <div>Hello1</div> },
    {
      titleKey: 'buzzwords',
      subtitleKey: 'buzzwordsSubtitle',
      content: <div>Hello1</div>,
    },
  ];

  const transformItem = ({
    titleKey,
    subtitleKey,
    content,
  }: AccordionItemDefinition): AccordionProps['items'][0] => {
    const itemTitle = t(titleKey);
    return {
      'aria-label': itemTitle,
      title: itemTitle,
      key: titleKey,
      itemContent: content,
      subtitle: <span>{t(subtitleKey)}</span>,
    };
  };

  return (
    <article id="skills" className="w-full xl:w-[90%] max-w-[1300px]">
      <h2 className="text-3xl mb-4">{t('heading')}</h2>
      <Accordion
        defaultExpandedKeys={[accordionItems[0].titleKey]}
        variant="splitted"
        items={accordionItems.map(transformItem)}
      />
    </article>
  );
};
