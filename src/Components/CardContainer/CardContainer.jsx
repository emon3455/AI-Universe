import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';

const CardContainer = () => {

    const [data , setData] = useState([]);
    const [showAll , setShowAll] = useState(false);

    useEffect(()=>{

        const loadData = async()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            setData(data.data.tools);
        }

        loadData();

    },[]);

    const displayAll = () =>{
        setShowAll(true);
    }
    
    return (
        <>

            <div className='p-2 container mx-auto my-4 grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {
                    data.slice(0, showAll ? 12: 6).map(singleData=> <Card info={singleData} key={singleData.id}> </Card> )
                }
            </div>

            {
                !showAll && (
                <span onClick={displayAll}>
                    <Button>Show All</Button>   
                </span>)  
            } 
            
        </>
    );
};

export default CardContainer;