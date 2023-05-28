import React from "react";


const Contact = () => {
    return(
        <section className="bg-secondery px-5 py-32" id="contact">
            <div className="text-center md:w-[60%] mx-auto text-white">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[#73e2a7] pb-2">
                    Contact Me
                </h2>
                <p>
                    I am currently pursuing a full time Frontend Developer and/or Cyber Security position 
                    to kickstart my career and further enchance my skill set in the industry. 
                    To discuss potential opportunities, I can be reached at information below.
                </p>

                <p className="py-2">
                    <span className="font-bold">Email:</span> z.nealis@gmail.com
                </p>
                <p className="py-2">
                    <span className="font-bold">Phone:</span> 856-308-2521
                </p>
            </div>
        </section>
    );
};

export default Contact;