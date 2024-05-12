'use client';

import {
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import { PropsWithChildren, ReactNode } from 'react';

interface TimelineElementProps {
  color: string;
  position: VerticalTimelineElementProps['position'];
  date: string;
  icon: ReactNode;
}

export const TimelineElement = ({
  children,
  color,
  ...props
}: PropsWithChildren<TimelineElementProps>) => {
  return (
    <VerticalTimelineElement
      visible
      className="vertical-timeline-element--work"
      contentStyle={{
        padding: 0,
        borderRadius: 0,
        background: 'transparent',
        boxShadow: 'none',
      }}
      contentArrowStyle={{ borderRight: `10px solid ${color}` }}
      iconStyle={{ background: color, color: '#fff' }}
      {...props}
    >
      {children}
    </VerticalTimelineElement>
  );
};
