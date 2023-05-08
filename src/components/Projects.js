import React from "react";
import { projects } from "../data";

const Projects = () => {

    return (
        <section className="bg-secondery text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#73e2a7] pb-2">
                        Projects
                    </h2>

                    <p className="pb-5">
                        These are some of my projects. Each of these built using different stacks.
                    </p>
                </div>

                <div className="about-img"></div>
            </div>

                <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                    {projects.map((project, i) => {
                        return (
                            <div className="relative" key={i}>
                                <img src={project.img} alt={project.title} />
                                <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100">
                                    <p className="py-5 text-center font-bold px-2 text-white">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default Projects;