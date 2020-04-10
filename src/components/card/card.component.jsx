import React from 'react';
import './card.styles.css';


export const Card = ({item}) => (
    <div className='card-container'>
        <img alt="monster" 
             src={`https://robohash.org/${item.id}?set=set2&size=180x180`}>
       </img>
         <h2>{item.name}</h2>
        <p>{item.email}</p>
    </div>
);