import { list } from 'postcss';
import React from 'react';

const Card = (props) => {
    console.log(props.info);
    const {image,name,features,published_in} = props.info;

    return (
        <div className="card w-96 bg-gray-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className='text-xl font-semibold'>Feachers</h2>
                {
                    features.map((feacher, index)=> <p>{index+1}. {feacher}</p>)
                }
                <hr/>
                
                <div className="flex justify-between items-center">
                    <div className="">
                        <h3 className='font-bold text-xl'>{name}</h3>
                        <p><span><i class="fa-solid fa-calendar-days"></i></span> {published_in}</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-arrow-right text-red-600 text-xl"></i>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;