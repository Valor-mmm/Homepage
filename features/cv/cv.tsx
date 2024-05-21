import { useTranslations } from 'next-intl';
import { Tabs } from '@/components/tab/clientTabs';
import { DetailTimeline } from '@/features/cv/detailTimeline';
import { Education } from '@/features/cv/education';
import { Work } from '@/features/cv/work';

const cvDescriptionId = 'cv_description';

export const CV = () => {
  const t = useTranslations('CV.General');

  return (
    <article id="cv" className="w-full xl:w-[90%] max-w-[1300px]">
      <h2 className={'text-3xl mb-4'}>{t('title')}</h2>
      <div id={cvDescriptionId} className="p-5">
        <p>{t('description')}</p>
        <p className="mt-2">{t('usageDescription')}</p>
      </div>
      <Tabs
        variant="underlined"
        size="lg"
        classNames={{ tabContent: 'text-2xl' }}
        aria-label={t('ariaLabel')}
        aria-describedby={cvDescriptionId}
        tabs={[
          { title: t('educationTitle'), key: 'education', item: <Education /> },
          { title: t('workTitle'), key: 'work', item: <Work /> },
          {
            title: t('detailTimelineTitle'),
            key: 'detailTimeline',
            item: <DetailTimeline />,
          },
        ]}
      />
    </article>
  );
};
