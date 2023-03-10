import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <p className={css.title}>{title}</p>
    {children}
  </section>
);

export default Section;
