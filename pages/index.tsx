import { NextPage } from "next";

import "styled-components";
import tw from "twin.macro";

const Button = tw.button`
    bg-red-500
    hover:bg-red-700
    text-white
    font-bold
    py-2 
    px-4 
    border-black
    rounded
`;

const IndexPage: NextPage = () => {
    return (
        <>
            <div className="fade-out w-full flex justify-items-center flex-wrap">
                <h1 className="text-6xl font-title w-full pt-4 pb-2 uppercase font-bold bg-clip-text bg-gradient-to-br from-blue-400 to-pink-400 text-transparent md:text-9xl">
                    Hi visitor!
                </h1>
                <p className="text-xl w-full pb-2 text-gray-900 md:text-2xl">
                    I&apos;m <span className="text-yellow-600">javascript</span> and <span className="text-typescript">typescript</span> developer focused on website design and frontend development.
                </p>
               
                <p className="text-xl w-full pb-16 md:text-2xl">Below you can see some of my projects.</p>
            </div>

            <div className="py-20 px-10 bg-typescript rounded-sm">
                <Button>Hello mptherfucker¨!</Button>
            </div>
        </>
    );
};

export default IndexPage;
