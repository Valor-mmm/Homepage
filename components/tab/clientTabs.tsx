'use client';

import {
  Tabs as NextUiTabs,
  Tab,
  TabsProps as NextUiTabsProps,
  TabItemProps,
} from '@nextui-org/tabs';
import { ReactNode } from 'react';

type TabsProps = Pick<NextUiTabsProps, 'variant' | 'aria-label' | 'size'> & {
  tabs: Array<
    RequiredNotNull<Pick<TabItemProps, 'key' | 'title'>> & { item: ReactNode }
  >;
};

/**
 * This component is necessary because of the following issue in nextUi
 * https://github.com/nextui-org/nextui/issues/2320
 *
 * In short: **Tabs and Tab can only be used in client components for now.**
 *
 * TODO: Remove this component after the issue has been resolved.
 * */
export const Tabs = ({ tabs, ...props }: TabsProps) => (
  <NextUiTabs {...props}>
    {tabs.map(({ item, key, ...props }) => (
      <Tab key={key} {...props}>
        {item}
      </Tab>
    ))}
  </NextUiTabs>
);
