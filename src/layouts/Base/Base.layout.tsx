import React from 'react';
import './reset.css';
import './fonts.css';
import './defaults.css';
import './eggs.css';
import styles from './Base.module.css';
import {Outlet} from 'react-router-dom';

export const BaseLayout = () => (
  <>
    <main className={styles.main}>
      <Outlet />
    </main>
  </>
);
