import {
  ExperienceRow,
  ExperienceRowProps,
} from '@/features/cv/experience/experienceRow';

export interface ExperienceProps {
  experiences: ExperienceRowProps[];
}

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <div>
      <ul className="p-4 flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <ExperienceRow key={`${experience.title}-${index}`} {...experience} />
        ))}
      </ul>
    </div>
  );
};
