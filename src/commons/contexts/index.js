import React from 'react';
import {ThemeProvider} from '../contexts/ThemeContext';

export default function Contexts({children}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
