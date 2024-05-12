'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PropsWithChildren } from 'react';

export const Timeline = ({ children }: PropsWithChildren) => {
  return <VerticalTimeline layout="2-columns">{children}</VerticalTimeline>;
};

export const timelineEducationColor = '#009900';
export const timelineWorkColor = '#80b3ff';
export const timelineMilestoneColor = '#b3b300';
