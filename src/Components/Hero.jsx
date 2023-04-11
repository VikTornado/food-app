import React, {useState} from 'react';
import Wp from '../Assets/wp/1-3.jpg'


const Hero = () => {
    return (
        <div className={"w-full h-screen"}>
            <div style={{
                backgroundImage: `url(${Wp})`
            }} className={"w-full h-full bg-cover bg-center z-5"}>
                <div className={"max-w-[1440px] m-auto"}>
                    <div className={"absolute top-[40%] border-white border-l-8 " +
                        "flex flex-col text-white p-4 z-1"}>
                        <div className={""}>
                            <p className={"text-4xl"}>Always</p>
                        </div>
                        <h1 className={"text-6xl font-bold md:text-8xl"}>Served Fresh</h1>
                        <h1 className={"text-6xl font-bold md:text-8xl"}>Daily</h1>
                        <div className={"flex"}>
                            <button className={"m-1 border w-[200px] px-4 py-2 rounded-2xl cursor-pointer"}>Delivery
                            </button>
                            <button className={"m-1 border w-[200px] px-4 py-2 rounded-2xl cursor-pointer"}>Take-out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;