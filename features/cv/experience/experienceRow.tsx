import { useFormatter, useTranslations } from 'next-intl';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';

export interface ExperienceRowProps {
  title: string;
  timeStart: Date;
  timeEnd?: Date;
  institution: string;
  furtherInformation?: string[];
  details?: string[];
}

export const ExperienceRow = ({
  title,
  timeStart,
  timeEnd,
  institution,
  details,
  furtherInformation,
}: ExperienceRowProps) => {
  const format = useFormatter();
  const t = useTranslations('CV.Experience.General');
  const date = timeEnd
    ? format.dateTimeRange(timeStart, timeEnd, 'monthYear')
    : t('sinceDate', { timeStart });

  return (
    <li className="grid grid-cols-[50%_1fr] sm:grid-cols-[40%_1fr] lg:grid-cols-[30%_1fr] gap-3">
      <div>
        <h4 className="text-xl font-bold">{title}</h4>
        <div className="text-lg italic dark:text-gray-300">{date}</div>
      </div>
      <div>
        <Card classNames={{ base: 'bg-primary/30' }}>
          <CardHeader>
            <h5 className="text-xl">{institution}</h5>
          </CardHeader>
          {Array.isArray(details) && details?.length > 0 ? (
            <CardBody>
              <li className="list-disc pl-8">
                {details.map((detail, index) => (
                  <li key={`${detail}-${index}`}>{detail}</li>
                ))}
              </li>
            </CardBody>
          ) : null}
          {Array.isArray(furtherInformation) &&
          furtherInformation.length > 0 ? (
            <CardFooter className="flex flex-row justify-start gap-3 flex-wrap">
              {furtherInformation.map((information, index) => (
                <Chip key={`${information}-${index}`} variant="solid" size="md">
                  {information}
                </Chip>
              ))}
            </CardFooter>
          ) : null}
        </Card>
      </div>
    </li>
  );
};
