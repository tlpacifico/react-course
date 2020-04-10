import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component';

export const CardList = ({monsters}) => (
 <div className='card-list'>
     {monsters.map(item => (
       <Card key={item.id} item={item}></Card>
     ))}
 </div>
);
