import React from "react";
import HeroImg from "../assets/Hero-img.png";

import {
    AiOutlineLinkedin,
    AiOutlineGithub,

} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="bg-secondery px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br /> my name is  <span className="text-accent">Zachary Nealis!</span> <br />
                        Frontend Developer/CyberSecurity Professional
                    </h1>

                    <p className="py-5">
                        As a Frontend Developer, I utilize technonlogies like React.Js and Tailwind CSS to curate perfect visusauls for various businesses. 
                    </p>

                    <div className="flex py-5">
                        <a
                            href="https://www.linkedin.com/in/zach-nealis-01345b17a/"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineLinkedin size={40} /> {" "}
                        </a>
                        <a
                            href="https://github.com/znealis"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineGithub size={40} /> {" "}
                        </a>
                    </div>

                    <a
                        href="/#projects"
                        className="btn bg-accent border-2 border-[#73e2a7] text-white px-6 py-3 hover:bg-transparent"
                    >
                        See Projects
                    </a>
                </div>

                <div className="hero-img">
                    <img
                        src={HeroImg}
                        alt="coding illustration"
                        className="lg:w-[80%] h-[80%] ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;