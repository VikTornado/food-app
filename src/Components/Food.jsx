import React from 'react';
import img1 from "../Assets/1-2.jpg"
import img2 from "../Assets/2-2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/2.jpg"

const Food = () => {
    const images = [
        {img: img1},
        {img: img2},
        {img: img3},
        {img: img4},
    ]
    return (
        <div className={"w-full h-full"}>
            <div className={"grid grid-cols-1 md:grid-cols-2"}>
                {images.map((item) => {
                    return(
                        <img alt={"img"} src={item.img} className={"w-full"}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Food;