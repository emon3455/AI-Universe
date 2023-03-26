import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const CardContainer = () => {

    const [data , setData] = useState([]);

    useEffect(()=>{

        const loadData = async()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            setData(data.data.tools);
        }

        loadData();

    },[]);
    
    return (
        <div className='p-2 container mx-auto mt-4 grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>

            {
                data.map(singleData=> <Card info={singleData} key={singleData.id}> </Card> )
            }
            
        </div>
    );
};

export default CardContainer;