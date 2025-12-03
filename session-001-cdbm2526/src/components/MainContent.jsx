import { useState, useEffect } from 'react';

export default function MainContent() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

  const jour = jours[dateTime.getDay()];
  const moisNom = mois[dateTime.getMonth()];
  const annee = dateTime.getFullYear();
  const heures = String(dateTime.getHours()).padStart(2,'0');
  const minutes = String(dateTime.getMinutes()).padStart(2,'0');
  const secondes = String(dateTime.getSeconds()).padStart(2,'0');

  return (
    <main>
      <p>
        Bonjour, on est le {jour}, {moisNom}, {annee} et il est {heures}:{minutes}:{secondes}
      </p>
    </main>
  );
}
