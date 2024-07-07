import { useTranslations } from 'next-intl';
import { Skill } from '@/features/skills/buzzwords/getSkills';
import { useMemo } from 'react';

interface BuzzwordListProps {
  skills: Skill[];
}

export const BuzzwordList = ({ skills }: BuzzwordListProps) => {
  const t = useTranslations('Skills.Buzzwords');

  const sortedSkills = useMemo(
    () => skills.sort((a, b) => b.level - a.level),
    [skills],
  );

  return (
    <ul className="pl-8 leading-7">
      {sortedSkills.map((skill: Skill) => (
        <li key={skill.name} className="list-disc ">
          {skill.isKey ? t(skill.name) : skill.name}
        </li>
      ))}
    </ul>
  );
};
