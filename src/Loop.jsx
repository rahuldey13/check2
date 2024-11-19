// import React from ‘react’

const RenderList = props => {
  const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];

  return (
    // <ul>
    //     {animals.map(animal => (
    //         <li key={animal.id}>{animal}
    //         </li>
    //     ))}
    // </ul>

    <ul >
        {animals.map(artist => (
            <li key={artist.id}>
                {artist}
                </li>
        ))}
    </ul> 
  );
};

export default RenderList;