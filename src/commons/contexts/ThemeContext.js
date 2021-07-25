/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, createContext} from 'react';
import {useColorScheme, StatusBar} from 'react-native';

const lightColor = {
  primary: '#61de90',
  background: '#FFF',
  text: '#4c5158',
};

const darkColor = {
  primary: '#01b045',
  background: '#16162d',
  text: '#e8e8ea',
};

export const ThemeContext = createContext({
  color: {},
});

export const ThemeProvider = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [color, setColor] = useState(lightColor);

  useEffect(() => {
    if (isDarkMode) {
      setColor(darkColor);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      setColor(darkColor);
    } else {
      setColor(lightColor);
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        color,
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </ThemeContext.Provider>
  );
};
