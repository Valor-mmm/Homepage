'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PropsWithChildren } from 'react';
import { useTheme } from 'next-themes';

export const Timeline = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const lineColor = theme === 'light' ? 'black' : 'white';

  return (
    <VerticalTimeline lineColor={lineColor} layout="2-columns">
      {children}
    </VerticalTimeline>
  );
};

export const timelineEducationColor = '#009900';
export const timelineWorkColor = '#80b3ff';
export const timelineMilestoneColor = '#b3b300';
