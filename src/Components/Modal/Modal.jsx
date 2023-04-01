import React, { useEffect, useState } from 'react';

const Modal = (props) => {

    console.log(props.singleInfo);
    const {tool_name, description,features, image_link, pricing,accuracy} = props.singleInfo;

    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className="card lg:card-side bg-base-100 gap-2">
                    
                        <div className="card-body w-6/12 shadow-xl ">
                            <h2 className="card-title">{description}</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                        
                        </div>

                        <div className="w-6/12 shadow-xl">
                            <figure >
                                <img className='rounded-lg' src={image_link? image_link[0]: null} alt="Album"/>
                            </figure>

                        </div>

                    </div>

                    <div className="modal-action card-actions justify-end ">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>

                </div>
            </div>
        </div>

        

    );
};

export default Modal;