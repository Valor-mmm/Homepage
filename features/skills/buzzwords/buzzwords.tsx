import { getSkills } from '@/features/skills/buzzwords/getSkills';
import { Tabs } from '@/components/tab/clientTabs';
import { useTranslations } from 'next-intl';
import { BuzzwordList } from '@/features/skills/buzzwords/buzzwordList';

const skills = getSkills();

export const Buzzwords = () => {
  const t = useTranslations('Skills.Buzzwords');

  if (!Array.isArray(skills)) {
    throw new Error('Skills must be available');
  }

  return (
    <Tabs
      variant="light"
      tabs={skills.map((category) => ({
        key: category.key,
        title: t(category.key),
        item: <BuzzwordList skills={category.skills} />,
      }))}
    />
  );
};
