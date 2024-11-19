// import { list } from 'postcss';
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);


  const disp=()=>{
    console.log(artists)
  }

  return (
    <div>

      <br />
      <h1>Inspiring sculptors:</h1>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>

      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>

      {/* console.log(artists); */}
      <button onClick={disp}>console.log</button>

    </div>
  );
}

// export default List;
