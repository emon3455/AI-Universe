import React, { useState } from 'react';

const Header = () => {

    const [open , setOpen] = useState(false);

    return (
        <header className=' bg-slate-900'>

            <nav className='container mx-auto bg-slate-900 text-white p-2 text-xl md:flex md:justify-between'>

                <div className="md:1/3 flex items-center gap-2 text-2xl">
                    <div onClick={()=> setOpen(!open)} className="md:hidden">
                        <span>
                            {
                                open ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                            }
                        </span>
                    </div>
                    <h2>Ai Universe</h2>
                </div>

                <ul className={`z-10 p-1 w-full md:w-2/3 bg-slate-900 md:flex justify-around
                  absolute md:static left-0  ${open ? 'top-12' : "-top-36"}
                `}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/Products">Products</a></li>
                    <li><a href="/Service">Service</a></li>
                    <li><a href="/Contact">Contact</a></li>

                </ul>

            </nav>
            
        </header>
    );
};

export default Header;