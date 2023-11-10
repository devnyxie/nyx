import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/sections/Profile';

export function App() {
  return (
    <Wrapper>
      <Header />
      <div className={`p-2 p-md-4 h-100`} style={{ overflowY: 'auto' }}>
        <Profile />
      </div>
      <Footer />
    </Wrapper>
  );
}
