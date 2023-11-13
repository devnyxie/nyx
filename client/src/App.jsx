import Wrapper from './components/wrapper/Wrapper';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/sections/Profile';
import { useEffect, useState } from 'react';
import globalStyles from './globalStyles';
import { Global } from '@emotion/react';
import Cookies from 'js-cookie';

export function App({ children }) {
  const [theme, setTheme] = useState(getInitialTheme());

  // Function to get the initial theme from the cookie
  function getInitialTheme() {
    const savedTheme = Cookies.get('theme');
    return savedTheme || 'light'; // Default to 'light' if no theme is saved
  }

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <>
      <Global styles={() => globalStyles(theme)} />
      <Wrapper>
        <Header setTheme={setTheme} theme={theme} />
        <div className={`p-2 p-md-4 h-100`} style={{ overflowY: 'auto' }}>
          {children}
        </div>
        <Footer />
      </Wrapper>
    </>
  );
}
