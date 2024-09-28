import React from 'react'
import { useState } from 'react';
import RestarauntCard from './RestarauntCard'
import { restaurauntMockData } from './utils/mockData';


export default function () {
    const [restaurauntData , setRestaurauntData] = useState(restaurauntMockData)
  return (
    <div className="main-ctr">
        <button onClick={()=>{
            const filteredrestaurauntData = restaurauntData.filter(data => data.card.card.info.avgRating > 4)
            setRestaurauntData(filteredrestaurauntData)
        }}>Top Restaurant</button>
        <div className='restauraunt-list-ctr'>
            {restaurauntData.map((data) => {
            return (
                <RestarauntCard
                key={data.card.card.info.id}
                resData={data.card.card}
                />
            );
            })}
        </div>
        
      </div>
  )
}
