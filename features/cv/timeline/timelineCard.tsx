import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';

interface TimelineCardProps {
  title: string;
  description: string;
  footer?: string;
}

export const TimelineCard = ({
  description,
  footer,
  title,
}: TimelineCardProps) => {
  return (
    <Card className="min-h-20">
      <CardHeader>
        <h3 className="text-xl">{title}</h3>
      </CardHeader>
      <Divider />
      <CardBody>{description}</CardBody>
      {footer ? (
        <CardFooter className="italic text-lg">{footer}</CardFooter>
      ) : null}
    </Card>
  );
};
