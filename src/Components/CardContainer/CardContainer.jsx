import React, { useEffect, useState } from 'react';

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
        <div>

            {
                data.map(singleData=>{
                    console.log(singleData);
                })
            }
            
        </div>
    );
};

export default CardContainer;