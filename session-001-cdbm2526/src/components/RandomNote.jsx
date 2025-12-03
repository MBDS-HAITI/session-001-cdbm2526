import { useState, useEffect } from 'react';
import data from '../data/data.json';

function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

export default function RandomNote() {
  const [note, setNote] = useState(getRandomItem(data));

  useEffect(() => {
    const interval = setInterval(() => setNote(getRandomItem(data)), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', backgroundColor: '#2f1d43', color:'#ebe7ef', padding:'1rem', borderRadius:'8px', textAlign:'center' }}>
      <h2>{note.titre}</h2>
      <p>{note.description}</p>
    </div>
  );
}
