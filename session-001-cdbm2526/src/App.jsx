import Header from './components/Header';
import MainContent from './components/MainContent';
import RandomNote from './components/RandomNote';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: 'Quicksand, sans-serif', backgroundColor:'#280a48', minHeight:'100vh', padding:'2rem', color:'#ebe7ef' }}>
      <Header />
      <MainContent />
      <RandomNote />
      <Footer />
    </div>
  );
}
