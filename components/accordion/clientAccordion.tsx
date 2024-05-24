'use client';

import {
  type AccordionProps as NextUIAccordionProps,
  Accordion as NextUIAccordion,
  type AccordionItemProps,
  AccordionItem,
} from '@nextui-org/accordion';
import { ReactNode } from 'react';

export type AccordionProps = Pick<
  NextUIAccordionProps,
  'defaultExpandedKeys' | 'variant'
> & {
  items: Array<
    Pick<AccordionItemProps, 'aria-label' | 'title' | 'subtitle' | 'key'> & {
      itemContent: ReactNode;
    }
  >;
};

/**
 * This component is necessary because of the following issue in nextUi
 * https://github.com/nextui-org/nextui/issues/2320
 *
 * In short: **Accordion' and AccordionItems can only be used in client components for now.**
 *
 * TODO: Remove this component after the issue has been resolved.
 * */
export const Accordion = ({ items, ...props }: AccordionProps) => (
  <NextUIAccordion {...props}>
    {items.map(({ itemContent, key, ...itemProps }) => (
      <AccordionItem key={key} {...itemProps}>
        {itemContent}
      </AccordionItem>
    ))}
  </NextUIAccordion>
);
