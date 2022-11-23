import React from 'react';
import { Layouts } from '../layouts';
import { ROUTES } from './routes';
import {HomePage} from '../pages';

export interface Page {
  path: ROUTES;
  element: React.ReactNode;
}

export type Pages = {
  [key in Layouts]: Page[];
};

export const PAGES: Pages = {
  base: [
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
  ],
};
