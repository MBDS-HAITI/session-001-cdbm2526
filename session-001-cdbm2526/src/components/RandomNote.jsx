import { useState, useEffect } from 'react';
import data from '../data/data.json';
import './RandomNote.css'; // fichier CSS optionnel

function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

export default function RandomNote() {
  const [note, setNote] = useState(getRandomItem(data));

  useEffect(() => {
    const interval = setInterval(() => {
      setNote(getRandomItem(data));
    }, 5000); // change toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='random-note'>
      <h2>{note.titre}</h2>
      <p>{note.description}</p>
    </div>
  );
}
