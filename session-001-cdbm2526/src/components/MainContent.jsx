import { useState, useEffect } from 'react';

export default function MainContent() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (d) => {
    const jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    const mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    return Bonjour, on est le , ,  et il est ::;
  }

  return (
    <main style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <p>{formatDate(date)}</p>
    </main>
  );
}
