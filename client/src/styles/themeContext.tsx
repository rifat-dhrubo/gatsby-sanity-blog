import React, { FC } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'dark';
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ThemeContext = React.createContext({
  theme: 'dark',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: (theme: string) => {},
});

const ThemeProvider = ({
  initialTheme,
  children,
}: {
  initialTheme: any;
  children: any;
}) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme: any) => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
