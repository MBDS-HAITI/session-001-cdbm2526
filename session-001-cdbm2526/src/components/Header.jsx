import logo from '../assets/MBDS.svg';

export default function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <img src={logo} alt='Logo MBDS' width={120} />
      <h1>Introduction à React</h1>
      <p>A la découverte des premières notions de React</p>
    </header>
  );
}
