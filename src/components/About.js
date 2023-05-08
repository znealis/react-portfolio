import React from "react";
import AboutImg from "../assets/AboutImg.png";

const About = () => {
    return (
        <section className="bg-primary text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
               <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#73e2a7] pb-2">
                        About Me
                    </h2>

                    <p className="pb-5">
                    Hi, My Name Is Zachary Nealis everyone calls me Zach. I am a
                    Frontend Developer. I build amazing websites with React and
                    Tailwind CSS.
                    </p>
                    <p className="pb-5">
                    I am proficient in Frontend skills like React.js, Tailwind CSS, HTML, and many more.
                    </p>

                    <p className="pb-5">In backend I know Node.js, Express.js, MongoDB, and Mongoose. As well as experience in MySQL and PHP.</p>

                    <p>
                        In my spare time I enjoy reading, working out, and coaching wrestling.
                    </p>
                </div>

                <div className="about-img">
                    <img
                        src={AboutImg}
                        alt="coding illustration"
                        className="lg:w-[80%] md:ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;