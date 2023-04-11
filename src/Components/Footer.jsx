import React from 'react';

const Footer = () => {
    return (
        <div className={"w-full h-full bg-amber-500 px-4 py-20"}>
            <div className={"max-w-[1440px m-auto] grid grid-cols-2 text-center lg:grid-cols-4"}>
                <div className={"grid grid-cols-1 mb-5"}>
                    <h2 className={"text-4xl"}>item</h2>
                    <span className={"text-2xl p-2"}>product1</span>
                    <span className={"text-2xl p-2"}>product2</span>
                    <span className={"text-2xl p-2"}>product3</span>
                    <span className={"text-2xl p-2"}>product4</span>
                </div>
                <div className={"grid grid-cols-1 mb-5"}>
                    <h2 className={"text-4xl"}>item</h2>
                    <span className={"text-2xl p-2"}>product1</span>
                    <span className={"text-2xl p-2"}>product2</span>
                    <span className={"text-2xl p-2"}>product3</span>
                    <span className={"text-2xl p-2"}>product4</span>
                </div>
                <div className={"grid grid-cols-1 mb-5"}>
                    <h2 className={"text-4xl"}>item</h2>
                    <span className={"text-2xl p-2"}>product1</span>
                    <span className={"text-2xl p-2"}>product2</span>
                    <span className={"text-2xl p-2"}>product3</span>
                    <span className={"text-2xl p-2"}>product4</span>
                </div>
                <div className={"grid grid-cols-1 mb-5"}>
                    <h2 className={"text-4xl"}>item</h2>
                    <span className={"text-2xl p-2"}>product1</span>
                    <span className={"text-2xl p-2"}>product2</span>
                    <span className={"text-2xl p-2"}>product3</span>
                    <span className={"text-2xl p-2"}>product4</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;