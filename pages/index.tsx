import { NextPage } from "next";

import { Slideshow } from "../components";


const IndexPage: NextPage = () => {
    return (
        <>
            <div>
                <h1>
                    Hi visitor!
                </h1>
                <p>
                    I&apos;m <span>javascript</span> and <span>typescript</span> developer focused on website design and frontend development.
                </p>
               
                <p>Below you can see some of my projects.</p>
            </div>

            <div>
                <Slideshow />
            </div>
        </>
    );
};

export default IndexPage;
