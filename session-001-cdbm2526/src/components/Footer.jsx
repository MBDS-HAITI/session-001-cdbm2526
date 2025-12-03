export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
      © {year} - Caleb.Toussaint, Tous droits réservés
    </footer>
  );
}
