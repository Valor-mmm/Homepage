import {
  timelineEducationColor,
  timelineMilestoneColor,
  Timeline,
  timelineWorkColor,
} from '@/features/cv/timeline/timeline';
import { TimelineElement } from '@/features/cv/timeline/timelineElement';
import {
  FaBuildingColumns,
  FaGraduationCap,
  FaLaptopCode,
  FaSchool,
} from 'react-icons/fa6';
import { TimelineCard } from '@/features/cv/timeline/timelineCard';
import { useTranslations } from 'next-intl';

export const DetailTimeline = () => {
  const t = useTranslations('CV.DetailTimeline');
  return (
    <>
      <p className="text-lg p-5">{t('description')}</p>
      <Timeline>
        <TimelineElement
          color={timelineEducationColor}
          position={'left'}
          date={t('School.date')}
          icon={<FaSchool />}
        >
          <TimelineCard
            title={t('School.title')}
            description={t('School.description')}
            footer={t('School.footer')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineEducationColor}
          position={'left'}
          date={t('BachelorStart.date')}
          icon={<FaBuildingColumns />}
        >
          <TimelineCard
            title={t('BachelorStart.title')}
            description={t('BachelorStart.description')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineWorkColor}
          position={'right'}
          date={t('Internship.date')}
          icon={<FaLaptopCode />}
        >
          <TimelineCard
            title={t('Internship.title')}
            description={t('Internship.description')}
            footer={t('Internship.footer')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineWorkColor}
          position={'right'}
          date={t('WorkingStudentStart.date')}
          icon={<FaLaptopCode />}
        >
          <TimelineCard
            title={t('WorkingStudentStart.title')}
            description={t('WorkingStudentStart.description')}
            footer={t('WorkingStudentStart.footer')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineMilestoneColor}
          position={'left'}
          date={t('BachelorEnd.date')}
          icon={<FaGraduationCap />}
        >
          <TimelineCard
            title={t('BachelorEnd.title')}
            description={t('BachelorEnd.description')}
            footer={t('BachelorEnd.footer')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineEducationColor}
          position={'left'}
          date={t('MasterStart.date')}
          icon={<FaBuildingColumns />}
        >
          <TimelineCard
            title={t('MasterStart.title')}
            description={t('MasterStart.description')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineWorkColor}
          position={'right'}
          date={t('WorkingStudentEnd.date')}
          icon={<FaLaptopCode />}
        >
          <TimelineCard
            title={t('WorkingStudentEnd.title')}
            description={t('WorkingStudentEnd.description')}
            footer={t('WorkingStudentEnd.footer')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineMilestoneColor}
          position={'left'}
          date={t('MasterEnd.date')}
          icon={<FaGraduationCap />}
        >
          <TimelineCard
            title={t('MasterEnd.title')}
            description={t('MasterEnd.description')}
            footer={t('MasterEnd.footer')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineWorkColor}
          position={'right'}
          date={t('StartWitt.date')}
          icon={<FaLaptopCode />}
        >
          <TimelineCard
            title={t('StartWitt.title')}
            description={t('StartWitt.description')}
            footer={t('StartWitt.footer')}
          />
        </TimelineElement>
        <TimelineElement
          color={timelineMilestoneColor}
          position={'right'}
          date={t('TechnicalLead.date')}
          icon={<FaLaptopCode />}
        >
          <TimelineCard
            title={t('TechnicalLead.title')}
            description={t('TechnicalLead.description')}
            footer={t('TechnicalLead.footer')}
          />
        </TimelineElement>
      </Timeline>
    </>
  );
};
