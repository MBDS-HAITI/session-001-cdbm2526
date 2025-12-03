export default function Footer() {
  const annee = new Date().getFullYear();
  return (
    <footer>
      © {annee} - Caleb.Toussaint, Tous droits réservés.
    </footer>
  );
}
